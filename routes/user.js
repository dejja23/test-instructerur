const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const Photo = require('../models/Photo');

router.post(
  '/',
  [
    check('name', 'name is required')
      .not()
      .isEmpty(),
    check('surName', 'surName is required')
      .not()
      .isEmpty(),
    check('birthPlace', 'birthPlace is required')
      .not()
      .isEmpty(),
    check('birthYear', 'birthYear is required')
      .not()
      .isEmpty()
  ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    const { name, surName, birthYear, birthPlace } = req.body;

    try {
      user = new User({
        name,
        surName,
        birthPlace,
        birthYear
      });
      await user.save();
      res.json(user);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('server error');
    }
  }
);

router.get('/', async (req, res) => {
  try {
    const users = req.query.name
      ? await User.find({ name: req.query.name })
      : await User.find();
    res.json(users);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('server error');
  }
});

router.put(
  '/:id',
  [
    check('name', 'name is required')
      .not()
      .isEmpty(),
    check('surName', 'surName is required')
      .not()
      .isEmpty(),
    check('birthPlace', 'birthPlace is required')
      .not()
      .isEmpty(),
    check('birthYear', 'birthYear is required')
      .not()
      .isEmpty()
  ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    try {
      let user = await User.findById(req.params.id);
      if (!user)
        return res
          .status(404)
          .send({ msg: 'The user with the given ID was not found.' });
      user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true
      });
      res.json(user);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('server error');
    }
  }
);

router.delete('/:id', async (req, res) => {
  try {
    await Photo.deleteMany({ user: req.params.id });

    await User.findByIdAndDelete(req.params.id);

    res.json('User deleted');
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
