var app = angular.module("redditApp", ['angularMoment']);

app.controller("redditController", function($scope){
  $scope.data = {};
  $scope.data.posts = [
    {
      title: "Winter is coming.",
      author: "Ned Stark",
      url: "http://vignette1.wikia.nocookie.net/gameofthrones/images/6/65/Ned_Stark.jpg/revision/latest?cb=20130519175509",
      description: "Eddard Stark executes a deserter from the Night's Watch named Will. Will tries to warn Eddard about the return of the White Walkers, but Eddard dismisses him as a madman.",
      date: new Date('July 28, 2016 03:24:00'),
      counter: 3,
      comments: []
    },
    {
      title: "Like I give a f*@k.",
      author: "Cersei Lannister",
      url: "http://i.huffpost.com/gen/1205630/images/o-CERSEI-DOUTZEN-facebook.jpg",
      description: "I do things because they feel good. I drink because it feels good. I killed my husband because it felt good to be rid of him.",
      date: new Date('August 08, 2016 03:24:00'),
      counter: -5,
      comments: [
        {
          author: 'Tywin Lannister',
          text: "Before long I'll be dead"
        }
      ]
    },
    {
      title: "I don't need saving.",
      author: "Arya Stark",
      url: "http://i.ndtvimg.com/i/2016-05/game-of-thrones_640x480_81464688743.jpg",
      description: "My name is Arya Stark. I want you to know that. The last thing you're ever going to see is a Stark smiling down at you as you die.",
      date: new Date('August 01, 2016 01:24:00'),
      counter: 4,
      comments: []
    }
  ];

  $scope.data.isFormOpen = false;
  $scope.data.isPostOpen = false;
  $scope.data.isAddCommentOpen = false;
  $scope.data.isViewCommentsOpen = false;
  $scope.counterUp = function(post) {
    post.counter++;
  }
  $scope.counterDown = function(post) {
    post.counter--;
  }
  $scope.open_post = function() {
    this.data.isFormOpen = !this.data.isFormOpen;
  }
  $scope.open_add_comment = function() {
    this.post.showCommentForm = !this.post.showCommentForm;
  }
  $scope.sortByVotes = function() {
    $scope.data.sortBy = '-counter';
  }
  $scope.sortByDate = function() {
    $scope.data.sortBy = '-date';
  }
  $scope.sortByTitle = function() {
    $scope.data.sortBy = 'title';
  }

  $scope.view_comments = function() {
    $scope.data.isViewCommentsOpen = !$scope.data.isViewCommentsOpen;
  }
  $scope.addComment = function(post) {;
    $scope.data.isAddCommentOpen = false;
    this.post.isViewCommentsOpen = true;
    this.post.comments.commentCount++;
    this.post.comments.push({
      text: $scope.data.post.comments.text,
      author : $scope.data.post.comments.author,
    })
  }
  $scope.submitPost = function() {
    $scope.data.isFormOpen = false;
    $scope.data.isPostOpen = true;
    $scope.data.post.date = new Date();
    $scope.data.post.counter = 0;
    $scope.data.post.comments = [];
    $scope.data.posts.push($scope.data.post)
  }
});
