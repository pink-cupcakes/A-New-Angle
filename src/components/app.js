angular.module('forum')

.controller('init', function(apiQuery) {
    //Initialize questions onload
    this.processQuestions = (data) => {
        this.questionArray = data.feed_questions;
        this.currentQuestion;
        console.log(this.questionArray);
    };

    this.processAnswers = (data) => {
        this.answersArray = data.feed_answers;
        console.log(this.answersArray);
    }

    this.selectQuestion = (questionID) => {
        this.currentQuestion = this.questions[questionID];
    };

    apiQuery.search('https://api.myjson.com/bins/dck5b', this.processQuestions);
    apiQuery.search('https://api.myjson.com/bins/hildr', this.processAnswers);
})
.component('app', {
    controller: 'init',
    templateUrl: 'src/templates/app.html'
});