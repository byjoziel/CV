var boton = document.getElementById("download");

var etiqueta = document.createElement("p");


var id;
boton.parentNode.replaceChild(etiqueta, boton);

function descarga(){
    this.style.display = "none";
    id = window.setInterval(function(){
        contador--;
        if(contador < 0){
            etiqueta.parentNode.replaceChild(boton, etiqueta);
            window.clearInterval(id);
        }
        else{
            etiqueta.innerHTML = + contador.toString() + "<b> segundos para descargar.</b>";
        }
    }, 1000)
}

var clickbtn = document.getElementById("btn");
clickbtn.onclick = descarga;

var elementHTML = document.getElementById.getElementById("elementH");
var doc = new jsPDF("P" + "PT" + "LETTER");
var margin = 10;
var scale = (doc.internel.pageSize.width - margin * 2) / 
document.container.scrollWidth;
doc.html(document.container, {
    x: margin,
    y:margin,
    html2canvas: {
        scale: scale, 
    }, 
    callback: function(doc){
        doc.output("dataurlnewwindow", {
            filename: "sample-document.pdf"
        });
    }
}) 
var elementHTML = $ ("container").html();
var epecialElementHanlers ={
    "#elementH" : function (element, renderer) {
        return true;
    }
}
doc.fromHTML (elementHTML, 15, 15, {
    "width":170, "elementHandlers": especialElementHandlers
});

doc.addPage();
doc.text(20, 20, 'CurriculumCv');
doc.setFontSize(18);
doc.save ("sample-document.pdf");


