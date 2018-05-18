angular.module('forum')
.controller('AddComment', function() {
    this.handleClick = () => {
        this.add(this.questionId, this.input);
    };
  })
.component('questionEntry', {
    bindings: {
        question: '<',
        voteUp: '<',
        voteDown: '<',
        questionId: '<',
        add: '<'
    },
    controller: 'AddComment',
    templateUrl: 'src/templates/questionEntry.html'
});