juke.config(function ($stateProvider) {
  $stateProvider.state('albumList', {
    url: '/albums',
    templateUrl: '/js/album/albums.template.html'
  });

  $stateProvider.state('album', {
    url: '/albums/:id',
    templateUrl: '/js/album/album.template.html'
  });
});