// const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

// const express_graphql = require('express-graphql');
// const { buildSchema } = require('graphql');

const graphql_middleware = require('./graphql/middleware');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// //grapql
// var schema = buildSchema(`
//     type Query {
//         message: String
//     }
// `);

// // Root resolver
// var root = {
//   message: () => 'Hello World!'
// };
// // Create an express server and a GraphQL endpoint
// app.use('/graphql', express_graphql({
//   schema: schema,
//   rootValue: root,
//   graphiql: true
// }));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/graphql', graphql_middleware);

// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function (err, req, res) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
