const myApp = angular.module('myApp', ['ngRoute', 'ngMaterial']);

myApp.config(function($routeProvider){
    console.log('config loaded');
    //define client side routes 
    $routeProvider  
        .when('/search', {
            templateUrl: '/views/search.html', 
            controller: 'SearchController as vm'
        })
        .when ('/favorites', {
            templateUrl: '/views/favorites.html',
            controller: 'FavoritesController as vm'
        })
        .otherwise(
            {redirectTo: '/search'}
        );
});