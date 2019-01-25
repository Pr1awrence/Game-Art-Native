let slider = {
    slides: ['../accets/slider/1.png', '../accets/slider/2.png',
        '../accets/slider/3.png', '../accets/slider/4.png'],
    frame: 0,

    intervalHandler: null,

    set: function (image) {
        document.getElementById("slider").style.backgroundImage = 'url(' + image + ')';
    },
    init: function () {
        this.set(this.slides[this.frame]);
    },

    right: function () {
        clearInterval(this.intervalHandler);
        this.frame++;
        if (this.frame >= this.slides.length) {
            this.frame = 0;
        }
        this.set(this.slides[this.frame]);

        this.intervalHandler = setInterval(function () {
            slider.autoRight();
        }, 5000);

    },
    autoRight: function () {
        this.frame++;
        if (this.frame >= this.slides.length) {
            this.frame = 0;
        }
        this.set(this.slides[this.frame]);
    },

    left: function () {
        clearInterval(this.intervalHandler);
        this.frame--;
        if (this.frame < 0) {
            this.frame = this.slides.length - 1;
        }
        this.set(this.slides[this.frame]);

        this.intervalHandler = setInterval(function () {
            slider.autoRight();
        }, 5000);
    }
};

window.onload = function () {
    preLoadImages();
    slider.init();
    slider.intervalHandler = setInterval(function () {
        slider.autoRight();
    }, 5000);
    addQuestions();
    //TODO: ПЕРЕДЕЛАТЬ БЛОК НИЖЕ - ДОЛЖНЫ ЗАПУСКАТЬСЯ С КЛИКА НА СТРАНИЦУ
    Visualizer.renderGamesOnMain(games);
    Visualizer.renderGamesOnGames(games);
};

let preLoadImages = function () {
    for (let i = 0; i < slider.slides.length; i++) {
        let imageObject = new Image();
        imageObject.src = slider.slides[i];
    }
};


let menu = {
    main: "main_body",
    games: "games_body",
    faq: "faq_body",
    card: "card_body",
    now: "main_body"
};

//функция для переключения меню
function showAnotherBody(id) {
    switch (id) {
        case menu.main:
            changeShowBody(id);
            break;
        case menu.games:
            changeShowBody(id);
            break;
        case menu.faq:
            changeShowBody(id);
            break;
        case menu.card:
            changeShowBody(id);
            //need to change
            Visualizer.renderOrdersPage();
            break;
    }

    function changeShowBody(id) {
        document.getElementById(menu.now).style.display = "none";
        menu.now = id;
        document.getElementById(menu.now).style.display = "";
    }

}

//функция для search
function myFunction() {
    let input, filter, div, div2;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("faq_questions");
    div2 = div.getElementsByTagName("div");

    for (let j = 0; j < div2.length; j++) {
        let question = div2[j].getElementsByTagName("h2")[0].innerHTML;
        let answer = div2[j].getElementsByTagName("p")[0].innerHTML;
        if (question.toUpperCase().indexOf(filter) > -1 ||
            answer.toUpperCase().indexOf(filter) > -1) {
            div2[j].style.display = "";
        } else {
            div2[j].style.display = "none";
        }
    }

    /*    for (i = 0; i < div2.length; i++) {
            a = div2[i].getElementsByTagName("div")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                div2[i].style.display = "";
            } else {
                div2[i].style.display = "none";
            }
        }*/
}

//новый блок вопрос-ответ, создающийся через конструктор и отображающийся тоже через конструктор Visualizer
function addQuestions() {

    let questionsAndAnswers = [
        new QuestionAndAnswer("How to buy a name at a discount?",
            "All current discounts are listed on the main site. If you want to buy the name at a discount," +
            " add the desired name to the basket and pay for it."),
        new QuestionAndAnswer("Payment does not pass. What to do?",
            "Write to us in support if the payment from the bank has passed correctly. For transactional" +
            " issues, please contact your bank."),
        new QuestionAndAnswer("I can not log into my account",
            "Try resetting your password. If you have forgotten your email, please enter your phone number" +
            " when logging in."),
        new QuestionAndAnswer("My card was withdrawn for unknown purchases",
            "Write to us in support with the exact date of withdrawal of funds from your card."),
        new QuestionAndAnswer("You do not have a name in the store that I want to buy",
            "All new games are added to our store as soon as we contact the supplier. It takes some time."),
        new QuestionAndAnswer("I want to see the full purchase history",
            "You can view the purchase history through your personal account."),
        new QuestionAndAnswer("Lost the name of shopping",
            "Write to us in support of the name of the name and your email at registration."),
        new QuestionAndAnswer("I want to make a gift to a friend",
            "Unfortunately, we have not yet implemented gifts. Soon this functionality will definitely appear."),
        new QuestionAndAnswer("When I log in to the name, I get an error with the connection",
            "Check your internet connection. If the error persists, contact the service provider."),
        new QuestionAndAnswer("I paid for the purchase, but the name is not yet available",
            "Write to us in support of your order number and the time of the transaction.")
    ];

    function QuestionAndAnswer(question, answer) {
        this.question = question;
        this.answer = answer;
    }

    Visualizer.renderQuestAndAnswFAQ(questionsAndAnswers);
}

