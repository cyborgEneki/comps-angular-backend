const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const { graphqlHTTP } = require('express-graphql');

const config = require('./config/config.json')
const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use(
    '/graphql',
    graphqlHTTP({
        schema: ,
        rootValue: ,
        graphiql: true,
    })
)

mongoose.connect(
    `mongodb+srv://${config.user}:${config.password}@mean-graphql.ujswl.mongodb.net/${config.dbname}?retryWrites=true&w=majority`, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    }
).then(() => {
    app.listen(3000, console.log('Connected to port 3000'))
}).catch((err) => console.log(err))