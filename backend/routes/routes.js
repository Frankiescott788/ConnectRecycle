const { Router } = require('express');
const {
    sign_up,
    sign_in,
    createMaterial,
    getMaterials,
    createCollection,
    getCollections
} = require('../controllers/userControlers'); // Import all controller functions

const route = Router();

// User routes
route.post('/api/signup', sign_up);   // Sign-up route
route.post('/api/signin', sign_in);   // Sign-in route

// Material routes
route.post('/api/materials', createMaterial);   // Create material route
route.get('/api/materials', getMaterials);      // Get all materials route

// Collection routes
route.post('/api/collections', createCollection);   // Create collection route
route.get('/api/collections', getCollections);      // Get all collections route

module.exports = route;
