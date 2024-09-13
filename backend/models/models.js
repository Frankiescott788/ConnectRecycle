const { Schema, model } = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

// USER MODEL
const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        validate: [isEmail, 'Please enter a valid email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minLength: [6, 'Password should have a minimum of 6 characters']
    }
}, { timestamps: true });

// Hash password before saving
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});

const User = model('User', userSchema);

// MATERIAL MODEL
const materialSchema = new Schema({
    materialName: {
        type: String,
        required: [true, 'Material name is required'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
    },
    pricePerKg: {
        type: Number,
        required: [true, 'Price per kg is required']
    }
}, { timestamps: true });

const Material = model('Material', materialSchema);

// COLLECTION MODEL
const collectionSchema = new Schema({
    collector: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Collector is required']
    },
    materials: [
        {
            material: {
                type: Schema.Types.ObjectId,
                ref: 'Material',
                required: [true, 'Material is required']
            },
            quantityInKg: {
                type: Number,
                required: [true, 'Quantity in kg is required']
            }
        }
    ],
    location: {
        street: String,
        city: String,
        state: String,
        zip: String,
        country: String
    },
    collectionDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['pending', 'completed', 'canceled'],
        default: 'pending'
    }
}, { timestamps: true });

const Collection = model('Collection', collectionSchema);

module.exports = { User, Material, Collection };
