import express from 'express';
import morgan from 'morgan';
import session from 'express-session';
import store from 'session-file-store';
import path from 'path';
// import Layout from './components/Layout';
import jsxRender from './components/utils/jsxRender';
// import addRouter from './routes/addRouter';

const app = express();
const PORT = 3000;

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components'));

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());
app.use(morgan('dev'));

const FileStore = store(session);

const sessionConfig = {
  name: 'user_sid', // Имя куки для хранения id сессии. По умолчанию - connect.sid
  store: new FileStore(),
  secret: 'oh klahoma', // Секретное слово для шифрования, может быть любым
  resave: false, // Пересохранять ли куку при каждом запросе
  saveUninitialized: false, // Создавать ли сессию без инициализации ключей в req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
    httpOnly: true, // Серверная установка и удаление куки, по умолчанию true
  },
};
app.use(session(sessionConfig));

app.use((req, res, next) => {
  res.locals.path = req.originalUrl;
  res.locals.user = req.session.user;
  next();
});


app.get('/addCard', async (req, res) => {
  const initState = { path: req.originalUrl };
  res.render('Layout', initState);
});

app.get('/', async (req, res) => {
  const initState = { path: req.originalUrl };
  res.render('Layout', initState);
});

app.get('/reg/', (req, res) => {
  res.render('Layout');
});

app.get('/auth/', (req, res) => {
  res.render('Layout');
});

app.get('/logout', (req, res) => {
  res.clearCookie('user_sid');
  req.session.destroy();
  res.redirect('/');
});

app.listen(PORT, () => console.log(`App has started on port ${PORT}`));
