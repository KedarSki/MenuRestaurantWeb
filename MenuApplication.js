let items = [{ name: "MARGHERITA", cost: 10 },
    { name: "HAWAIIAN", cost: 12 },
    { name: "VEGGIE", cost: 15 },
    { name: "FUNGHI", cost: 15, },
    { name: "SALAMI", cost: 16 },
    { name: "CHICKEN SUPREME", cost: 19 }
];

function addItemMar() {

    for (var i = 0; i < items.length; i++) {
        let result = items[0];
        document.getElementById("items").innerHTML = result.name;
        var option = document.createElement("option");
        addPrice.add(option);
    }

    for (var i = 0; i < items.length; i++) {
        let result = items[0];
        document.getElementById("price").innerHTML = "$ " + result.cost;
    }
}

function addItemHaw() {

    for (var i = 0; i < items.length; i++) {
        let result = items[1];
        document.getElementById("items").innerHTML = result.name;


    }


    for (var i = 0; i < items.length; i++) {
        let result = items[1];
        document.getElementById("price").innerHTML = "$" + result.cost;

    }
}

function clearAll() {
    document.getElementById("items").innerHTML = " ";
    document.getElementById("price").innerHTML = " ";


}