//конструктор Ордер, который пока должен обладать 5 полями
function Order() {}

Order.gamesArray = [];

Order.count = 0;

Order.amount = 0;

Order.removeElementById = function (id){
    let list = document.getElementById(id);
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }
};

Order.deleteGame = function(game) {
    Order.count--;
    Order.gamesArray = Order.gamesArray.filter(element => element.name !== game.name);
    Order.removeElementById('order_block');
    Order.gamesArray.forEach(game => Visualizer.renderGameOnOrder(game));
    if(Order.count > 0){
        document.getElementById("game_counter").innerHTML = Order.count;
    } else {
        document.getElementById("game_counter").style.display = "none";
    }
    Order.amount -= game.newPrice;
    Visualizer.changeAmount();
};

Order.priceCalculation = function () {
    Order.amount = 0;
    Order.gamesArray.forEach(game => Order.amount += game.newPrice);
};