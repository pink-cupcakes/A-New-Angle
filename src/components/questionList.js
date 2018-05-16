angular.module('question-list')
.component('questionList', {

    bindings: {
        questionSet: '<',
        selectQuestion: '<'
    },
    templateUrl: 'src/templates/questionList.html'
    });