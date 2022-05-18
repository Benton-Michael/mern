const mongoose = require("mongoose");
// all of the data types are used in the MovieSchema
const MovieSchema = new mongoose.Schema(
  // validation in mongoose requires an object with the type key and require the field
  {
    title: {
      type: String,
      // customized message for the front-end
      required: [true, "We Need a Movie Title!!!! Aghghg!!!!!"],
      maxlength: [
        50,
        "Please enter a Movie Title 50 characters or less!!!!  OMG!!!",
      ],
      unique: true,
    },
    genre: {
      // this will be used for dropdown menu
      type: String,
      required: [true, "Please enter a Movie genre!!! Aghghg!!!!!"],
      // these are the menu choices for the user
      enum: [
        "Comedy",
        "Fantasy",
        "Drama",
        "Sci-Fi",
        "Horror",
        "Documentary",
        "Action",
        "Animated",
      ],
    },
    boxArt: {
      type: String,
      required: [true, "A Movie Picture is required!!! Aghghg. MAAN"],
    },
    watchLength: {
      type: String,
      default: "N/A",
    },
    rating: {
      type: String,
      enum: ["G", "PG", "PG-13", "R", "NC-17"],
      required: [
        true,
        "Gotta have a rating my dude - Also, Birds are not real",
      ],
    },
    // this can be added to - but at first it will just create an empty array of 0 actors
    actors: {
      type: [String],
    },
    isKidFriendly: {
      type: Boolean,
      // default can be used with all data types
      default: false,
    },
    releaseYear: {
      type: Number,
      min: [
        1989,
        "Movies didn't even exist until 1990. Try again. Bye",
      ],
    },
  },
  {
    timestamps: true,
  }
);

// this is all relating to the Movie Collection - it's all one collection being used above

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;
