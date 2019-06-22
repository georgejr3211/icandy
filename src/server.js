import bodyParser from 'body-parser';
import express from 'express';
import morgan from 'morgan';
import routes from './v1/routes';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan(':method :url :response-time :status'));

app.get('/', (req, res) => {
  res.json({
    appName: 'iCandy'
  });
});

app.use('/api/v1', routes);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server on at port ${port}`));