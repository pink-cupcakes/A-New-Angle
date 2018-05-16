angular.module('forum')

.controller('init', function(apiQuery) {
    //Initialize questions onload
    this.processQuestions = (data) => {
        this.questionSet = {};
        data.feed_questions.forEach((questionObj) => {
            this.questionSet[questionObj.Id] = {
                text: questionObj.Text,
                downvotes: questionObj.downvotes,
                upvotes: questionObj.upvotes,
                answers: [],
                bookmarked: false
            };
        });
        this.currentQuestion;
        console.log(this.questionSet);
    };

    this.processAnswers = (data) => {
        data.feed_answers.forEach((answerObj) => {
            let qID = answerObj['Question-Id'];
            delete answerObj['Question-Id'];
            this.questionSet[qID].answers.push(answerObj);
        });
        console.log(this.questionSet);
    }

    this.selectQuestion = (questionID) => {
        this.currentQuestion = this.questionSet[questionID];
    };

    apiQuery.search('https://api.myjson.com/bins/dck5b', this.processQuestions);
    apiQuery.search('https://api.myjson.com/bins/hildr', this.processAnswers);
})
.component('app', {
    controller: 'init',
    templateUrl: 'src/templates/app.html'
});