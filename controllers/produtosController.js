
'product scrict'

module.exports = app => {
  
    let ProdutoModel = require('../models/produtoModel');
    
    this.post = async (req, res) => {
        let data = req.body
        console.log(data);
        try {
            const product = await ProdutoModel.create(data);
            return res.status(200).send({product});    
        } catch (err) {
            console.log(err)
            return res.status(400).send({ error: 'Resgistrations failed'})
        }
    };

    this.get = async(req, res) => {
        try {
            await ProdutoModel.find( (err, data) => {
                if(err){
                    return res.status(500).send({error: err})
                }
                res.status(200).send(data)
            });   
        } catch (err) {
            res.status(500).send({
                error: 'Error loading product'
            });
        }
    }


    this.search = async (req, res) => {

        try{
            await ProdutoModel.findById(req.params.id, (err, data) => {
                if(err){
                    return res.status(500).send({error: err})
                }
                res.status(200).send(data)
            });  
        }catch(err) {
            return res.status(400).send({error: 'Error loading product'})
        }

    }

    this.put = async (req, res) => {

        try {

            let product = await ProdutoModel.findByIdAndUpdate(req.params.id, req.body); 
            
            res.status(200).send(product);
            
        } catch(err) {
            return res.status(400).send({error: 'Error updating product'})
        }

    }

    this.delete = async (req, res) => {

        try{
            await ProdutoModel.findByIdAndRemove(req.params.id, (err, data) => {
                if(err){
                    return res.status(500).send({error: err})
                }
                res.status(200).send(data)
            });   
        }catch(err) {
            return res.status(400).send({error: 'Error deleting product'})
        }
        
    }

    return this;

}
