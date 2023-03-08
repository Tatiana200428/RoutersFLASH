const { Router } = require('express');
const router = Router();

//PRODUCTOSSSSSS
router.get('/getProduct', (req, res) => {
    req.getConnection((err, myconn) => {
        if (err) return res.send(err)

        myconn.query('SELECT * FROM product', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows);
        })
    })
});

router.put('/postProduct', (req, res) => {
    req.getConnection((err, myconn) => {
        if (err) return res.send(err)

        myconn.query('INSERT INTO product SET ?', [req.body], (err, rows) => {
            if (err) return res.send(err)
            res.send('Producto registrado con exito!');
        })
    })
});

router.delete('/:id/deleteProduct', (req, res) => {
    req.getConnection((err, myconn) => {
        if (err) return res.send(err)

        myconn.query('DELETE FROM product WHERE id_product = ? ', [req.params.id], (err, rows) => {
            if (err) return res.send(err)
            res.send('Producto eliminado con exito!');
        })
    })
});

router.post('/:id/postProduct', (req, res) => {
    req.getConnection((err, myconn) => {
        if (err) return res.send(err)

        myconn.query('UPDATE product SET id_product = ?', [req.body, req.params.id], (err, rows) => {
            if (err) return res.send(err)
            res.send('Producto actualizado con exito!');
        })
    })
});

//CATEGORIASSSSSSSSSSS
router.get('/getProduct', (req, res) => {
    req.getConnection((err, myconn) => {
        if (err) return res.send(err)

        myconn.query('SELECT * FROM product', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows);
        })
    })
});

router.put('/postProduct', (req, res) => {
    req.getConnection((err, myconn) => {
        if (err) return res.send(err)

        myconn.query('INSERT INTO product SET ?', [req.body], (err, rows) => {
            if (err) return res.send(err)
            res.send('Producto registrado con exito!');
        })
    })
});

router.delete('/:id/deleteProduct', (req, res) => {
    req.getConnection((err, myconn) => {
        if (err) return res.send(err)

        myconn.query('DELETE FROM product WHERE id_product = ? ', [req.params.id], (err, rows) => {
            if (err) return res.send(err)
            res.send('Producto eliminado con exito!');
        })
    })
});

router.post('/:id/postProduct', (req, res) => {
    req.getConnection((err, myconn) => {
        if (err) return res.send(err)

        myconn.query('UPDATE product SET id_product = ?', [req.body, req.params.id], (err, rows) => {
            if (err) return res.send(err)
            res.send('Producto actualizado con exito!');
        })
    })
});




module.exports = router;

