const express = require('express')
const data = require('./db.json');
// import { NextResponse, type NextRequest, userAgent } from "next/server";

// const middleware = require('./middleware.ts');

const router = express.Router()

// middleware that is specific to this router
// const timeLog = (req, res, next) => {
//   console.log('Time: ', Date.now())
//   next()
// }
// router.use(timeLog)




// define the home page route
router.get('/', (req, res, next) => {
  // res.setHeader('Content-Type', 'text/event-stream');
  // res.setHeader('Cache-Control', 'no-cache');
  // res.setHeader('Connection', 'keep-alive');
  console.log('express', req.originalUrl);
  next();
  res.send({initial: 'Hello World from Express!'});
})
// define the about route
router.get('/product', (req, res) => {
  console.log('get express', req.originalUrl);
  res.send(data);
})

router.get('/products/:id', (req, res) => {
  // console.log('Hello World from Express!', req.protocol);
  // console.log('Hello World from Express!', req.get('host'));
  const result = data.products.filter(product => product.id === req.params.id)[0];
  console.log('get product Express!', req.originalUrl);
  console.log('get product Express!', req.params.id );
  console.log('get product Express!',  result);
  // console.log('Hello World from Express!', req.hostname);
  // console.log('get product Express!', req.params.id);
  // console.log('req.param!', req.params);
  res.send(result);
})

module.exports = router