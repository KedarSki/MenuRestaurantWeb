let items = [{ name: "MARGHERITA", cost: 10 },
    { name: "HAWAIIAN", cost: 12 },
    { name: "VEGGIE", cost: 15 },
    { name: "FUNGHI", cost: 15, },
    { name: "SALAMI", cost: 16 },
    { name: "CHICKEN SUPREME", cost: 19 }
];

function addItemMar() {

    let add = document.getElementById("items");
    let option = document.createElement("option");
    let addPrice = document.getElementById("price");
    let optionPrice = document.createElement("option");

    for (let i = 0; i < items.length; i++) {

        let result = items[0];
        option.text = result.name;
        add.add(option);

    }



    for (let j = 0; j < items.length; j++) {
        let resultPrice = items[0];
        optionPrice.text = resultPrice.cost;
        addPrice.add(optionPrice);
    }

}

function addItemHaw() {

    let add = document.getElementById("items");
    let option = document.createElement("option");
    let addPrice = document.getElementById("price");
    let optionPrice = document.createElement("option");

    for (let i = 0; i < items.length; i++) {

        let result = items[1];
        option.text = result.name;
        add.add(option);

    }



    for (let j = 0; j < items.length; j++) {
        let resultPrice = items[1];
        optionPrice.text = resultPrice.cost;
        addPrice.add(optionPrice);
    }

}

function addItemVeg() {

    let add = document.getElementById("items");
    let option = document.createElement("option");
    let addPrice = document.getElementById("price");
    let optionPrice = document.createElement("option");

    for (let i = 0; i < items.length; i++) {

        let result = items[2];
        option.text = result.name;
        add.add(option);

    }



    for (let j = 0; j < items.length; j++) {
        let resultPrice = items[2];
        optionPrice.text = resultPrice.cost;
        addPrice.add(optionPrice);
    }

}

function addItemFun() {

    let add = document.getElementById("items");
    let option = document.createElement("option");
    let addPrice = document.getElementById("price");
    let optionPrice = document.createElement("option");

    for (let i = 0; i < items.length; i++) {

        let result = items[3];
        option.text = result.name;
        add.add(option);

    }



    for (let j = 0; j < items.length; j++) {
        let resultPrice = items[3];
        optionPrice.text = resultPrice.cost;
        addPrice.add(optionPrice);
    }

}

function addItemSal() {

    let add = document.getElementById("items");
    let option = document.createElement("option");
    let addPrice = document.getElementById("price");
    let optionPrice = document.createElement("option");

    for (let i = 0; i < items.length; i++) {

        let result = items[4];
        option.text = result.name;
        add.add(option);

    }



    for (let j = 0; j < items.length; j++) {
        let resultPrice = items[4];
        optionPrice.text = resultPrice.cost;
        addPrice.add(optionPrice);
    }

}


function addItemChi() {

    let add = document.getElementById("items");
    let option = document.createElement("option");
    let addPrice = document.getElementById("price");
    let optionPrice = document.createElement("option");

    for (let i = 0; i < items.length; i++) {

        let result = items[5];
        option.text = result.name;
        add.add(option);

    }



    for (let j = 0; j < items.length; j++) {
        let resultPrice = items[5];
        optionPrice.text = resultPrice.cost;
        addPrice.add(optionPrice);
    }

}

let total;

function clearAll() {
    document.getElementById("items").innerHTML = " ";
    document.getElementById("price").innerHTML = " ";


}
