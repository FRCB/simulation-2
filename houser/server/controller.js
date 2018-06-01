module.exports = {
    getAll: (req, res) => {
        const db = req.app.get('db');

        db.get_houses()
            .then(houses => res.status(200).send(houses))
            .catch(() => res.status(500).send())
    },
    addNewHouse: (req, res) => {
        const db = req.app.get('db');
        const { propertyname, address, city, state, zip, mortgage, rent } = req.body

        db.add_new_house([propertyname, address, city, state, zip, mortgage, rent])
            .then(houses => res.status(200).send(houses))
            .catch(() => res.status(500).send())
    },
    deleteHouse: (req, res) => {
        const db = req.app.get('db');
        const id = req.params.id;

        db.delete_house([id])
            .then(houses => res.status(200).send(houses)).catch(() => res.status(500).send())
    }
}