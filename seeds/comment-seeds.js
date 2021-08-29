const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'Texas could really use something like this!',
        post_id: 2,
        user_id: 1,
        created_at: '2021-08-29 21:27:00',
        updated_at: '2021-08-29 21:27:00'
    },
    {
        comment_text: 'Putting Designers out of work since 2013.',
        post_id: 1,
        user_id: 5,
        created_at: '2021-08-29 21:27:00',
        updated_at: '2021-08-29 21:27:00'
    },
    {
        comment_text: 'Will these be cheaper than Teslas?',
        post_id: 4,
        user_id: 3,
        created_at: '2021-08-29 21:27:00',
        updated_at: '2021-08-29 21:27:00'
    },
    {
        comment_text: 'Best not to exercise at all -- for safety.',
        post_id: 3,
        user_id: 2,
        created_at: '2021-08-29 21:27:00',
        updated_at: '2021-08-29 21:27:00'
    },
    {
        comment_text: 'So many jpgs!',
        post_id: 5,
        user_id: 1,
        created_at: '2021-08-29 21:27:00',
        updated_at: '2021-08-29 21:27:00'
    },
    {
        comment_text: 'This is why I use facebook.',
        post_id: 6,
        user_id: 4,
        created_at: '2021-08-29 21:27:00',
        updated_at: '2021-08-29 21:27:00'
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;