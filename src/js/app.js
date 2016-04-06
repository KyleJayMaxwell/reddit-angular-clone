
var app = angular.module('cloneit', ['relativeDate']);

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
      date: new Date("Dec 31 2015 05:51:24 GMT-0600"),
      votes: 8,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Siegessaeule_Aussicht_10-13_img4_Tiergarten.jpg/1920px-Siegessaeule_Aussicht_10-13_img4_Tiergarten.jpg',
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
      date: new Date("Mar 30 2016 19:18:24 GMT-0600"),
      votes: 4,
      image: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Hamburg_montage.jpg',
      description: 'In Hamburg I loved A strange girl, She put my whole being In a whirl, She spurned everybody But me, I made her happy, In Hamburg. But if she had Spurned me, I\'d have looked her in the eye, And run away, And in my room, I would have cried, I might even have died, In Hamburg.',
      comments: [
        { author: 'haden12',
          comment: 'Ham BURG!'},
        { author: 'Yannis',
          comment: 'HAMBURG!'},
      ]
    },
    {
      title: 'Munich',
      author: 'Maxwell Atkin',
      date: new Date("Apr 1 2016 09:56:24 GMT-0600"),
      votes: 2,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Munchen_collage.jpg/600px-Munchen_collage.jpg',
      description: 'The name of the city is derived from the Old/Middle High German term Munichen, meaning "by the monks". It derives from the monks of the Benedictine order who ran a monastery at the place that was later to become the Old Town of Munich; hence the monk depicted on the city\'s coat of arms. Munich was first mentioned in 1158. From 1255 the city was seat of the Bavarian Dukes. Black and gold—the colours of the Holy Roman Empire—have been the city\'s official colours since the time of Ludwig the Bavarian, when it was an imperial residence. Following a final reunification of the Wittelsbachian Duchy of Bavaria, previously divided and sub-divided for more than 200 years, the town became the country\'s sole capital in 1506.',
      comments: [
        { author: 'FCB',
          comment: 'BAYERN!'},
        { author: 'Johan',
          comment: 'Munich!'},
      ]
    },
    {
      title: 'Frankfurt',
      author: 'Frank Antony',
      date: new Date("Apr 4 2016 09:56:24 GMT-0600"),
      votes: 0,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/FrankfurtSkyline2014.jpg/560px-FrankfurtSkyline2014.jpg',
      description: 'Frankfurt is a centre for commerce, culture, education, tourism and web traffic. Messe Frankfurt is one of the world\'s largest trade fairs at 578,000 square metres and ten exhibition halls. Major trade fairs include the Frankfurt Motor Show, the world\'s largest motor show, and the Frankfurt Book Fair, the world\'s largest book fair.',
      comments: [
        { author: 'Franky1',
          comment: 'FRANK furt!'},
        { author: 'Rob',
          comment: 'Frankfurt!'},
      ]
    }
  ];

}]);
