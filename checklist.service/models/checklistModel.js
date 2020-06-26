const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListItemSchema = new Schema({
    checked: Boolean,
    data: String
});
const ChecklistSchema = new Schema({
    title: String,
    description: String,
    lastUpdated: Date,
    listItems: [ListItemSchema]
});

module.exports = mongoose.model('checklist', ChecklistSchema);
