const { Comment } = require('../models');

const commentData = [
    {
        comment_text: '',
        post_id:
        user_id: 
    },
    {
        comment_text: '',
        post_id:
        user_id:
    },
    {
        comment_text: '',
        post_id:
        user_id:
    },
    {
        comment_text: '',
        post_id:
        user_id:
    },
    {
        comment_text: '',
        post_id:
        user_id:
    },
    {
        comment_text: '',
        post_id:
        user_id:
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;