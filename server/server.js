const express = require('express');
const jsonGraphqlExpress = require('json-graphql-server').jsonGraphqlExpress;
const cors = require('cors');
const data = require('./graphql/db.js');

const PORT = 3100;
const app = express();

app.use('/graphql', cors(), jsonGraphqlExpress(data));
app.listen(PORT);