function getBotResponse(input) {
    //rock paper scissors
    if (input == "Good Morning") {
        return "Good Morning";
    } else if (input == "Good Evening") {
        return "Good Evening";
    } else if (input == "How are you?") {
        return "Thnaks for asking.I am good.How are you?";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Our executive will get back to you soon on this!";
    }
}