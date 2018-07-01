  myApp.controller('NavController', function ($scope)  {
    console.log('loading nav controller');

    
    $scope.states = {};
    $scope.states.activeItem = 'item1';
    $scope.navlinks = [{
        id: 'item1',
        title: 'Search',
        link: '#!/search'
    }, {
        id: 'item2',
        title: 'Favorites',
        link: '#!/favorites'
    }];
});