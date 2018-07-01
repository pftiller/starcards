myApp.controller('FavoritesController', ['MeanService', function (MeanService){
    console.log('loading favorites controller');
    const self = this;
    
    self.favorites = MeanService.favorites;
    
    
    
        MeanService.getFavorites();

        self.deleteFavorite = function(id) {
            MeanService.deleteFavorite(id);
        }
    
}]);