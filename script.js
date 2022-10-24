let items_array = [
    {"name": "Walnut Bowl", "id": 1, "price": 150, count: 1},
    {"name": "Pecan Bowl", "id": 2, "price": 150,count: 1},
    {"name": "Wood Pen", "id": 3, "price": 150,count: 1},
    {"name": "Segmented Vase", "id": 4, "price": 150,count: 1},
    {"name": "Small Bowl", "id": 5, "price": 150,count: 1}
];
let prices_array = [
    {"price": 150, "id": 1},
    {"price": 125, "id": 2},
    {"price": 10, "id": 3},
    {"price": 300, "id": 4},
    {"price": 75, "id": 5},
]


let cart = [];



function appendNode(parent, element) {
    parent.appendChild(element);
}
function getDiv(container) {
    return document.getElementById(container);
};
function createNode(node) {
    let element = document.createElement(node);
    return element;
}

function displayItems(items, container) {
    let items_container = getDiv(container);
    items_container.innerHTML = '';

    for (let i = 0; i < items.length; i++) {
        let item = items[i];

        let item_node = createNode("li");
        item_node.setAttribute("id", item.id);

        if (item.count > 0) {
            item_node.innerHTML = `${item.name} $${item.price}
            <span id="badge">${item.count}</span>`;
            appendNode(items_container, item_node);
        }
    }
}
// function displayPrices(prices, container) {
//     let prices_container = getDiv(container);
//     prices_container.innerHTML = '';

//     for (let i = 0; i < prices.length; i++) {
//         let price = prices[i];

//         let price_node = createNode("li");
//         price_node.setAttribute("id", price.id);

//             price_node.innerHTML = `${price.price}
//             <span id="badge"></span>`;
//             appendNode(prices_container, price_node);
        
//     }
// }
displayItems(items_array, "items");
// displayPrices(prices_array, "prices");

function addItems(action) {
    let container = '';
    if (action == "add") {
        container = getDiv("items");

        takeAction(container)
    }
}

function takeAction(container) {
    container.addEventListener("click", function (event) {
        let item_id = event.target.id;

        let item = items_array.filter(function (item) {
            return item.id == item_id;

        })[0];

        let item_in_cart = cart.filter(function (item) {
            return item.id == item_id;
        })[0];

        if (item_in_cart == undefined) {
            cart.push(item);
        } else if (action == "add") {
            item_in_cart.count++;
        }
        console.log(cart);
        displayItems(cart, "cart");
    })}

    addItems('add');

    function displayTotal() {
        
    }
