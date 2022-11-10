import express from 'express';
import { Candidate } from '../../db/models';

const cardRouter = express.Router();

cardRouter.get('/', async (req, res) => {
  const initState = { path: req.originalUrl };
  res.render('Layout', initState);
});

export default cardRouter;
