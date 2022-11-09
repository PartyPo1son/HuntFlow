import express from 'express';
import morgan from 'morgan';
import session from 'express-session';
import store from 'session-file-store';
import path from 'path';
import Layout from './components/Layout';
import jsxRender from './components/utils/jsxRender';

require('dotenv').config();

const PORT = process.env.SERVER_PORT || 3000;
const app = express();

const FileStore = store(session);

const sessionConfig = {
  name: 'user_sid', 				// Имя куки для хранения id сессии. По умолчанию - connect.sid
  secret: process.env.SESSION_SECRET ?? 'test',	// Секретное слово для шифрования, может быть любым
  resave: true, 				// Пересохранять ли куку при каждом запросе
  store: new FileStore(),
  saveUninitialized: false, 		// Создавать ли сессию без инициализации ключей в req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
    httpOnly: true, 				// Серверная установка и удаление куки, по умолчанию true
  },
};

app.engine('jsx', jsxRender); // custom render
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components'));

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(sessionConfig));

app.use((req, res, next) => {
  res.locals.path = req.originalUrl;
  res.locals.user = req.session.user;
  next();
});

app.get('/', async (req, res) => {
  const initState = {};
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
