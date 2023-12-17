const express = require('express')
const languages = express.Router()
const Language = require('../models/language.js')
const languageSeedData = require('../models/language_seed.js')

// Index:
languages.get('/', (req, res) => {
    Language.find()
        .then(foundLanguages => {
            res.json(foundLanguages)
        })
})

languages.get('/seed', (req, res) => {
    Language.insertMany(languageSeedData)
        .then(createdLanguages => {
            res.json({
                message: "Seed successful!"
            })
        })
})

// Show:
languages.get('/:name', (req, res) => {
    Language.findOne({ name: req.params.name.toLowerCase() })
        .then(foundLanguage => {
            res.json(foundLanguage)
        })
})

module.exports = languages
