angular.module('forum')
.component('questionEntry', {
    bindings: {
        question: '<',
        voteUp: '<',
        voteDown: '<',
        questionId: '<',
        add: '<',
        bookmark: '<'
    },
    templateUrl: 'src/templates/questionEntry.html'
});