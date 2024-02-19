const { Router } = require('express')
const buildPDF = require('../libs/pdfKit')
const router = Router()

router.get('/', (req, res) => {
    res.sendFile(`${process.cwd()}/src/public/index.html`)
});


router.post('/invoice', (req, res) => {

    const {name} = req.body;
    console.log(req.body);

    const stream = res.writeHead(200,{
        "Content-Type":"application/pdf",
        "Content-Disposition":"attachment;filename=invoice.pdf"
    })

    buildPDF((data)=>stream.write(data),
    ()=>stream.end());
   
});

module.exports = router