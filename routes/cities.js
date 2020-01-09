const express = require('express');
const router = express.Router();
const cityController = require('../app/api/controllers/cities');
router.get('/', cityController.getAll);
router.post('/', cityController.create);
router.get('/:cityId', cityController.getById);
router.put('/:cityId', cityController.updateById);
router.delete('/:cityId', cityController.deleteById);
module.exports = router;