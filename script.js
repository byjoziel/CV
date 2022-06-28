

var clickbtn = document.getElementById("btn");
clickbtn.onclick =btn;
function descarga() {
    var doc = new jsPDF();
    var elementHTML = document.getElementById("container").innerHTML
    var specialElementHandlers = {
        "#elementH": function (element, renderer){
            return true;
        }
    };
    doc.fromHTML (elementHTML, 15, 15, {
        "width":170,
        "elementHandlers" : specialElementHandlers
    });
    doc.save("CV-Joziel-Canda");
}



