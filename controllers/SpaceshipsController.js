module.exports = {
    getAll: (req, res, next) => {
        const dbInstance = req.app.get('db');
        dbInstance.get_spaceships()
        .then(results => {
            console.log(1111, results)
            res.status(200).send(results)
        }).catch(err => {
            console.log(1111, err)
            res.status(500).send(err)
        })
    },
    createSpaceship: (req, res, next) => {
        console.log('getti to create')
        const dbInstance = req.app.get('db');
        dbInstance.create_spaceship(req.body)
        .then(result => {
            console.log(55555, result)
            res.status(200).send(result)
        }).catch(err => {
            console.log(5555, err)
            res.status(500).send(err)
        })
    }
}