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
