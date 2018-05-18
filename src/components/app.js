angular.module('forum')

.controller('AppCtrl', function(apiQuery) {
    this.questionSet = [];
    //Initialize questions onload
    this.processQuestions = (data) => {
        this.questions = {};
        data.feed_questions.forEach((questionObj) => {
            this.questions[questionObj.Id] = {
                text: questionObj.Text,
                downvotes: questionObj.downvotes,
                upvotes: questionObj.upvotes,
                answers: [],
                bookmarked: false
            };
            this.questionSet.push(questionObj.Id);
        });
        console.log(this.questions);
    };

    this.processAnswers = (data) => {
        data.feed_answers.forEach((answerObj) => {
            let qID = answerObj['Question-Id'];
            delete answerObj['Question-Id'];
            this.questions[qID].answers.push(answerObj);
        });
        this.questionSet = this.questionSet.map((id) => {
            return this.questions[id];
        });
        console.log(this.questionSet);
    };

    apiQuery.search('https://api.myjson.com/bins/dck5b', this.processQuestions);
    apiQuery.search('https://api.myjson.com/bins/hildr', this.processAnswers);
})
.component('app', {
    controller: 'AppCtrl',
    templateUrl: 'src/templates/app.html'
});