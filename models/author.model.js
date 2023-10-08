const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const authorSchema = new Schema (
    {
        name:{
            type: String,
            required: "Name is required",
            trim: true,
            minLength: [2, "Name needs at least 2 chars"],
        },
        bio: {
            type: String, 
            required: "Bio is required",
            minLength: [20, "Bio needs at least 2 chars"],
            maxLength: [500, "Bio needs at least 2 chars"],
        },
        century: {
            type: Number,
            required: "Century is required",
        },
        genres: {
            type: String,
            enum: ["Horror", "Sci-fi", "Romance", "Fantasy"],
            required: "Genere is required",
        }
    },
    {
        timestamps: true,
        toJSON: {
            transform: function(doc, ret){
                ret.id = ret._id;
                delete ret._id;
                delete ret.__v;
                return ret;
            }
        }
    }
);

const Author = mongoose.model('Author', authorSchema);
module.exports = Author;