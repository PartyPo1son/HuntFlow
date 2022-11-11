import express from 'express';
import morgan from 'morgan';

import session from 'express-session';
import store from 'session-file-store';
import path from 'path';
import { where } from 'sequelize';
import jsxRender from './components/utils/jsxRender';
import { Stage, Candidate, Vacansy } from '../db/models';
import addRouter from './routes/addRouter';
import authRouter from './routes/authRouter';
import cardRouter from './routes/cardRouter';

require('dotenv').config();

const PORT = process.env.SERVER_PORT || 3000;
const app = express();

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
app.use('/login', authRouter);
app.use('/addCard', addRouter);
app.use('/candidat', cardRouter);

app.use((req, res, next) => {
  res.locals.path = req.originalUrl;
  res.locals.user = req.session.user;
  next();
});

app.get('/', async (req, res) => {
  const vacansy = await Vacansy.findAll({});
  const allStatus = await Stage.findAll();
  const allCandidates = await Candidate.findAll({ include: [Stage, Vacansy] });
  const initState = { allStatus, allCandidates, vacansy };
  console.log(allStatus);
  res.render('Layout', initState);
});

app.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;
 const delCand = await Candidate.destroy({ where: { id } });
  // res.sendStatus(200);
  console.log('Fetch Delete', id, delCand);
});

app.get('/reg/', (req, res) => {
  res.render('Layout');
});

app.get('/auth', (req, res) => {
  res.render('Layout');
});

app.get('/candidates/vacancy/:vac/:id', async (req, res) => {
  const { vac, id } = req.params;
  const paramCandidates = await Candidate.findAll({
    where: {
      vacancy_id: vac,
      stage_id: id,
    },
    include: Vacansy,
  });
  res.json(paramCandidates);
});

app.get('/candidates/:id', async (req, res) => {
  const { id } = req.params;
  const paramCandidates = await Candidate.findAll({
    where: { vacancy_id: id }, include: [Stage, Vacansy],
  });
  // console.log('AAAAAAAAAAAA', paramCandidates);
  res.json(paramCandidates);
});

app.get('/logout', (req, res) => {
  res.clearCookie('user_sid');
  req.session.destroy();
  res.redirect('/');
});

app.listen(PORT, () => console.log(`App has started on port ${PORT}`));
