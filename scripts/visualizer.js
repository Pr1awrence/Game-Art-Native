function Visualizer() {}

Visualizer.createElement = function (tag, className, innerHTML, src) {
    let element = document.createElement(tag);
    element.className = className;
    if(innerHTML !== null && innerHTML !== undefined){
        element.innerHTML = innerHTML;
    }
    if(src !== null && src !== undefined){
        element.src = src;
    }
    return element;
};

Visualizer.createTwoButtonGame = function(game) {
    let createDivGamesButtons = Visualizer.createElement('div', 'games_buttons');
    let createButtonInfo = Visualizer.createElement('button', 'games_button_info', 'INFO');
    createButtonInfo.addEventListener("click", function(){
        game.provideInfo();
    });
    let createButtonBuy = Visualizer.createElement('button', 'games_button_buy', 'BUY');
    createButtonBuy.addEventListener("click", function(){
        game.buy(game);
    });
    createDivGamesButtons.appendChild(createButtonInfo);
    createDivGamesButtons.appendChild(createButtonBuy);

    return createDivGamesButtons;
};

Visualizer.createTwoButtonModalWindow = function(game){
    let createDivGamesButtons = Visualizer.createElement('div', 'game_buttons_modal_window');
    let createButtonBuyNow = Visualizer.createElement('button', 'games_button_buy_now', 'BUY NOW');
    createButtonBuyNow.addEventListener("click", function(){
        game.buyNow(game);
    });
    let createButtonAddToCard = Visualizer.createElement('button', 'games_button_add_card', 'ADD TO CARD');
    createButtonAddToCard.addEventListener("click", function(){
        game.addToCard(game);
    });
    createDivGamesButtons.appendChild(createButtonBuyNow);
    createDivGamesButtons.appendChild(createButtonAddToCard);

    return createDivGamesButtons;
};

Visualizer.renderGameInfo = function (game) {
    //тут будет происходить вызов окна, который нарисует информацию
    let modalWindowBackground = Visualizer.createElement('div', 'modal_window_background');
    modalWindowBackground.id = 'modal_window_background';
    let modalWindowForGameInfo = Visualizer.createElement('div', 'modal_window_game_info');
    let modalButtonForClose = Visualizer.createElement('img', 'close_modal_window_game_info', null, "../accets/images/close.png");
    modalButtonForClose.onclick = function () {
        modalWindowBackground.style.display = "none";
        document.body.removeChild(document.body.children[document.body.children.length - 1]);
        document.body.style.overflow = "auto";
    };
    let modalGameImageBlock = Visualizer.createElement('div', 'img_game_modal_window_block');
    let modalGameImage = Visualizer.createElement('img', 'img_game_modal_window', null, game.image);
    let modalGameText = Visualizer.createElement('div', 'game_modal_window_text');
    let createModalGameHeadline = Visualizer.createElement('h2', 'headline_modal_window_game_info', game.name);
    let createModalGameDescription = Visualizer.createElement('p', 'modal_games_text_description', game.longDescription);

    let buttonBlock = Visualizer.createTwoButtonModalWindow(game);

    modalGameImageBlock.appendChild(modalGameImage);
    modalWindowForGameInfo.appendChild(modalGameImageBlock);

    modalGameText.appendChild(createModalGameHeadline);
    modalGameText.appendChild(createModalGameDescription);

    let modalGamePriceBlock = Visualizer.createElement('div', 'game_modal_window_price_block');
    let gameNewPrice = Visualizer.createElement('p', 'games_text_new_price', "$" + game.newPrice);
    if (game.oldPrice !== undefined){
        let createGameOldPrice = Visualizer.createElement('p', 'games_text_old_price', "$" + game.oldPrice);
        let createGameDiscount = Visualizer.createElement('p', 'modal_window_games_text_discount', game.discount + "% off");
        gameNewPrice.className = "games_text_price";

        modalGamePriceBlock.appendChild(createGameOldPrice);
        modalGamePriceBlock.appendChild(createGameDiscount);
    }
    modalGamePriceBlock.appendChild(gameNewPrice);

    modalGameText.appendChild(modalGamePriceBlock);
    modalGameText.appendChild(buttonBlock);
    modalWindowForGameInfo.appendChild(modalGameText);
    modalWindowForGameInfo.appendChild(modalButtonForClose);
    modalWindowBackground.appendChild(modalWindowForGameInfo);

    window.onclick = function(event) {
        if (event.target === modalWindowBackground) {
            modalWindowBackground.style.display = "none";
            /*document.body.style.overflow = "auto";*/
        }
    };

    document.body.appendChild(modalWindowBackground);

    modalWindowBackground.style.display = "block";
    /*document.body.style.overflow = "hidden"; - закрыть прокрутку body*/
};


