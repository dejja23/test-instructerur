const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Photo = require('../models/Photo');

router.post(
  '/',
  [
    check('title', 'title is required')
      .not()
      .isEmpty(),
    check('url', 'url is required')
      .not()
      .isEmpty()
  ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    const { user_id, title, url } = req.body;
    try {
      photo = new Photo({
        user: user_id,
        title,
        url
      });
      await photo.save();
      res.json(photo);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('server error');
    }
  }
);

router.get('/:user_id', async (req, res) => {
  try {
    const photos = await Photo.find({ user: req.params.user_id });
    if (!photos)
      return res
        .status(404)
        .send({ msg: 'The user with the given ID has no photos.' });
    res.json(photos);
  } catch (error) {}
});

router.delete('/:id', async (req, res) => {
  try {
    let photo = await Photo.findById(req.params.id);
    if (!photo)
      return res
        .status(404)
        .send({ msg: 'The photo with the given ID was not found.' });
    photo = await Photo.findByIdAndDelete(req.params.id);
    res.send('photo removed');
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
