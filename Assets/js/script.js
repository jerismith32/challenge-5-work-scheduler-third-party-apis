
$(document).ready(function(){
    //Click listener for the save buttons
    $(".saveBtn").on("click", function () {
        var userInput = $(this).siblings(".description").val().trim();
        var timeSlot = $(this).parent().attr("time");

        //Saves to local storage
        localStorage.setItem(timeSlot, userInput);
    })
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


