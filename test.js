const handler = require('./api/runScan');

const req = {
  method: 'POST',
  body: { url: 'https://365himanshukumar-portfolio.vercel.app/' },
  headers: { 'x-forwarded-for': '127.0.0.1' }
};

const res = {
  setHeader: (k, v) => console.log('setHeader', k, v),
  status: (code) => {
    console.log('STATUS:', code);
    return {
      json: (data) => console.log('JSON:', data),
      end: () => console.log('END')
    };
  }
};

handler(req, res).catch(console.error);
