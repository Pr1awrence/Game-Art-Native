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

Visualizer.createTwoButton = function(game) {
    let createDivGamesButtons = Visualizer.createElement('div', 'games_buttons');
    let createButtonInfo = Visualizer.createElement('button', 'games_button_info', 'INFO');
    createButtonInfo.onclick = function () {
        alert("ОКНО ВСПЛЫВАЕТ...");
    };
    let createButtonBuy = Visualizer.createElement('button', 'games_button_buy', 'BUY');
    createButtonBuy.onclick = game.addToCard;
    createDivGamesButtons.appendChild(createButtonInfo);
    createDivGamesButtons.appendChild(createButtonBuy);

    return createDivGamesButtons;
};

Visualizer.renderOrdersPage = function () {
    //Order.gamesArray
};

Visualizer.renderGameInfo = function (game) {
    //тут будет происходить вызов окна, который нарисует информацию
};

//метод для визуализации игр на основной странице Main
//ПРИКРЕПЛЯТЬ БУДЕМ К ID id=best_games_section
Visualizer.renderGamesOnMain = function (games){
    games.forEach(function (game) {
        if(game.bestgame){
            let rootElementWithImage = createCore(game);//должна вернуть div с прикрепленной картинкой
            let buttonBlock = Visualizer.createTwoButton(game);//сделать 2 кнопки купить и инфо

            rootElementWithImage.appendChild(buttonBlock);
            document.getElementById('best_games_section').appendChild(rootElementWithImage);

            function createCore(game) {
                let createDivCatalog = Visualizer.createElement('div', 'best_games_catalog');
                let createGameImage = Visualizer.createElement('img', 'img_all_games', null, game.image);

                createDivCatalog.appendChild(createGameImage);

                return createDivCatalog;
            }
        }
    })
};

//метод для визуализации вопросов и ответов
Visualizer.renderQuestAndAnswFAQ = function (questionsAndAnswers) {
    for (let i = 0; i < questionsAndAnswers.length; i++) {
        let createDivElement = document.createElement('div');
        createDivElement.className = 'faq_questions_answers';
        let createH2Element = document.createElement('h2');
        createH2Element.className = 'faq_questions_text';
        let createPElement = document.createElement('p');
        let createImgElement = document.createElement('img');

        createH2Element.innerHTML = questionsAndAnswers[i].question;
        createPElement.innerHTML = questionsAndAnswers[i].answer;
        createImgElement.src = "../accets/faq/line_question.png";

        createDivElement.appendChild(createH2Element);
        createDivElement.appendChild(createPElement);
        createDivElement.appendChild(createImgElement);

        document.getElementById('faq_questions').appendChild(createDivElement);
    }
};

//метод для визуализации игр на странице Games
//ПРИКРЕПЛЯТЬ БУДЕМ К ID id="games_section"
Visualizer.renderGamesOnGames = function (games) {
    let redLineSrc = "../accets/images/red_line_price.png";
    for (let i = 0; i < games.length; i++) {

        //подготовить 3 функции, которые будут визуально улучшать код
        //они должны обрабатывать каждая свой блок и возвращать готовый див
        let rootElementWithImage = createCore(games[i]);//должна вернуть div с прикрепленной картинкой
        let textElement = createTextPanel(games[i]);//должна вернуть один div с прикрепленными к нему эл-тами
        let buttonBlock = Visualizer.createTwoButton(games[i]);//сделать 2 кнопки купить и инфо

        rootElementWithImage.appendChild(textElement);
        rootElementWithImage.appendChild(buttonBlock);
        document.getElementById('games_section').appendChild(rootElementWithImage);

        function createCore(game) {
            let createDivCatalog = Visualizer.createElement('div', 'games_catalog');
            let createGameImage = Visualizer.createElement('img', 'img_all_games', null, game.image);

            createDivCatalog.appendChild(createGameImage);

            return createDivCatalog;
        }

        function createTextPanel(game) {
            let createDivGamesText = Visualizer.createElement('div', 'games_text');
            let createGameHeadline = Visualizer.createElement('p', 'games_text_headline', game.name);
            let createPriceLine = Visualizer.createElement('img', 'price_line', null, redLineSrc);
            let createGameDescription = Visualizer.createElement('p', 'games_text_description_no_sale', game.shortDescription);
            let createGameNewPrice = Visualizer.createElement('p', 'games_text_new_price', game.newPrice);

            createDivGamesText.appendChild(createGameHeadline);
            createDivGamesText.appendChild(createPriceLine);

            if (game.oldPrice !== undefined){
                let createGameOldPrice = Visualizer.createElement('p', 'games_text_old_price', game.oldPrice);
                let createGameDiscount = Visualizer.createElement('p', 'games_text_discount', game.discount);
                createGameNewPrice.className = "games_text_price";
                createGameDescription.className = 'games_text_description';

                createDivGamesText.appendChild(createGameOldPrice);
                createDivGamesText.appendChild(createGameDiscount);
            }
            createDivGamesText.appendChild(createGameNewPrice);
            createDivGamesText.appendChild(createGameDescription);

            return createDivGamesText;
        }
    }
};
