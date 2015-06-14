angular.module('starter.services', [])

.factory('Favs', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var favs = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Andrew Jostlin',
    lastText: 'Did you get the ice cream?',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Max Lynx',
    lastText: 'Look at my mukluks!',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }];

  return {
    all: function() {
      return favs;
    },
    remove: function(fav) {
      favs.splice(favs.indexOf(fav), 1);
    },
    get: function(favId) {
      for (var i = 0; i < favs.length; i++) {
        if (favs[i].id === parseInt(favId)) {
          return favs[i];
        }
      }
      return null;
    }
  };
});
