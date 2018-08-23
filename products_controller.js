


module.exports= {
    create: (req, res, next) => { 
        const db = req.app.get('db');
       const {name, description, price , imageurl} = req.body 
        db.create_product([name, description, price, imageurl]).then(() => res.sendStatus(200))

    },
    
    getOne: (req, res, next) => {
        const db = req.app.get('db');  
        // const {params} = req; 

        db.read_product([req.params.id]).then(product => res.status(200).send(product))
    },
    
    getAll: (req, res, next) => {
        const db = req.app.get('db');

        db.read_products().then(productss => res.status(200).send(productss))

    } , 
    update: (req, res, next) => {
        const db = req.app.get('db');
        const {params, query} = req; 

        db.update_product([params.id, query.desc ])
        .then(() => res.sendStatus(200))

    } ,
    delete: (req, res, next) => {
        const db = req.app.get('db');
        const{ params} = req; 


        db.delete_product([params.id]).then( () => res.sendStatus(200))

    } 
}; 