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
    slider.init();
    setInterval(function () {
        slider.right();
    }, 5000);

};
var menu = {
    main: "main_body",
    games: "games_body"
};

function showAnotherBody(id) {
    switch (id) {
        case menu.main:
            hideBody(menu.games);
            showBody(menu.main);
            break;
        case menu.games:
            hideBody(menu.main);
            showBody(menu.games);
            break;
    }

    function showBody(id) {
        document.getElementById(id).style.display = "";
    }

    function hideBody(id) {
        document.getElementById(id).style.display = "none";
    }
}