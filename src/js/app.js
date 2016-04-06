
var app = angular.module('cloneit', []);

app.controller('mainController', ['$scope', function($scope) {

  $scope.plus = 'glyphicon glyphicon-plus';
  $scope.minus = 'glyphicon glyphicon-minus';
  $scope.calendar = 'glyphicon glyphicon-calendar';
  $scope.comment = 'glyphicon glyphicon-comment';
  $scope.addComment = 'glyphicon glyphicon-pushpin';

  $scope.posts = [
    {
      title: 'Berlin',
      author: 'Bert Anders',
      date: '04/01/2016',
      votes: 8,
      image: 'https://placebear.com/300/300',
      description: 'Berlin is a bon vivant, passionately feasting on the smorgasbord of life, never taking things – or itself – too seriously. To me, this city is nothing short of addictive. It embraces me, inspires me, accepts me and makes me feel good about myself, the world and other people. I enjoy its iconic sights, its vast swaths of green, its sky bars and chic restaurants, but I love its gritty sides more. There\'s nothing static about Berlin: it\'s unpredictable, unpretentious and irresistible. And it loves you back – if you let it in.',
      comments: [
        { author: 'andy',
          comment: 'Ber Lin!'},
        { author: 'andrew',
          comment: 'Berlin!'},
      ]
    },
    {
      title: 'Hamburg',
      author: 'Harry Hawkins',
      date: '04/05/2016',
      votes: 4,
      image: 'https://placebear.com/300/300',
      description: 'In Hamburg I loved A strange girl, She put my whole being In a whirl, She spurned everybody But me, I made her happy, In Hamburg. But if she had Spurned me, I\'d have looked her in the eye, And run away, And in my room, I would have cried, I might even have died, In Hamburg.',
      comments: [
        { author: 'haden12',
          comment: 'Ham BURG!'},
        { author: 'Yannis',
          comment: 'HAMBURG!'},
      ]
    },
  ];

}]);
