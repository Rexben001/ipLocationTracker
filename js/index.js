// window.onload = () => {
//   fetch(
//     'https://api.ipgeolocation.io/ipgeo?apiKey=API_KEY'
//   )
//     .then((response) => response.json())
//     .then((data) => {
//       const div = document.getElementById('display');

//       console.log(data);
//       const items = [];
//       for (let key in data) {
//         console.log(key, data[key]);
//         const p = document.createElement('p');
//         const span = document.createElement('span');
//         const span2 = document.createElement('span');
//         const pp = document.createTextNode(`"${key}:" `);
//         const pp2 = document.createTextNode(`${data[key]}`);
//         span.appendChild(pp);
//         span2.appendChild(pp2);
//         p.appendChild(span);
//         p.appendChild(span2);
//         // const pp = `<p><span>${key}:</span> <span>${data[key]}</span></p>`;
//         div.appendChild(p);
//       }
//     });
// };

const data = {
  calling_code: '+234',
  city: 'Lagos',
  connection_type: 'wireless',
  continent_code: 'AF',
  continent_name: 'Africa',
  country_capital: 'Abuja',
  country_code2: 'NG',
  country_code3: 'NGA',
  country_flag: 'https://ipgeolocation.io/static/flags/ng_64.png',
  country_name: 'Nigeria',
  country_tld: '.ng',
  currency: { code: 'NGN', name: 'Nigerian Naira', symbol: '₦' },
  district: '',
  geoname_id: '2332459',
  ip: '197.210.47.239',
  is_eu: false,
  isp: 'Reserved 3GFW-MSP',
  languages: 'en-NG,ha,yo,ig,ff',
  latitude: '6.52438',
  longitude: '3.37921',
  organization: 'MTN NIGERIA Communication limited',
  state_prov: 'Lagos',
  time_zone: {
    name: 'Africa/Lagos',
    offset: 1,
    current_time: '2020-10-07 22:51:39.715+0100',
    current_time_unix: 1602107499.715,
    is_dst: false,
  },
  zipcode: 'YABA',
};

const createItem = (data) => {
  const div = document.getElementById('display');
  const items = [];
  for (let key in data) {
    const p = document.createElement('p');
    const span = document.createElement('span');
    let span2 = document.createElement('span');
    const pp = document.createTextNode(
      key.includes('time_zone') || key.includes('currency')
        ? `"${key}": {`
        : `"${key}": `
    );
    let pp2 = document.createTextNode(`${data[key]}`);
    if (key.includes('time_zone') || key.includes('currency')) {
      const newData = data[key];
      pp2 = document.createElement('p');
      for (let key in newData) {
        pp2.className = 'inner';
        const span = document.createElement('span');
        span.className = 'left';
        const span2 = document.createElement('span');
        span2.className = 'right';
        const pp = document.createTextNode(`"${key}": `);
        const pp3 = document.createTextNode(`${newData[key]}`);
        const br = document.createElement('br');

        span.appendChild(pp);
        span2.appendChild(pp3);
        pp2.appendChild(span);
        pp2.appendChild(span2);
        pp2.appendChild(br);
        // pp2.appendChild(p);
      }
      const closing = document.createElement('span');
      closing.className = 'closing';
      const node = document.createTextNode(`}`);
      closing.appendChild(node);
      pp2.appendChild(closing);
    }

    if (key.includes('country_flag')) {
      span2 = document.createElement('img');
      span2.src = data[key];
    } else {
      span2.appendChild(pp2);
    }
    span.appendChild(pp);
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

createItem(data);

const input = document.getElementById('input').value;
console.log('input>>>>', input);
