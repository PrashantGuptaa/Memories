const express = require('express');
const memoriesRoutes = express.Router();

const deleteCompleteMemory = require('../controllers/memoriesController/deleteCompleteMemory');
const patchMemory = require('../controllers/memoriesController/patchMemory');
const createMemories = require('./../controllers/memoriesController/createMemories');
const getAllMemories = require('./../controllers/memoriesController/getAllMemories');
const getSpecificMemoryData = require('./../controllers/memoriesController/getSpecificMemoryData');

memoriesRoutes.post('/create/:userId', createMemories) // Create Memory
memoriesRoutes.patch('/edit/:memoryId/:userId', patchMemory) // Edit Memory
memoriesRoutes.patch('/add/images/:memoryId/:userId', () => {}) // Add Images to a memory
memoriesRoutes.delete('/delete/images/:memoryId/:userId', () => {}) // Delete Image from a memory
memoriesRoutes.delete('/delete/memory/:memoryId/:userId', deleteCompleteMemory) // Delete Complete Memory
memoriesRoutes.get('/view/allMemories/:userId/:otherPersonEmailId', () => {}) // View Other User All Memories
memoriesRoutes.get('/view/memory/:userId/:otherPersonEmailId/:memoryId', () => {}) // View Other User Specific Memory
memoriesRoutes.get('/view/allMyMemories/:userId', getAllMemories) // View  My All Memories
memoriesRoutes.get('/view/myMemory/:memoryId/:userId', getSpecificMemoryData) // View My Specific Memory

module.exports = memoriesRoutes;