const { User, Material, Collection } = require('../models/models'); // Import all models from models file
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// SIGN UP FUNCTION
const sign_up = async (req, res) => {
    try {
        const { username, email, password, phone, address, userType } = req.body;

        // Create a new user with all necessary fields
        const new_user = await User.create({
            username,
            email,
            password,
            phone,
            address,
            userType
        });

        // Create JWT token
        const token = jwt.sign({ userid: new_user._id }, 'frankie123', {
            expiresIn: '3d' // Token expires in 3 days
        });

        // Set auth token cookie
        res.cookie('auth_token', token, {
            httpOnly: true, // More secure to avoid client-side JavaScript access
            maxAge: 3 * 24 * 60 * 60 * 1000 // 3 days in milliseconds
        });

        // Respond with the newly created user
        res.status(201).json({
            status: 'success',
            data: {
                user: new_user
            }
        });
    } catch (error) {
        // Check for duplicate email error
        if (error.code === 11000) {
            return res.status(400).json({ err: "Email already exists" });
        }

        // Prepare error messages
        const err_messages = {
            username_err: "",
            email_err: "",
            password_err: "",
            phone_err: "",
            address_err: "",
            userType_err: ""
        };

        // Check for validation errors
        if (error.errors) {
            Object.values(error.errors).forEach(({ properties }) => {
                switch (properties.path) {
                    case 'username':
                        err_messages.username_err = properties.message;
                        break;
                    case 'email':
                        err_messages.email_err = properties.message;
                        break;
                    case 'password':
                        err_messages.password_err = properties.message;
                        break;
                    case 'phone':
                        err_messages.phone_err = properties.message;
                        break;
                    case 'address':
                        err_messages.address_err = properties.message;
                        break;
                    case 'userType':
                        err_messages.userType_err = properties.message;
                        break;
                }
            });
        }

        // Return error response
        return res.status(400).json({
            status: 'fail',
            errors: err_messages
        });
    }
};

// SIGN IN FUNCTION
const sign_in = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the user exists by email
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(400).json({ err: "Invalid email or password" });
        }

        // Compare provided password with stored hashed password
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ err: "Invalid email or password" });
        }

        // Generate JWT token upon successful login
        const token = jwt.sign({ userid: existingUser._id }, 'frankie123', {
            expiresIn: '3d' // Token expiration time
        });

        // Set the JWT token in a cookie
        res.cookie('auth_token', token, {
            httpOnly: true, // Secure cookie
            maxAge: 3 * 24 * 60 * 60 * 1000 // 3 days in milliseconds
        });

        // Respond with user data and success status
        res.status(200).json({
            status: 'success',
            data: {
                user: existingUser
            }
        });
    } catch (error) {
        return res.status(500).json({
            status: 'fail',
            err: 'Something went wrong. Please try again later.'
        });
    }
};

// MATERIALS CRUD FUNCTIONS

// Create a new material
const createMaterial = async (req, res) => {
    try {
        const { materialName, description, pricePerKg } = req.body;

        const newMaterial = await Material.create({
            materialName,
            description,
            pricePerKg
        });

        res.status(201).json({
            status: 'success',
            data: {
                material: newMaterial
            }
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message
        });
    }
};

// Get all materials
const getMaterials = async (req, res) => {
    try {
        const materials = await Material.find();
        res.status(200).json({
            status: 'success',
            data: {
                materials
            }
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message
        });
    }
};

// COLLECTIONS CRUD FUNCTIONS

// Create a new collection
const createCollection = async (req, res) => {
    try {
        const { collector, materials, location, status } = req.body;

        const newCollection = await Collection.create({
            collector,
            materials,
            location,
            status
        });

        res.status(201).json({
            status: 'success',
            data: {
                collection: newCollection
            }
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message
        });
    }
};

// Get all collections
const getCollections = async (req, res) => {
    try {
        const collections = await Collection.find().populate('collector').populate('materials.material');
        res.status(200).json({
            status: 'success',
            data: {
                collections
            }
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message
        });
    }
};

module.exports = {
    sign_up,
    sign_in,
    createMaterial,
    getMaterials,
    createCollection,
    getCollections
};
