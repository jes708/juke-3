juke.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.when('/artists/:id', '/artists/:id/albums')

  $stateProvider.state('artistList', {
    url: '/artists',
    templateUrl: '/js/artist/artists.template.html',
    resolve: {
      artists: function (ArtistFactory) {
        return ArtistFactory.fetchAll()
      }
    },
    controller: 'ArtistsCtrl'
  });

  $stateProvider.state('artist', {
    url: '/artists/:id',
    templateUrl: '/js/artist/artist.template.html',
    resolve: {
      artist: function(ArtistFactory, $stateParams) {
        return ArtistFactory.fetchById($stateParams.id)
      }
    },
    controller: 'ArtistCtrl'
  })
  .state('artist.albums', {
    url: '/albums',
    templateUrl: '/js/artist/artist.albums.template.html'
  })
  .state('artist.songs', {
    url: '/songs',
    templateUrl: '/js/artist/artist.songs.template.html'
  });


});