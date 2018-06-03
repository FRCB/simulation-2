module.exports = {

    getAll: (req, res) => {
        const db = req.app.get('db');

        db.get_houses()
            .then(houses => res.status(200).send(houses))
            .catch((err) => res.status(500).send(err))
    },

    addNewHouse: (req, res) => {
        const db = req.app.get('db');
        const { imgUrl, propertyName, address, city, state, zip, mortgage, rent } = req.body
        
        db.add_new_house([imgUrl, propertyName, address, city, state, zip, mortgage, rent])
            .then(houses => res.status(200).send(houses))
            .catch((err) => console.log(err))
    },

    deleteHouse: (req, res) => {
        const db = req.app.get('db');
        const id = req.params.id;

        db.delete_house([id])
            .then(houses => res.status(200).send(houses))
            .catch((err) => res.status(500).send(err))
    }
}

