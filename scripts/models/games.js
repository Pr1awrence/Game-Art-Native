let games = [
    new Game("Dragon Age: Inquisition", "Action RPG from BioWare",
        "A new adventure begins. When the heavens open" +
        " and wreak havoc, the world needs heroes. Become" +
        " the savior of Tedas in the name \"Dragon Age:" +
        " Inquisition.\" You are the Inquisitor, and you have to" +
        " save the world from him. But this path will be paved with hard decisions.",
        ["RPG"], "../assets/all_games_catalog/dragon_age_inquisition.jpg",
        null, 19.99, true),
    new Game("Fallout 76", "Action RPG from Bethesda Game Studios",
        "Get the Fallout Classic collection when buying\n" +
        "Fallout 76 for PC at Game Art!\n" +
        "Bethesda Game Studios is a multiplayer name\n" +
        "Fallout 76. Team up or survive alone - you decide.",
        ["RPG"], "../assets/all_games_catalog/fallout_76.jpg",
        59.99, 40.19, true),
    new Game("Kingdom Come: Deliverance", "Action RPG from Warhorse Studios",
        "Kingdom Come: Deliverance takes place in the" +
        "early 15th century, in the Kingdom of Bohemia, part of" +
        " the Lands of the Bohemian Crown and the Holy Roman Empire" +
        " in what is now the Czech Republic. The accessible area of" +
        " the game is located in the region between Sasau and Rattay.",
        ["RPG"], "../assets/all_games_catalog/kingdom_come_deliverance.jpg",
        59.99, 35.99, true),
    new Game("Minecraft", "Sandbox, survival from Mojang",
        "Minecraft is a 2011 sandbox video. The game allows" +
        " players to build with a variety of different blocks" +
        " in a 3D procedurally generated world, requiring creativity" +
        " from players. Other activities in the game include exploration," +
        " resource gathering, crafting, and combat.",
        ["Sandbox", "Survival"], "../assets/all_games_catalog/minecraft.jpg",
        null, 29.99, true),
    new Game("Grand Theft Auto V", "Action & Adventure from Rockstar Games",
        "The game is played from either a third-person" +
        " or first-person perspective and its world is navigated" +
        " on foot or by vehicle. Players control the three lead" +
        " protagonists throughout single-player and switch between" +
        " them both during and outside missions. The story is centred" +
        " on the heist sequences, and many missions involve shooting" +
        " and driving gameplay.",
        ["Action & Adventure"], "../assets/all_games_catalog/grand_theft_auto_V.jpg",
        29.99, 22.49),
    new Game("Diablo® III", "Action RPG from Blizzard Entertainment",
        "Events develop around the war. The players' characters are not " +
        "direct followers of these factions, but they strive " +
        "to ensure that the army succeeds in striving to destroy " +
        "the Sanctuary - their home world.",
        ["RPG"], "../assets/all_games_catalog/diablo_III.jpg",
        19.99, 9.99, true),
    new Game("Destiny 2: Forsaken", "Action Shooter from Blizzard Entertainment",
        "In Forsaken, you’ll take justice into your own hands and pursue " +
        "vengeance for your fallen friend Cayde-6. You will explore " +
        "new regions, awaken new powers, earn a wealth of new " +
        "weapons and uncover lost Awoken secrets. The hunt is on.",
        ["Shooter"], "../assets/all_games_catalog/destiny_2_forsaken.jpg",
        39.99, 29.99),
    new Game("South Park: The Fractured But Whole", "Role-playing from Ubisoft",
        "Delve into the crime-ridden underbelly of South Park with " +
        "Coon and Friends, this dedicated group of crime fighters " +
        "formed by Eric Cartman whose superhero alter-ego, " +
        "The Coon, is half man, half raccoon. Join Mysterion, " +
        "Toolshed, Human Kite and a host of others to battle " +
        "the forces of evil while Coon strives to make his " +
        "team the most beloved superheroes in history.",
        ["Role-playing"], "../assets/all_games_catalog/south_park_the_fractured_but_whole.jpg",
        null, 59.99),
    new Game("Assassin's Creed® Origins", "Action & Adventure from Ubisoft",
        "Ancient Egypt, a land of majesty and intrigue, is " +
        "disappearing in a ruthless fight for power. Unveil " +
        "dark secrets and forgotten myths as you go back " +
        "to the one founding moment: The Origins of " +
        "the Assassin’s Brotherhood.",
        ["Action & Adventure"], "../assets/all_games_catalog/assassin's_creed_origins.jpg",
        59.99, 24.00, true),
    new Game("No Man's Sky", "Action & Adventure from Hello Games",
        "Inspired by the adventure and imagination that " +
        "we love from classic science-fiction, No Man's " +
        "Sky presents you with a galaxy to explore, " +
        "filled with unique planets and lifeforms, " +
        "and constant danger and action.",
        ["Action & Adventure"], "../assets/all_games_catalog/no_man's_sky.jpg",
        49.99, 44.99),
    new Game("The Elder Scrolls V: Skyrim", "Action RPG from Bethesda Game Studios",
        "The game's main story revolves around the player character's " +
        "quest to defeat Alduin the World-Eater, a dragon who is " +
        "prophesied to destroy the world. The game is set " +
        "200 years after the events of Oblivion and takes place " +
        "in Skyrim, the northernmost province of Tamriel. Over the " +
        "course of the game, the player completes quests and " +
        "develops the character by improving skills.",
        ["RPG"], "../assets/all_games_catalog/the_elder_scrolls_V_skyrim.jpg",
        39.99, 23.99),
    new Game("FINAL FANTASY XV ROYAL EDITION", "Role-playing from Square Enix",
        "FINAL FANTASY XV ROYAL EDITION brings the acclaimed epic " +
        "to new heights, packed with add-on content and new " +
        "features. Join Prince Noctis and his closest friends " +
        "as they fight against the empire in an effort to take " +
        "back their fallen kingdom.",
        ["RPG"], "../assets/all_games_catalog/final_fantasy_XV_royal_edition.jpg",
        49.99, 29.99)
];

//конструктор Game
function Game(name, shortDescription, longDescription, genre, image, oldPrice, newPrice, bestgame) {
    this.name = name;
    this.shortDescription = shortDescription;
    this.longDescription = longDescription;
    this.genre = genre;
    this.image = image;
    this.newPrice = newPrice;
    if (oldPrice !== null) {
        this.oldPrice = oldPrice;
        this.discount = (Math.floor((oldPrice - newPrice) * 100 / oldPrice));
    }
    this.bestgame = bestgame;
}

Game.prototype.provideInfo = function() {
    Visualizer.renderGameModalWindow(this);
};

Game.prototype.addToCard = function () {
    Visualizer.renderOrdersPage(this);

    document.getElementById("modal_window_background").remove();
    document.body.style.overflow = "auto";
};

Game.prototype.buy = function () {
    Visualizer.renderOrdersPage(this);
    showAnotherBody("card_body");
};

Game.prototype.buyNow = function (game) {
    game.buy(game);
    document.getElementById("modal_window_background").remove();
    document.body.style.overflow = "auto";
};