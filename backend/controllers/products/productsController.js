const router = require('express').Router();
const productModel = require('../../models/products/productsModel')
const auth = require('../../authentication/auth')

router.post('/', productModel.createNewProduct)

// Hämta hela databasen
router.get('/', productModel.getAllProducts)

// Hämta specifik produkt
router.get('/:id', productModel.getOneProduct)

// Uppdatera produkt
router.patch('/:id', productModel.updateProduct)

// Deleta produkt
router.delete('/:id', auth.verifyToken, productModel.deleteProduct)




module.exports = router;