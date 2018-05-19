angular.module('forum')

.controller('ProcessAnswer', function($scope) {
    this.expandQuestion = () => {
        // document.getElementById(`questionID${this.questionId}`).classList.add('active');
        $(`#questionID${this.questionId}`).toggleClass("active");
    };

    this.submitComment = (id, text) => {
        this.add(id, text);
        $scope.$ctrl.input = "";
    };
})
.component('questionEntry', {
    controller: 'ProcessAnswer',
    bindings: {
        question: '<',
        voteUp: '<',
        voteDown: '<',
        questionId: '<',
        add: '<',
        bookmark: '<',
    },
    templateUrl: 'src/templates/questionEntry.html'
});