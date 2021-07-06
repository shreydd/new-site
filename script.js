let userQuestion;

questionList = ["about", "projects"];
redirectList = ["about.html", "projects.html"];

function userAsk() {
    userQuestion = document.getElementById("inputText").value;
    console.log(userQuestion);

    for (i = 0; i < questionList.length; i++) {
        if (userQuestion == questionList[i]) {
            window.open(redirectList[i], "_self");
        }
    }

    // if (userQuestion == "projects") {
    //     window.open("projects.html", "_self");
    // }
}