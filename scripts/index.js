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


//функция для search
//TODO: переделать блок с использованием регэксп
function myFunction() {
    let input, filter, div, div2;
    input = document.getElementById("search_input");
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
}
function turnBack() {
    document.getElementById("search_input").value = '';
    myFunction();
}