angular.module('youtube', ['ngResource']);

function youtubeCtrl($scope, $resource){
  $scope.youtube = $resource('http://gdata.youtube.com/feeds/api/videos',
    {q:'angularjs', v:'2', alt:'json', 'max-result':'10', callback: 'JSON_CALLBACK'},
    {get:{method:'JSONP'}}
  );



  $scope.doSearch = function(){
    $scope.youtubeResult = $scope.youtube.get({q:$scope.searchTerm});
  }

}