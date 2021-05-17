
$(document).ready(function(){
    //Click listener for the save buttons
    $(".saveBtn").on("click", function () {
        var userInput = $(this).siblings(".description").val().trim();
        var timeSlot = $(this).parent().attr("time");

        //Saves to local storage
        localStorage.setItem(timeSlot, JSON.stringify(userInput));

        //localStorage.setItem(timeSlot, userInput)
    })

    //This will load any of the saved data that was stored in local storage and display it for the user on the page
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));

})



$(document).ready(function(){
    //Adds the data to the top of the work day scheduler
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
    //Gets the current hour
    var currenttime = moment().hours();

    //Allows for highlightening 
    $( "textarea" ).each(function() {
        console.log(typeof $( this ).attr("time") );
        console.log('time', typeof currenttime)

        //This turns the current hour time-slot red
        if (currenttime === parseInt($( this ).attr("time"))  ) {
            $(this).addClass("present");
        }

        //This turns the time blocks coming up green
        else if (currenttime > parseInt($( this ).attr("time"))  ) {
            $(this).addClass("past");
        }

        //This turns the time blocks that have passes gray
        else if (currenttime < parseInt($( this ).attr("time"))  ) {
            $(this).addClass("future");
        }
      });

})


