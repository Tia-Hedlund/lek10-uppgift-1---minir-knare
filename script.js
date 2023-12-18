let tal1x = document.querySelector("#tal1")
let tal2x = document.querySelector("#tal2")

function plus(){
    let tal1_värde = parseInt(tal1x.value);
    let tal2_värde = parseInt(tal2x.value);

    let result = tal1_värde+tal2_värde;
    document.getElementById("result").value = result;
}

function minus(){
    let tal1_värde = parseInt(tal1x.value);
    let tal2_värde = parseInt(tal2x.value);

    let result = tal1_värde-tal2_värde;
    document.getElementById("result").value = result;
}

function mulitply(){
    let tal1_värde = parseInt(tal1x.value);
    let tal2_värde = parseInt(tal2x.value);

    let result = tal1_värde*tal2_värde;
    document.getElementById("result").value = result;
}

function divide(){
    let tal1_värde = parseInt(tal1x.value);
    let tal2_värde = parseInt(tal2x.value);

    let result = tal1_värde/tal2_värde;
    document.getElementById("result").value = result;
}