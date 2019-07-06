$(document).ready(function(){
var topics = ["Toyota", "Jaguar", "Cadillac", "Dodge", "Genesis", "Ford", "Ferrari", "Audi", "Aston-Martin", "Bugatti", "Hyundai", "Lamborghini", "Jeep", "Mercedes", "Nissan", "Mitsubishi", "Suburu", "BMW", "Tesla"];

//Loops through the topics array and creates a button for each item.
for(var i=0; i<topics.length; i++){
    var addButton = $("<button>"); 
    addButton.addClass("cars"); 
    addButton.attr("data-name", topics[i]); 
    addButton.text(topics[i]);
    $("#header-container").append(addButton);
}

$(".cars").on("click", function{
    event.preventDefault();
    var car = $(this).attr("data-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?api_key=5XoCBIfxbh4ZdbpWWu7O7xCVS5egoy7J&limit=10&rating=PG-13&q=" + car
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        var results = resonse.data;
        var addDiv = $("<div>");
    })
})
    
});
