myApp.controller('SearchController', ['MeanService', '$scope', function (MeanService, $scope) {
    console.log('loading search controller');
    const self = this;
    self.swapi = MeanService.swapi;
    self.callSWAPI = function (type, query) {
        type = type.toLowerCase();
        console.log(type);
        MeanService.callSWAPI(type, query);
    }

    self.types = [
        'Films',
        'People',
        'Planets',
        'Species',
        'Starships',
        'Vehicles'
    ]

    self.addFavorite = function (url, btn) {
        btn.target.disabled = true;
        console.log('here is what I am sending:', url);
        MeanService.addFavorite(url);

    }

    self.changeResults = function () {
        console.log('ran');
        self.swapi.result = [];
    }
}]);