Visualizer.renderGamesOnMain = function (games){
    games.forEach(function (game) {
        if(game.bestgame){
            let rootElementWithImage = createCore(game);//должна вернуть div с прикрепленной картинкой
            let buttonBlock = Visualizer.createTwoButtonGame(game);//сделать 2 кнопки купить и инфо

            rootElementWithImage.appendChild(buttonBlock);
            document.getElementById('best_games_section').appendChild(rootElementWithImage);

            function createCore(game) {
                let divCatalog = Visualizer.createElement('div', 'best_games_catalog');
                let divImageBlock = Visualizer.createElement('div', 'game_image_block');

                let gameImage = Visualizer.createElement('img', 'img_all_games', null, game.image);

                divImageBlock.appendChild(gameImage);
                divCatalog.appendChild(divImageBlock);

                return divCatalog;
            }
        }
    })
};

Visualizer.renderQuestAndAnswFAQ = function (questionsAndAnswers) {
    for (let i = 0; i < questionsAndAnswers.length; i++) {
        let divBlockForQuestAndAnsw = Visualizer.createElement('div', 'faq_questions_answers');
        let headerQuestion = Visualizer.createElement('h2', 'faq_questions_text');
        let answerBlock = Visualizer.createElement('p', 'answer_block');

        let lineImageForQuestAndAnsw = Visualizer.createElement('img', 'line_question');

        headerQuestion.innerHTML = questionsAndAnswers[i].question;
        answerBlock.innerHTML = questionsAndAnswers[i].answer;
        lineImageForQuestAndAnsw.src = "../accets/faq/line_question.png";

        divBlockForQuestAndAnsw.appendChild(headerQuestion);
        divBlockForQuestAndAnsw.appendChild(answerBlock);
        divBlockForQuestAndAnsw.appendChild(lineImageForQuestAndAnsw);

        document.getElementById('faq_questions').appendChild(divBlockForQuestAndAnsw);
    }
};

//метод для визуализации игр на странице Games
//ПРИКРЕПЛЯТЬ БУДЕМ К ID id="games_section"
Visualizer.renderGamesOnGames = function (games) {
    let redLineSrc = "../accets/images/red_line_price.png";
    for (let i = 0; i < games.length; i++) {

        let rootElementWithImage = createCore(games[i]);//должна вернуть div с прикрепленной картинкой
        let textElement = createTextPanel(games[i]);//должна вернуть один div с прикрепленными к нему эл-тами
        let buttonBlock = Visualizer.createTwoButtonGame(games[i]);//сделать 2 кнопки купить и инфо

        rootElementWithImage.appendChild(textElement);
        rootElementWithImage.appendChild(buttonBlock);
        document.getElementById('games_section').appendChild(rootElementWithImage);

        function createCore(game) {
            let divCatalog = Visualizer.createElement('div', 'games_catalog');
            let divImageBlock = Visualizer.createElement('div', 'game_image_block');

            let gameImage = Visualizer.createElement('img', 'img_all_games', null, game.image);

            divImageBlock.appendChild(gameImage);
            divCatalog.appendChild(divImageBlock);

            return divCatalog;
        }

        function createTextPanel(game) {
            let divGamesText = Visualizer.createElement('div', 'games_text');
            let gameHeadline = Visualizer.createElement('p', 'games_text_headline', game.name);
            let priceLine = Visualizer.createElement('img', 'price_line', null, redLineSrc);
            let gameDescription = Visualizer.createElement('p', 'games_text_description_no_sale', game.shortDescription);
            let gameNewPrice = Visualizer.createElement('p', 'games_text_new_price', "$" + game.newPrice);

            divGamesText.appendChild(gameHeadline);
            divGamesText.appendChild(priceLine);

            if (game.oldPrice !== undefined){
                let gameOldPrice = Visualizer.createElement('p', 'games_text_old_price', "$" + game.oldPrice);
                let gameDiscount = Visualizer.createElement('p', 'games_text_discount', game.discount + "% off");
                gameNewPrice.className = "games_text_price";
                gameDescription.className = 'games_text_description';

                divGamesText.appendChild(gameOldPrice);
                divGamesText.appendChild(gameDiscount);
            }
            divGamesText.appendChild(gameNewPrice);
            divGamesText.appendChild(gameDescription);

            return divGamesText;
        }
    }
};

