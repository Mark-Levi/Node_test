//  Запуск сервера HTTP ( GET,POST)

const http = require('http');
const url = require('url');
// const { parse } = require('querystring');

http
  .createServer((req, res) => {
    let urlParts = url.parse(req.url);

    console.log('Server work');
    console.log(urlParts);
    if (req.method === GET) {
      switch (urlParts.pathname) {
        case '/':
          homepage(req, res);
          break;
      }
    }
  })
  .listen(3000);

function homepage(req, res) {
  res.end('');
}
