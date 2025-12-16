// const jsonServer= require('json-server');
// const server = jsonServer.create();
// const router = jsonServer.router('db.json');
// const middlewares = jsonServer.defaults();

// server.use(middlewares);

// server.use((req, res, next) => {
//   console.log('Request received');
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PUT, DELETE, PATCH, OPTIONS",
//   );
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
//   server.use(router);
//   server.listen(6000, () => {
//     console.log('JSON Server is running');
//   })
// })

/****************************************************************************/

const express = require('express');
const router = require('./router');
const app = express();
// const middleware = require('./middleware');
// var router = express.Router();


const port = 3001;


const middleware = function (req, res, next){
  // const response = NextResponse.next();
   console.log('middleware zzzzzzzzzzzzzz', req?.originaUrl);
  //  console.log('middleware zzzzzzzzzzzzzz');
   next();
}
// app.get('/', (req, res) => {
//   res.send({initial: 'Hello World from Express!'});
// });
app.use(middleware);
app.use('/', router);


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

/****************************************************************************/

// const { createServer } = require('http')
// const { parse } = require('url')
// const next = require('next')
// const dev = process.env.NODE_ENV !== 'production'
// const hostname = 'localhost'
// const port = 3001
// // when using middleware `hostname` and `port` must be provided below
// const app = next({ dev, hostname, port })
// const handle = app.getRequestHandler()

// app.prepare().then(() => {
//   createServer(async (req, res) => {
//       // Be sure to pass `true` as the second argument to `url.parse`.
//       // This tells it to parse the query portion of the URL.
//       const parsedUrl = parse(req.url, true)
//       const { pathname, query } = parsedUrl

//       if (pathname === '/a') {
//         await app.render(req, res, '/a', query)
//       } else {
//         res.send({initial: 'Hello World from Express!'});
//         // await handle(req, res, parsedUrl)
//       }
//   })
//     .listen(port, () => {
//       console.log(`> Ready on http://${hostname}:${port}`)
//     })
// })