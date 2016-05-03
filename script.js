$(function() {
  $(".sign-up").click(function() {
    //Expand button
    $(".button").addClass("expanded");
    //Hide sign up
    $(".sign-up").addClass("hidden");
    //Show button
    $("button").removeClass("hidden");
    // Show sign up form
    $("form").toggleClass("hidden");
  })

  $("button").click( function() {
    //Change button to google material fab
    $(this).addClass("fab")
    //Hide form
    $("form").addClass("hidden");
    $(".button").addClass("full");
    $(".text").remove();
    //Show header and dummy data
    $(".header").removeClass("hidden");
    $(".list-content").removeClass("hidden");
  })


});
//Angular controller for dummy data
angular.module('demoThree', ['ngMaterial'])
        .config(function($mdIconProvider) {
            $mdIconProvider
                .iconSet('communication', 'img/icons/sets/communication-icons.svg', 24);
        })
        .controller('demoThreeCtrl', function($scope) {

            $scope.heroes = [{
                //face : imagePath,
                realName: 'Bruce Wayne',
                name: 'Batman',
                location: "Gotham City"
            }, {
                //face : imagePath,
                realName: 'Clark Kent',
                name: 'Superman',
                location: "Metropolis"
            }, {
                //face : imagePath,
                realName: 'Oliver Queen',
                name: 'Green Arrow',
                location: "Star City"
            }, {
                //face : imagePath,
                realName: 'Barry Allen',
                name: 'The Flash',
                location: "Central City"
            }, {
                //face : imagePath,
                realName: 'Arthur Curry',
                name: 'Aquaman',
                location: "Atlantis"
            }, {
                //face : imagePath,
                realName: 'Dick Grayson',
                name: 'Nightwing',
                location: "Bludhaven"
            }, {
                //face : imagePath,
                realName: 'Diana Prince',
                name: 'Wonder Woman',
                location: "Gateway City"
            }, ];
        });