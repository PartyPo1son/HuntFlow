import express from 'express';
import { hash, compare } from 'bcrypt';
import { User } from '../../../db/models';

const router = express.Router();

router.post('/auth', async (req, res) => {
  // console.log(req.body)
  // req.body - объект с данными пользователя
  const { name, email, password } = req.body;
  // если email уже имеется в базе данных, вернет статус ошибки
  if (!email || !password) return res.sendStatus(418);
  // находим пользователя в БД по email
  const user = await User.findOne({ where: { email } });
  // если пользователя нет, то вернет статус ошибки
  if (!user) return res.sendStatus(400);
  // расхэшировать пароль
  const isValidPass = await compare(password, user.password);
  // если isValidPass false верни ошибку
  if (!isValidPass) return res.sendStatus(400);
  //
  req.session.user = { id: user.id, email: user.email };
  // верни статус ок
  return res.sendStatus(200);
});

router.post('/reg', async (req, res) => {
  // req.body - объект с данными пользователя
  const { name, email, password } = req.body;
  // если не введен email , то вернет статус ошибки
  if (!email || !password || !name) return res.sendStatus(400);
  // хэшируем пароль 10 раз
  const hasPassword = await hash(password, 10);
  // findorcreate (секвалайз) возвращает массив с объектом USER и булевое значение тру и фолс
  const [user, isCreated] = await User.findOrCreate({
    // проверка есть ли  email в бд
    where: { email },
    // если email нет в бд то запиши пользователя
    defaults: { name, email, password: hasPassword },
  });
  // если isCreated-false то верни статус ошибки
  if (!isCreated) return res.sendStatus(400);
  //
  req.session.user = { id: user.id, email: user.email };
  // верни статус ок
  return res.sendStatus(200);
});

export default router;
