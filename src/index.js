require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = require('./router');

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use((req, res, next) => {
//   req.name = "Rahul";
//   next();
// })

// app.use((req, res, next) => {
//   const { 'x-user': xuser } = req.headers;
//   if (xuser === 'hello') {
//     next();
//   } else {
//     res.status(401).send({ message: "Unauthorized" });
//   }
// })

// const _mml = (req, res, next) => {
//   console.log("Middleware 1");
//   next();
// }

// app.get('/api/user', _mml, _mml, _mml, (req, res) => {
//   const { name } = req.query;
//   res.send(`Hello World! ${name}`);
// })



router.forEach(route => {
  const { path, method, middleware, action } = route;
  app[method](path, ...middleware, action);
})


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})


/**
 * Rest API
 * =========
 * get (read)
 * -> query string
 * -> path params
 * -> headers
 * post (create)
 * -> body (JSON, TEXT, FILE, FORM)
 * -> headers
 * -> path params
 * put (update)
 * -> body (JSON, TEXT, FILE, FORM)
 * -> headers
 * -> path params
 * patch (partial update)
 * -> body (JSON, TEXT, FILE, FORM)
 * -> headers
 * -> path params
 * delete (delete)
 * -> headers
 * -> path params
 * options (options)
 * -> headers
 * 
 * 
 * 
 * * Router (madularize)
 * * Session (cookie, session)
 * * Middleware (auth, logger)
 * * Error Handling (try-catch)
 */