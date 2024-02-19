const PDF = require('pdfkit')

function buildPDF ( dataCallback,endCallback,name ) {
    const horaSpain = new Date().toLocaleTimeString('es-ES', { timeZone: 'Europe/Madrid' });
    const diaSpain = new Date().toLocaleDateString('es-ES', { timeZone: 'Europe/Madrid' });
    const doc = new PDF({size:'A4'});  

    doc.on('data', dataCallback);
    doc.on('end', endCallback);

    doc.fontSize(30).text(`Hello ${name} from invoice`);

    doc.fontSize(15).text(diaSpain).translate(0,0);

    doc.fontSize(20).text(horaSpain).translate(0,0);

    doc.image(`E:/PROYECTOS-NODE/EJEMPLOS/PDFS-TEST/src/public/Ferrari_488_GTB-JPEG.jpg`, 50, 400, {width: 400});

    doc.end();
};

module.exports = buildPDF;