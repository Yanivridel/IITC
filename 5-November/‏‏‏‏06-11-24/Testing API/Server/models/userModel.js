import mongoose from 'mongoose';
import Joke from './jokeModel.js';

const userSchema = new mongoose.Schema({
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['GUEST', "USER", "ADMIN"],
        default: "GUEST"
    },
    phoneNumber: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.pre(/^find/, function (next) {
    const options = this.getOptions();
    if(!options || !options._includePassword)
        this.select("-password");

    next();
})
userSchema.statics.getUserWithPassword = function (params) {
    return this.findOne(params).setOptions({
        _includePassword: true
    })
}

// Virtual field for full name
userSchema.virtual('fullName').get(function() {
    return `${this.fName} ${this.lName}`;
});

// Use post middleware to add totalJokes field after finding documents
// userSchema.post('find', async function(docs) {
//     for (let doc of docs) {
//         const jokesCount = await Joke.countDocuments({ owner: doc._id });
//         doc.totalJokes = jokesCount;
//     }
// });

userSchema.virtual('totalJokes', {
    ref: 'Joke',
    localField: '_id',
    foreignField: 'owner',
    count: true // Only returns the count of matching documents
});

// Ensure virtuals are included in JSON and Object outputs
userSchema.set('toObject', { virtuals: true });
userSchema.set('toJSON', { virtuals: true });

export default mongoose.model("User", userSchema);