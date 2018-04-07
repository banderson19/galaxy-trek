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
    }
}