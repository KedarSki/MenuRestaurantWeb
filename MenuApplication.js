let items = [{ name: "MARGHERITA", cost: 10 },
    { name: "HAWAIIAN", cost: 12 },
    { name: "VEGGIE", cost: 15 },
    { name: "FUNGHI", cost: 15, },
    { name: "SALAMI", cost: 16 },
    { name: "CHICKEN SUPREME", cost: 19 }
];

let resultPrice = 0;
let delivery = 5;

addDelivery = () => {
    let totalPrice = document.getElementById('totalPrice');

    for (let i = 0; i < 1; i++) {
        if (totalPrice[i] == delivery) {
            resultPrice += delivery;
        }
    }

    totalPrice.innerHTML = "$" + (resultPrice + delivery);
}

addItem = (name) => {
    let add = document.getElementById("items");
    let option = document.createElement("option");
    let addPrice = document.getElementById("price");
    let optionPrice = document.createElement("option");
    let totalPrice = document.getElementById('totalPrice');

    for (let i = 0; i < items.length; i++) {
        if (items[i].name == name) {
            let result = items[i];
            option.text = result.name;
            add.add(option);
            optionPrice.text = result.cost;
            addPrice.add(optionPrice);
            resultPrice += result.cost;
        }
    }

    totalPrice.innerHTML = "$" + resultPrice;
}

clearAll = () => {

    document.getElementById("items").innerHTML = " ";
    document.getElementById("price").innerHTML = " ";
}
