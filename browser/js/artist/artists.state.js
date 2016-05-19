juke.config(function ($stateProvider) {
  $stateProvider.state('artistList', {
    url: '/artists',
    templateUrl: '/js/artist/artists.template.html'
  });

  $stateProvider.state('artist', {
    url: '/artists/:id',
    templateUrl: '/js/artist/artist.template.html'
  });
});