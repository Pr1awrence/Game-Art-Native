var slider = {
    slides: ['../accets/slider/1.png', '../accets/slider/2.png',
        '../accets/slider/3.png', '../accets/slider/4.png'],
    frame: 0,
    set: function (image) {
        document.getElementById("slider").style.backgroundImage = 'url(' + image + ')';
    },
    init: function(){
        this.set(this.slides[this.frame]);
    },
    right: function () {
        this.frame++;
        if (this.frame >= this.slides.length) {
            this.frame = 0;
        }
        this.set(this.slides[this.frame]);
    },
    left: function () {
        this.frame--;
        if (this.frame < 0) {
            this.frame = this.slides.length-1;
        }
        this.set(this.slides[this.frame]);
    }
};

window.onload = function () {
    //добавить еще функцию для прогрузки картинок
    slider.init();
    setInterval(function () {
        slider.right();
    }, 5000);

};
var menu = {
    main: "main_body",
    games: "games_body",
    faq: "faq_body"
};

function showAnotherBody(id) {
    switch (id) {
        case menu.main:
            hideBody(menu.games);
            hideBody(menu.faq);
            showBody(menu.main);
            break;
        case menu.games:
            hideBody(menu.main);
            hideBody(menu.faq);
            showBody(menu.games);
            break;
        case menu.faq:
            hideBody(menu.main);
            hideBody(menu.games);
            showBody(menu.faq);
            break;
    }

    function showBody(id) {
        document.getElementById(id).style.display = "";
    }

    function hideBody(id) {
        document.getElementById(id).style.display = "none";
    }
}

//функция для search
function myFunction() {
    var input, filter, div, div2, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("faq_questions");
    div2 = div.getElementsByTagName("div");
    for (i = 0; i < div2.length; i++) {
        a = div2[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            div2[i].style.display = "";
        } else {
            div2[i].style.display = "none";
        }
    }
}