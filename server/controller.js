module.exports = {

    register: (req, res)=> {
        const db = req.app.get('db');
        const {username, password} = req.body;
        db.register_user([username, password]).then(resp => {
            res.status(201).send(resp[0])
        }).catch(err => {
            res.status(401).send('user not found')

        })
    },

    login: (req, res) => {
        const db = req.app.get('db');
        const {username, password} = req.body;
        db.login([username, password])
        .then(resp => {
            res.status(200).send(resp[0])
        }).catch(err => {
            res.status(401).send('incorrect username or password')
        })
    },
    getUserPost: (req, res) => {
        console.log(req.body)
        const {id} = req.body
        const db = req.app.get('db')
        db.get_user_posts({id}).then(
            resp => {res.status(200).send(resp)}).catch(err => {
                res.status(400).send({})
            })
    },
    searchForPosts:(req, res) => {
        let postSearched = req.query.search
        const db = req.app.get('db')
        db.search_post(postSearched).then(resp => {
            res.status(200).send(resp)
        }).catch(err => {
            console.log(err)
        })
        
    }

    
}