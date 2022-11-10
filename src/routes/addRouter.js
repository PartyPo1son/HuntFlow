import express from 'express';
import { Candidate } from '../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const initState = { path: req.originalUrl };
  res.render('Layout', initState);
});

router.post('/', async (req, res) => {
  const candidat = await Candidate.create({ ...req.body, stage_id: 1 });
  console.log(candidat);
  res.json(candidat);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const candidat = await Candidate.findByPk(id);
  const initState = { path: req.originalUrl, candidat };
  res.render('Layout', initState);
});

router.get('/thanks', async (req, res) => {
  const initState = { path: req.originalUrl };
  res.render('Layout', initState);
});

export default router;
