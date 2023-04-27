const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', (req , res)=> res.send('Bienvenido a la API AnimeS'))

router.post('/Animes', controllers.createAnime);
router.get('/Animes', controllers.getAllAnimes);

module.exports = router;