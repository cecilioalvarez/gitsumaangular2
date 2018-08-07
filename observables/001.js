var Rx = require("rxjs/Rx");

var lista = Rx.Observable.from(["pepe", "juan", "maria"]);
lista.filter(function (e) {

    return e.startsWith("p");
}).delay(3000).subscribe(function (e) {


    console.log(e);
})

var lista2 = ["pepe", "juan", "maria"];

lista2.filter(function (e) {

    return e.startsWith("p");
}).forEach(function (e) {

    console.log(e);

})