function turnBack() {
    document.getElementById("myInput").value = '';
    myFunction();
}


//функция замены формы обратной связи с успешной отправкой
function sentMessageSuccessfully(form) {

    if (!validate(form)) {
        document.getElementById("feedback_form").style.display = "none";

        let createDivSuccessForm = document.createElement('div');
        createDivSuccessForm.className = 'feedback_form_success';
        let createImgSuccessForm = document.createElement('img');
        createImgSuccessForm.className = 'feedback_success_image';
        let createH1SuccessForm = document.createElement('h1');
        let createH2SuccessForm = document.createElement('h2');

        createH1SuccessForm.innerHTML = "Your message has been sent successfully!";
        createH2SuccessForm.innerHTML = "Expect a response from the support service to the email you specified.";
        createImgSuccessForm.src = "../accets/images/successful_message.png";

        createDivSuccessForm.appendChild(createImgSuccessForm);
        createDivSuccessForm.appendChild(createH1SuccessForm);
        createDivSuccessForm.appendChild(createH2SuccessForm);

        document.getElementById('message_sent').appendChild(createDivSuccessForm);
        document.getElementById("message_sent").style.display = "";
    }
}

function validate(form) {
    let error = false;

    resetError('name_error');
    if (form.name.value.length === 0) {
        error = true;
        showError('name_error', 'Name can\'t be empty');
    } else if (form.name.value.match("/^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/") === null) {
        error = true;
        showError('name_error', 'Name must be greater than 1 digit and not have characters \ /: *? "<> |');
    }

    resetError('email_error');
    if (form.email.value.length === 0) {
        error = true;
        showError('email_error', 'Email can\'t be empty');
    } else if (form.email.value.match("^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$") === null) {
        console.log(form.email.value);
        error = true;
        showError('email_error', 'You entered a wrong email');
    }

    resetError('msg_error');
    if (form.msg.value.length === 0) {
        error = true;
        showError('msg_error', 'Message can\'t be empty');
    }
    return error;
}


function showError(id, errorMessage) {
    let element = document.getElementById(id);
    element.className = 'error_message';
    element.innerHTML = errorMessage;
}

//функция, которая сбрасывает ошибку перед след проверкой
function resetError(id) {
    let element = document.getElementById(id);
    element.className = 'error_empty';
    element.innerHTML = "";
}

function Order() {}



Order.gamesArray = [];

