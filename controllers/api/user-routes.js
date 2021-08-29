const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const session = require('express-session');
const withAuth = require('../../utils/auth');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// GET all users
router.get('/', (req, res) => {
    // access the User model
    User.findAll({
        attributes: { exclude: ['password'] }
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// GET a single user by id 
router.get('/:id', (req, res) => {
        // access the User model
        User.findOne({
            attributes: {
                exclude: ['password']
            },
            // find user by id
            where: {
                id: req.params.id
            },
            // Include the posts that the user has contributed to
            include: [
                {
                model: Post,
                attributes: ['id', 'title', 'post_text'] 
                }, 
                {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id'],
                include: {
                    model: Post,
                    attributes: ['title']
                }
            } 
        ]
    })
    .then(dbUserData => {
        if (!dbUserData) {
            // if no user is found...
            res.status(404).json({ message: 'No user with this id is found' });
            return;
        }
        // if a user is found, return the data as json
        res.json(dbUserData);
    })
    // returns error if there is a server error
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Add a new user
router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    // This sends the user data back to the user to confirm
    .then(dbUserData => {
        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;

            res.json(dbUserData);
        });
    })
    // return any server errors here
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// login route
router.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        } 
    }).then(dbUserData => {
        if (!dbUserData) {
            res.status(400).json({ message: 'No user exists with that email address'});
            return;
        }
        const validPassword = dbUserData.checkPassword(req.body.password);
        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password'});
            return;
        }
        req.session.save(() => {
            // session vars
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;

            res.json({ user: dbUserData, message: 'You are now logged in!'});
        });
    });
});

// logout existing user
router.post('/logout', withAuth, (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

// update an existing user
router.put('/:id', withAuth, (req, res) => {
    User.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => {
        if (!dbUserData[0]) {
            res.status(404).json({ message: 'No user found with this id'});
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})

// Delete an existing user
router.delete('/:id', withAuth, (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this ID'});
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;

