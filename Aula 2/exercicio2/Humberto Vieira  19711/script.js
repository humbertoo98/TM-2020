var Numbers = [];

function myFunction() {

    var doc = document.getElementById("Texto").value;
    Numbers.push(doc);
    document.getElementById("myText").innerText = Numbers;
    console.log(Numbers)
}

function GetMax() {
    console.log(Numbers.length)
    if (Numbers.length >= 5) {
        document.getElementById("myText2").innerText = Math.max.apply(Math, Numbers);
    } else {
        alert("São necassários 5 registos")
    }
}

function Clean() {
    Numbers = [];
    document.getElementById("myText2").innerText = "";
    document.getElementById("myText").innerText = "";

}