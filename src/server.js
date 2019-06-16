import express from 'express';
import bodyParser from 'body-parser';
import routes from './v1/routes';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.json({
    appName: 'iCandy'
  });
});

app.use('/api/v1', routes);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server on at port ${port}`));