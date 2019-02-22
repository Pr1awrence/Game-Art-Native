let slider = {
    slides: ['../accets/slider/1.jpg', '../accets/slider/2.jpg',
        '../accets/slider/3.jpg', '../accets/slider/4.jpg'],
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

let preLoadImages = function () {
    for (let i = 0; i < slider.slides.length; i++) {
        let imageObject = new Image();
        imageObject.src = slider.slides[i];
    }
};