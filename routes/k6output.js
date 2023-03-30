const express = require('express')
const router = express.Router()
const outputModel = require('../models/k6output')

router.get('/', async (req, res) => {
    try {
        const output = await outputModel.find();
        res.status(200).json(output);
    }
    catch (err) {
        res.status(500).json({ msg: err.msg })
    }
})

router.post('/', async (req, res) => {
    const output = new outputModel({
        name: req.body.name,
        age: req.body.age
    })
    try {
        const newOut = await output.save()
        res.status(201).json(newOut)
    } catch (err) {
        res.status(500).json({ msg: err.msg })
    }
})

module.exports = router