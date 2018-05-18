angular.module('forum')
.component('questionEntry', {
    bindings: {
        question: '<',
    },
    templateUrl: 'src/templates/questionEntry.html'
});