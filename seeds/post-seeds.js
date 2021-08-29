const { Post } = require('../models');

const postData = [
    {
        title: 'Canva is now worth Billions',
        post_text: 'Canva CEO Melanie Perkins will tell us about the journey to a $15B valuation at Disrupt.',
        user_id: 1,
        created_at: '2021-08-29 21:27:00',
        updated_at: '2021-08-29 21:27:00'
    },
    {
        title: 'Tesla wants to sell electricity in Texas',
        post_text: 'Elon Musk’s Tesla is looking beyond electric vehicles, solar panels and energy storage and wants to now supply electricity directly to customers.',
        user_id: 2, 
        created_at: '2021-08-29 21:27:00',
        updated_at: '2021-08-29 21:27:00'
    },
    {
        title: 'Peloton subpoenaed over treadmill injury',
        post_text: 'Peloton has received 72 reports of adult users, children, pets and/or objects being pulled under the rear of the treadmill.',
        user_id: 3,
        created_at: '2021-08-29 21:27:00',
        updated_at: '2021-08-29 21:27:00'
    },
    {
        title: 'Electric vehicle company Rivian',
        post_text: 'Rivian, the electric vehicle startup backed by Ford and Amazon, has confidentially filed paperwork to go public.',
        user_id: 2,
        created_at: '2021-08-29 21:27:00',
        updated_at: '2021-08-29 21:27:00'
    },
    {
        title: 'The pure hell of managing your JPEGs',
        post_text: 'Hello and welcome back to Equity, TechCrunch’s venture capital-focused podcast, where we unpack the numbers behind the headlines.',
        user_id: 4,
        created_at: '2021-08-29 21:27:00',
        updated_at: '2021-08-29 21:27:00'
    },
    {
        title: 'Twitter experiencing widespread outages',
        post_text: 'Twitter users in Canada and parts of the U.S. appear to be having trouble accessing the social media platform on Friday morning.',
        user_id: 5,
        created_at: '2021-08-29 21:27:00',
        updated_at: '2021-08-29 21:27:00'
    },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;