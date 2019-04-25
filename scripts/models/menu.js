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
            break;
    }

    function changeShowBody(id) {
        document.getElementById(menu.now).style.display = "none";
        menu.now = id;
        document.getElementById(menu.now).style.display = "";
    }
}