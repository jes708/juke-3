juke.config(function ($stateProvider) {
  $stateProvider.state('artistList', {
    url: '/artists',
    templateUrl: '/js/artist/artists.template.html'
  });
});