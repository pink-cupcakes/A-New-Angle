angular.module('forum')

.controller('AppCtrl', function(apiQuery) {
    this.questionSet = [];
    //Initialize questions onload
    this.processQuestions = (data) => {
        this.questions = {};
        data.feed_questions.forEach((questionObj) => {
            this.questions[questionObj.Id] = {
                text: questionObj.Text,
                downvotes: parseInt(questionObj.downvotes) || 0,
                upvotes: parseInt(questionObj.upvotes) || 0,
                answers: [],
                bookmarked: false
            };
            this.questionSet.push(questionObj.Id);
        });
    };

    this.processAnswers = (data) => {
        data.feed_answers.forEach((answerObj) => {
            let qID = answerObj['Question-Id'];
            delete answerObj['Question-Id'];
            answerObj.upvotes = parseInt(answerObj.upvotes) || 0;
            answerObj.downvotes = parseInt(answerObj.downvotes) || 0;
            this.questions[qID].answers.push(answerObj);
        });
        this.questionSet = this.questionSet.map((id) => {
            return this.questions[id];
        });
    };

    this.bookmark = (questionID) => {
        let flagged = !this.questionSet[questionID].bookmarked;
        this.questionSet[questionID].bookmarked = flagged;
    }

    this.addComment = (questionID, message) => {
        let answerSet = this.questionSet[questionID].answers;
        let contents = {
            Answer: message,
            Id: 'A-' + answerSet.length,
            created_at: new Date().toLocaleString,
            created_by: "Anonymous",
            downvotes: 0,
            upvotes: 0
        };
        answerSet.push(contents);
    };

    this.voteUp = (questionID, answerID) => {
        this.questionSet[questionID].answers[answerID].upvotes += 1;
    };

    this.voteDown = (questionID, answerID) => {
        this.questionSet[questionID].answers[answerID].downvotes += 1;
    };

    apiQuery.search('https://api.myjson.com/bins/dck5b', this.processQuestions);
    apiQuery.search('https://api.myjson.com/bins/hildr', this.processAnswers);
})
.component('app', {
    controller: 'AppCtrl',
    templateUrl: 'src/templates/app.html'
});