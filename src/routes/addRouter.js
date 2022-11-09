import express from 'express';

const router = express.Router();


router.get('/addCard', async (req, res) => {
  const initState = { path: req.originalUrl };
  res.render('Layout', initState);
});

router.post('/addCard', async (req, res) => {
  const initState = { path: req.originalUrl };
  res.render('Layout', initState);
});
