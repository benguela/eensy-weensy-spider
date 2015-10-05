// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.factory('SpidersFactory', ['$http', function($http) {
  return {
    getSpiders : function(query) {
      return $http.get('http://localhost:5000/spiders/get');
    }
  };
}])

.controller('MainCtrl', ['$scope', 'SpidersFactory', '$ionicScrollDelegate', function($scope, SpidersFactory, ionicScrollDelegate) {

    $scope.tree = [{
        "id": "-1",
        "heading": "Root",
        "nodes": [{
          "id": "spider",
          "heading": "Spider",
          "images": ["spider.png"],
          "nodes": [{
            "id": "spider/mygalomorphae",
            "heading": "Mygalomorphae",
            "images": [
              "spiders1-9_03.jpg",
              "spiders1-9_06.jpg",
              "spiders1-9_09.jpg",
              "spiders1-9_15.jpg",
              "spiders1-9_18.jpg",
              "spiders1-9_20.jpg"]
          }, {
            "id": "spider/araneomorphae",
            "heading": "Araneomorphae",
            "images": [
              "spiders1-20_06.jpg",
              "spiders1-20_03.jpg",
              "spiders1-20_09.jpg",
              "spiders1-20_12.jpg",
              "spiders1-20_15.jpg"],
            "nodes": [{
              "id": "spider/araneomorphae/cribellum",
              "heading": "Cribellum present",
              "images": ["spiders1-21_06.jpg"]
            }, {
              "id": "spider/araneomorphae/less-than-eight-eyes",
              "heading": "Less than eight eyes",
              "images": ["spiders1-21_14.jpg"]
            }, {
              "id": "spider/araneomorphae/eight-eyes",
              "heading": "Has eight eyes",
              "images": ["spiders1-21_03.jpg"],
              "nodes": [{
                "id": "spider/araneomorphae/eight-eyes/two-claws",
                "heading": "Has two claws",
                "images": ["spiders1-21_17.jpg"],
                "hints": [
                  "Most of the plant and ground wanderers",
                  "Use scopulaeto move around on plant"
                ],
                "nodes": [{
                  "id": "spider/araneomorphae/eight-eyes/two-claws/ammoxenidae",
                  "heading": "Family: Ammoxenidae",
                  "sub_heading": "Common name: termite eating spiders or sand-divers",
                  "images": [
                    "spiders3_03.jpg",
                    "spiders3_06.jpg",
                    "spiders3_10.jpg",
                    "spiders3_13.jpg",
                    "spiders3_16.jpg",
                    "spiders3_20.jpg",
                    "spiders3_24.jpg"],
                  "notes": [{
                    "heading": "Life style",
                    "description": "Wanderers (ground dwellers): free-running on the soil surface, associated with termmites; abundance: rare."
                  }, {
                    "heading": "Body size",
                    "description": "2-10 mm (Ammoxenus) (males slightly smaller in body)."
                  }]
                }]
              }, {
                "id": "spider/araneomorphae/eight-eyes/three-claws",
                "heading": "Has three claws",
                "images": ["spiders1-21_09.jpg"],
                "hints": [
                  "All the web dwellers",
                  "Exceptions: few wanderers"
                  ]
              }]
            }]
          }]
        }, {
          "id" : "harvestman",
          "heading": "Harvestman",
          "images" : ["harvestman.png"]
        }, {
          "id" : "mite-tick",
          "heading": "Mite or Tick",
          "images" : ["mite-tick.png"]
        }, {
          "id" : "palpigrade",
          "heading": "Palpigrade",
          "images" : ["palpigrade.png"]
        }, {
          "id" : "pseudoscorpion",
          "heading": "Pseudoscorpion",
          "images" : ["pseudoscorpion.png"]
        }, {
          "id" : "scorpion",
          "heading": "Scorpion",
          "images" : ["scorpion.png"]
        }, {
          "id" : "sunspider",
          "heading": "Sunspider",
          "images" : ["sunspider.png"]
        }, {
          "id" : "uropygid",
          "heading": "Uropygid",
          "images" : ["uropygid.png"]
        }]
      }];
    $scope.parents = [];
    $scope.current = $scope.tree[0];
    $scope.nodes = $scope.tree[0].nodes;  

/*
  SpidersFactory.getSpiders().then(function(response) {
    $scope.tree = response.data;
    $scope.parents = [];
    $scope.current = $scope.tree[0];
    $scope.nodes = $scope.tree[0].nodes;     
  });
*/
  //When a node is selected this changes the scope to it's children
  $scope.select = function(node) {
    $scope.parents.push($scope.current);    
    $scope.nodes = node.nodes;
    $scope.current =node;
    ionicScrollDelegate.scrollTop();
  }

  $scope.back = function() {
    $scope.current = $scope.parents.pop();
    $scope.nodes = $scope.current.nodes;
  }

  $scope.swipe= function() {

  }

}])
