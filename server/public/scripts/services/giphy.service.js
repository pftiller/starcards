myApp.service('GiphyService', ['$http', function($http){
    console.log('Giphy service is loaded');
    const self = this;

    // should be an object
    self.search = { list:  [] };

    self.getRandomGif = function() {
        $http.get('https://api.giphy.com/v1/gifs/random?api_key=sjUegEu3KVUL9wwUJWWmUj8WeDQXbYIt')
        .then(function(response){
            console.log('service random response: ', response);
            self.random.result = response.data.data;
        });
    }

    
    self.getSearchedGif = function(searchText) {
        console.log(searchText);
        $http.get('https://api.giphy.com/v1/gifs/search?api_key=sjUegEu3KVUL9wwUJWWmUj8WeDQXbYIt&q=' + searchText).then(function(response) { 
        self.search.result = response.data.data;
        console.log('these are the results', self.search.result);
        })
        }
}]);
