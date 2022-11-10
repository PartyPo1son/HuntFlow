import express from 'express';
import { Candidate } from '../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const initState = { path: req.originalUrl };
  res.render('Layout', initState);
});

router.post('/', async (req, res) => {
  console.log(req.body);
  const a = await Candidate.create(req.body);
  console.log(a);
  res.sendStatus(200);
});

router.get('/thanks', async (req, res) => {
  const initState = { path: req.originalUrl };
  res.render('Layout', initState);
});

export default router;
