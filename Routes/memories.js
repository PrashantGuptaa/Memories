const express = require('express');
const memoriesRoutes = express.Router();

memoriesRoutes.post('/create/:userId', (re, res) => {res.send("TEST RESPONSE")}) // Create Memory
memoriesRoutes.get('/edit/:memoryId/:userId', () => {}) // Edit Memory
memoriesRoutes.get('/add/images/:memoryId/:userId', () => {}) // Add Images to a memory
memoriesRoutes.get('/delete/images/:memoryId/:userId', () => {}) // Delete Image from a memory
memoriesRoutes.get('/delete/memory/:memoryId/:userId', () => {}) // Delete Complete Memory
memoriesRoutes.get('/view/allMemories/:userId/:otherPersonEmailId', () => {}) // View Other User All Memories
memoriesRoutes.get('/view/memory/:userId/:otherPersonEmailId/:memoryId', () => {}) // View Other User Specific Memory
memoriesRoutes.get('/view/allMyMemories/:userId', () => {}) // View  My All Memories
memoriesRoutes.get('/view/myMemory/:userId/:memoryId', () => {}) // View My Specific Memory

module.exports = memoriesRoutes;