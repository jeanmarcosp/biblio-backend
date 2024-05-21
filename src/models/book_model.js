import mongoose, { Schema } from 'mongoose';

const book_schema = new Schema ({
    title: String,
    author: String,
    genre: String,
    rating: Number,
    readingtime: String,
    condition: String,
    datePublished: Date,
    ISBN: Number,
    uploadedBy: {
        userId: Schema.Types.ObjectId,
        username: String
    },
    tradeStatus: String
    },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  });

const book_mode = mongoose.model('Book', book_schema);

export default book_mode;