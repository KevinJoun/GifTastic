$(document).ready(function(){
var topics = ["Toyota", "Porche", "Cadillac", "Lexus", "Kia", "Ford", "Ferrari", "Audi", "Aston-Martin", "Bugatti", "Hyundai", "Lamborghini", "Jeep", "Mercedes", "Nissan", "Volvo", "Honda", "Bmw", "Tesla"];

//Loops through the topics array and creates a button for each item.
function addButtons(){
    $("#header-container").empty();
for(var i=0; i<topics.length; i++){
    var addButton = $("<button>"); 
    addButton.addClass("cars"); 
    addButton.attr("data-name", topics[i]); 
    addButton.text(topics[i]);
    $("#header-container").append(addButton);
}};


function addForm(){
    var addH3 = $("<h3>").text("Add a car company");
    var addForm = $("<input>");
    var addButton = $("<input>");
    addForm.attr("type", "text");
    addForm.attr("id","userInput")
    addButton.attr("type","submit");
    addButton.attr("id", "submit-button");
    
    
    $("#form").append(addH3);
    $("#form").append(addForm);
    $("#form").append(addButton);
}
addForm();


//when a car button is clicked, it will make the ajax call.
$(document).on("click", ".cars", function(){
    var car = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=5XoCBIfxbh4ZdbpWWu7O7xCVS5egoy7J&rating=PG-13&q=" + car + "&limit=10"
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET"
        //after ajax call is made, loop through the response 10 times to display 10 gifs. Append that onto the left body container.
    }).then(function(response){
        for(var i = 0; i< 10; i++){
        var results = response.data;
        var addDiv = $("<div>");
        var rating = results[i].rating;
        var addP = $("<p>").text("Rating: " + rating);
        var addImg = $("<img>");
        addImg.attr("src", results[i].images.fixed_height.url);
        addDiv.append(addP);
        addDiv.append(addImg);
        $("#left-body-container").prepend(addDiv);
    };
    })
});
$("#submit-button").on("click", function(event){
    event.preventDefault();
    var userInput = $("#userInput").val().trim();
    topics.push(userInput);
    addButtons();
    $("#userInput").val("");
})

addButtons();
});
