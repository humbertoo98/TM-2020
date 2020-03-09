var troca = false;
var Valor = "";
function reset() {
   var titles =  document.getElementsByClassName('titulo');
   for(let title of titles)
   {

       title.style.color = "red"
   }
}

function GetInfo() {
    var link =  document.getElementById('link');
    var List =  document.getElementById('info');

    List.innerHTML=
        "ID:" + link.id + "<br>"+
        "Targets:" + link.target + "<br>"+
        "Type:" + link.type + "<br>"+
        "Herf:" + link.herf + "<br>"

}
function preencheTabela(a) {
    var person = prompt("Por-favor insira um valor", "Harry Potter");

    if (person != null) {
        a.textContent  = person;
    }

}