//массив игр
let games = [
    new Game("Dragon Age: Inquisition", "Action RPG from BioWare",
        "A new adventure begins. When the heavens open" +
        " and wreak havoc, the world needs heroes. Become" +
        " the savior of Tedas in the name \"Dragon Age:" +
        " Inquisition.\" You are the Inquisitor, and you have to" +
        " save the world from him. But this path will be paved with hard decisions.",
        "RPG", "../accets/all_games_catalog/dragon_age_inquisition.png",
        null, 19.99, true),
    new Game("Fallout 76", "Action RPG from Bethesda Game Studios",
        "Get the Fallout Classic collection when buying\n" +
        "Fallout 76 for PC at Game Art!\n" +
        "Bethesda Game Studios is a multiplayer name\n" +
        "Fallout 76. Team up or survive alone - you decide.",
        "RPG", "../accets/all_games_catalog/fallout_76.png",
        59.99, 40.19, true),
    new Game("Kingdom Come: Deliverance", "Action RPG from Warhorse Studios",
        "Kingdom Come: Deliverance takes place in the" +
        "early 15th century, in the Kingdom of Bohemia, part of" +
        " the Lands of the Bohemian Crown and the Holy Roman Empire" +
        " in what is now the Czech Republic. The accessible area of" +
        " the game is located in the region between Sasau and Rattay.",
        "RPG", "../accets/all_games_catalog/kingdom_come_deliverance.png",
        59.99, 35.99, true),
    new Game("Minecraft", "Sandbox, survival from Mojang",
        "Minecraft is a 2011 sandbox video. The game allows" +
        " players to build with a variety of different blocks" +
        " in a 3D procedurally generated world, requiring creativity" +
        " from players. Other activities in the game include exploration," +
        " resource gathering, crafting, and combat.",
        "Sandbox, survival", "../accets/all_games_catalog/minecraft.png",
        null, 29.99, true),
    new Game("Grand Theft Auto V", "Action & Adventure from Rockstar Games",
        "The game is played from either a third-person" +
        " or first-person perspective and its world is navigated" +
        " on foot or by vehicle. Players control the three lead" +
        " protagonists throughout single-player and switch between" +
        " them both during and outside missions. The story is centred" +
        " on the heist sequences, and many missions involve shooting" +
        " and driving gameplay.",
        "Action & Adventure", "../accets/all_games_catalog/grand_theft_auto_V.png",
        29.99, 22.49),
    new Game("Diablo® III", "Action RPG from Blizzard Entertainment",
        "Events develop around the war. The players' characters are not " +
        "direct followers of these factions, but they strive " +
        "to ensure that the army succeeds in striving to destroy " +
        "the Sanctuary - their home world.",
        "Action RPG", "../accets/all_games_catalog/diablo_III.png",
        19.99, 9.99, true),
    new Game("Destiny 2: Forsaken", "Action Shooter from Blizzard Entertainment",
        "In Forsaken, you’ll take justice into your own hands and pursue " +
        "vengeance for your fallen friend Cayde-6. You will explore " +
        "new regions, awaken new powers, earn a wealth of new " +
        "weapons and uncover lost Awoken secrets. The hunt is on.",
        "Action Shooter", "../accets/all_games_catalog/destiny_2_forsaken.png",
        39.99, 29.99),
    new Game("South Park: The Fractured But Whole", "Role-playing from Ubisoft",
        "Delve into the crime-ridden underbelly of South Park with " +
        "Coon and Friends, this dedicated group of crime fighters " +
        "formed by Eric Cartman whose superhero alter-ego, " +
        "The Coon, is half man, half raccoon. Join Mysterion, " +
        "Toolshed, Human Kite and a host of others to battle " +
        "the forces of evil while Coon strives to make his " +
        "team the most beloved superheroes in history.",
        "Role-playing", "../accets/all_games_catalog/south_park_the_fractured_but_whole.png",
        null, 59.99),
    new Game("Assassin's Creed® Origins", "Action & Adventure from Ubisoft",
        "Ancient Egypt, a land of majesty and intrigue, is " +
        "disappearing in a ruthless fight for power. Unveil " +
        "dark secrets and forgotten myths as you go back " +
        "to the one founding moment: The Origins of " +
        "the Assassin’s Brotherhood.",
        "Action & Adventure", "../accets/all_games_catalog/assassin's_creed_origins.png",
        59.99, 24.00, true),
    new Game("No Man's Sky", "Action & Adventure from Hello Games",
        "Inspired by the adventure and imagination that " +
        "we love from classic science-fiction, No Man's " +
        "Sky presents you with a galaxy to explore, " +
        "filled with unique planets and lifeforms, " +
        "and constant danger and action.",
        "Action & Adventure", "../accets/all_games_catalog/no_man's_sky.png",
        49.99, 44.99),
    new Game("The Elder Scrolls V: Skyrim", "Action RPG from Bethesda Game Studios",
        "The game's main story revolves around the player character's " +
        "quest to defeat Alduin the World-Eater, a dragon who is " +
        "prophesied to destroy the world. The game is set " +
        "200 years after the events of Oblivion and takes place " +
        "in Skyrim, the northernmost province of Tamriel. Over the " +
        "course of the game, the player completes quests and " +
        "develops the character by improving skills.",
        "Action RPG", "../accets/all_games_catalog/the_elder_scrolls_V_skyrim.png",
        39.99, 23.99),
    new Game("FINAL FANTASY XV ROYAL EDITION", "Role-playing from Square Enix",
        "FINAL FANTASY XV ROYAL EDITION brings the acclaimed epic " +
        "to new heights, packed with add-on content and new " +
        "features. Join Prince Noctis and his closest friends " +
        "as they fight against the empire in an effort to take " +
        "back their fallen kingdom.",
        "Action RPG", "../accets/all_games_catalog/final_fantasy_XV_royal_edition.png",
        49.99, 29.99)
];


//конструктор Game
function Game(name, shortDescription, longDescription, genre, image, oldPrice, newPrice, bestgame) {
    this.name = name;
    this.shortDescription = shortDescription;
    this.longDescription = longDescription;
    this.genre = genre;
    this.image = image;
    this.newPrice = "$" + newPrice;
    if (oldPrice !== null) {
        this.oldPrice = "$" + oldPrice;
        this.discount = (Math.floor((oldPrice - newPrice) * 100 / oldPrice)) + "% off";
    }
    this.bestgame = bestgame;
}


Game.prototype.provideInfo = function () {
    //TODO
    Visualizer.renderGameInfo(this);
};

Game.prototype.addToCard = function () {
    alert("Added to card!");
    Order.gamesArray.push(this);
};
