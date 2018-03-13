'use strict';

const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
	title: {type: String, required: true},
	content: {type: String, required: true},
	author: {
		firstName: String,
		lastName: String
	},
	created: {type: Number}
});

blogSchema.virtual('authorString').get(function(){
	return `${this.author.firstName} ${this.author.lastName}`;
});

blogSchema.methods.serialize = function(){
	return {
		id: this._id,
		title: this.title,
		content: this.content,
		author: this.authorString,
		created: this.created
	};
};

const BlogPost = mongoose.model('BlogPost', blogSchema);

module.exports = {BlogPost};