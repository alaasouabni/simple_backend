const express = require('express');
const { findByIdAndUpdate } = require('../models/model');
const Model = require('../models/model');

const router = express.Router()

//Post Method
router.post('/post', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    })

    try{
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    }
    catch(error){
        res.status(400).json({message:error.message})
    }
})

//Get All Method
router.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data);
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
})

//Get By ID Method
router.get('/getOne/:id', async (req, res) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data);
    } 
    catch(error){
        res.status(500).json({message:error.message});
    }
})

//Update By ID Method
router.patch('/update/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const updatedData = req.body;
        const options = {new : true};
        const result = await Model.findByIdAndUpdate(id, updatedData, options);
        res.send(result);
    }
    catch(error){
        res.status(400).json({message:error.message});
    }
})

//Delete By ID Method
router.delete('/delete/:id', (req, res) => {
    res.send('Delete By ID API')
})

module.exports = router;