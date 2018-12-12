var slider = {
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

var stopSlider = clearInterval();

window.onload = function () {
    preLoadImages();
    slider.init();
    slider.intervalHandler = setInterval(function () {
        slider.autoRight();
    }, 5000);
    addQuestions();
};

var preLoadImages = function () {
    for (var i = 0; i < slider.slides.length; i++) {
        var imageObject = new Image();
        imageObject.src = slider.slides[i];
    }
};


var menu = {
    main: "main_body",
    games: "games_body",
    faq: "faq_body",
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
    }

    function changeShowBody(id) {
        document.getElementById(menu.now).style.display = "none";
        menu.now = id;
        document.getElementById(menu.now).style.display = "";
    }

}

//функция для search
function myFunction() {
    var input, filter, div, div2, a, i, txtValue;
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

function addQuestions() {

    let questionsAndAnswers = [
        {
            question: "How to buy a game at a discount?",
            answer: "All current discounts are listed on the main site. If you want to buy the game at a discount," +
            " add the desired game to the basket and pay for it."
        },
        {
            question: "Payment does not pass. What to do?",
            answer: "Write to us in support if the payment from the bank has passed correctly. For transactional" +
            " issues, please contact your bank."
        },
        {
            question: "I can not log into my account",
            answer: "Try resetting your password. If you have forgotten your email, please enter your phone number" +
            " when logging in."
        },
        {
            question: "My card was withdrawn for unknown purchases",
            answer: "Write to us in support with the exact date of withdrawal of funds from your card."
        },
        {
            question: "You do not have a game in the store that I want to buy",
            answer: "All new games are added to our store as soon as we contact the supplier. It takes some time."
        },
        {
            question: "I want to see the full purchase history",
            answer: "You can view the purchase history through your personal account."
        },
        {
            question: "Lost the game of shopping",
            answer: "Write to us in support of the name of the game and your email at registration."
        },
        {
            question: "I want to make a gift to a friend",
            answer: "Unfortunately, we have not yet implemented gifts. Soon this functionality will definitely appear."
        },
        {
            question: "When I log in to the game, I get an error with the connection",
            answer: "Check your internet connection. If the error persists, contact the service provider."
        },
        {
            question: "I paid for the purchase, but the game is not yet available",
            answer: "Write to us in support of your order number and the time of the transaction."
        }
    ];

    for (let i = 0; i < questionsAndAnswers.length; i++) {
        let createDivElement = document.createElement('div');
        createDivElement.className = 'faq_questions_answers';
        let createH2Element = document.createElement('h2');
        createH2Element.className = 'faq_questions_text';
        let createPElement = document.createElement('p');
        // createH2Element.className = 'faq_questions_text';
        let createImgElement = document.createElement('img');

        createH2Element.innerHTML = questionsAndAnswers[i].question;
        createPElement.innerHTML = questionsAndAnswers[i].answer;
        createImgElement.src = "../accets/faq/line_question.png";

        createDivElement.appendChild(createH2Element);
        createDivElement.appendChild(createPElement);
        createDivElement.appendChild(createImgElement);

        document.getElementById('faq_questions').appendChild(createDivElement);

    }

}


function turnBack() {
    document.getElementById("myInput").value = '';
    myFunction();
}


