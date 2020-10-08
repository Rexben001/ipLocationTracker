window.onload = () => {
  fetchData();
};

const createItem = (data) => {
  const div = document.getElementById('display');

  div.innerHTML = '';

  const opening = document.createElement('span');
  opening.className = 'opening';
  const nodeOpening = document.createTextNode(`{`);
  opening.appendChild(nodeOpening);
  div.appendChild(opening);

  const items = [];
  for (let key in data) {
    const p = document.createElement('p');
    const span = document.createElement('span');
    let span2 = document.createElement('span');
    const pNode = document.createTextNode(
      key.includes('time_zone') || key.includes('currency')
        ? `"${key}": {`
        : `"${key}": `
    );
    let pNode2 = document.createTextNode(`${data[key]}`);
    if (key.includes('time_zone') || key.includes('currency')) {
      const newData = data[key];
      pNode2 = document.createElement('p');
      for (let key in newData) {
        if (!newData[key]) continue;
        pNode2.className = 'inner';
        const span = document.createElement('span');
        span.className = 'left';
        const span2 = document.createElement('span');
        span2.className = 'right';
        const pNode = document.createTextNode(`"${key}": `);
        const pNode3 = document.createTextNode(`${newData[key]}`);
        const br = document.createElement('br');

        span.appendChild(pNode);
        span2.appendChild(pNode3);
        pNode2.appendChild(span);
        pNode2.appendChild(span2);
        pNode2.appendChild(br);
      }
      const closing = document.createElement('span');
      closing.className = 'closing';
      const node = document.createTextNode(`}`);
      closing.appendChild(node);
      pNode2.appendChild(closing);
    }

    if (key.includes('country_flag')) {
      span2 = document.createElement('img');
      span2.src = data[key];
    } else {
      span2.appendChild(pNode2);
    }
    span.appendChild(pNode);
    p.appendChild(span);
    p.appendChild(span2);
    div.appendChild(p);
  }
  const closing = document.createElement('span');
  closing.className = 'closing';
  const node = document.createTextNode(`}`);
  closing.appendChild(node);
  div.appendChild(closing);
};

const fetchData = (query) => {
  fetch(
    query
      ? `https://api.ipgeolocation.io/ipgeo?apiKey=API_KEY&ip=${query}`
      : `https://api.ipgeolocation.io/ipgeo?apiKey=API_KEY&`
  )
    .then((response) => response.json())
    .then((data) => createItem(data))
    .catch((err) => err);
};

document.getElementById('search').addEventListener('click', () => {
  const input = document.getElementById('inputValue').value;
  fetchData(input);
});
