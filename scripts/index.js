window.onload = function () {
    preLoadImages();
    slider.init();
    slider.intervalHandler = setInterval(function () {
        slider.autoRight();
    }, 5000);
    addQuestions();
    Visualizer.renderGamesOnMain(games);
    Visualizer.renderGamesOnGames(games);
};

function faqSearch() {
    let input = document.getElementById("search_input");
    let regex = new RegExp('\\b' + input.value, 'i');

    let mainDiv = document.getElementById("faq_questions");
    let innerDiv = mainDiv.getElementsByTagName("div");

    for(let i = 0; i < innerDiv.length; i++){
        let question = innerDiv[i].getElementsByTagName("h2")[0].innerHTML;
        let answer = innerDiv[i].getElementsByTagName("p")[0].innerHTML;
        if(question.match(regex) !== null || answer.match(regex) !== null){
            innerDiv[i].style.display = "";
        } else {
            innerDiv[i].style.display = "none";
        }
    }
}

function turnBack() {
    document.getElementById("search_input").value = '';
    faqSearch();
}