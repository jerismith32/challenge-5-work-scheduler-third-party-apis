$(document).ready(function(){
    $("#currentDay").text(moment().format("MMM Do YY"));
    var currenttime = moment().hours();

    $( "textarea" ).each(function() {
        console.log(typeof $( this ).attr("time") );
        console.log('time', typeof currenttime)
        if (currenttime === parseInt($( this ).attr("time"))  ) {
            $(this).addClass("present");
        }
        else if (currenttime > parseInt($( this ).attr("time"))  ) {
            $(this).addClass("past");
        }
        else if (currenttime < parseInt($( this ).attr("time"))  ) {
            $(this).addClass("future");
        }
      });
})