Visualizer.renderGameOnOrder = function(game){
    let orderGameInfo = Visualizer.createElement('div', 'order_game_info');
    let orderGameImageBlock = Visualizer.createElement('div', 'order_game_image_block');
    let orderGameImage = Visualizer.createElement('img', 'img_order_game', null, game.image);
    let orderGameText = Visualizer.createElement('div', 'order_game_text');
    let orderGameHeadline = Visualizer.createElement('h2', 'order_headline_game_info', game.name);
    let orderGameDescription = Visualizer.createElement('p', 'order_game_text_description', game.longDescription);
    let orderLine = Visualizer.createElement('img', 'line_question', null, "../accets/faq/line_question.png");

    let buttonDelete = Visualizer.createElement('button', 'games_button_delete', 'DELETE');
    buttonDelete.addEventListener("click", function(){
        Order.deleteGame(game);
    });

    orderGameImageBlock.appendChild(orderGameImage);
    orderGameInfo.appendChild(orderGameImageBlock);

    orderGameText.appendChild(orderGameHeadline);
    orderGameText.appendChild(orderGameDescription);

    let orderGamePriceBlock = Visualizer.createElement('div', 'game_modal_window_price_block');
    let orderGameNewPrice = Visualizer.createElement('p', 'games_text_new_price', "$" + game.newPrice);
    if (game.oldPrice !== undefined){
        let orderGameOldPrice = Visualizer.createElement('p', 'games_text_old_price', "$" + game.oldPrice);
        let orderGameDiscount = Visualizer.createElement('p', 'modal_window_games_text_discount', game.discount + "% off");
        orderGameNewPrice.className = "games_text_price";

        orderGamePriceBlock.appendChild(orderGameOldPrice);
        orderGamePriceBlock.appendChild(orderGameDiscount);
    }
    orderGamePriceBlock.appendChild(orderGameNewPrice);

    orderGamePriceBlock.appendChild(buttonDelete);
    orderGameInfo.appendChild(orderGameText);
    orderGameInfo.appendChild(orderGamePriceBlock);

    document.getElementById('order_block').appendChild(orderGameInfo);
    document.getElementById('order_block').appendChild(orderLine);
};


Visualizer.renderOrdersPage = function(game) {
    let gameInOrder = Order.gamesArray.find(addedGame => addedGame.name === game.name);
    if(Order.gamesArray.length === 0 || gameInOrder === undefined){
        Order.gamesArray.push(game);
        Visualizer.renderGameOnOrder(game);
        Visualizer.addCountToCard();
        Visualizer.changeAmount();
    }
};

Visualizer.addCountToCard = function() {
    Order.count++;

    if(document.getElementById("game_counter") === null){
        let counter = Visualizer.createElement('div', 'game_counter');
        counter.id = "game_counter";
        counter.innerHTML = Order.count;
        document.getElementById("basket").appendChild(counter);
    } else {
        document.getElementById("game_counter").style.display = "";
        document.getElementById("game_counter").innerHTML = Order.count;
    }
};

Visualizer.changeAmount = function() {
    Order.priceCalculation();
    document.getElementById("order_total_price").innerHTML = "$" + Math.ceil(Order.amount * 100)/100;
};