// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


var date = new Date()
var time = date.getHours();
    // TODO: Add code to display the current date in the header of the page.
    //today date 
document.getElementById('currentDay').innerHTML = dayjs().format('dddd, MMMM D YYYY')
console.log(time)
var x = calTime()
let now = dayjs();
console.log(now.format('dddd, MMMM D YYYY'));



//get items from local storage and display
$('.description').each( function (){
  $(this).html(localStorage.getItem($(this).parent().attr('id')));
  // console.log(($(this).parent().attr('id')))
})




// var locsav = localStorage.getItem('hour-9') 
// console.log(locsav)

//set function to loop over the time blocks on calender so they change color to past, present, future colors
function calTime() {
  var currentTime = time;
  console.log(currentTime)

  // loop over time blocks
  $('.time-block').each(function () {
    console.log($(this).attr('id'))
    var timeBlock = $(this).attr('id').replace('hour-', '')
    console.log(timeBlock)
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //

    //


    //CHECK CURRENT TIME AND ADD THE CLASS BACKGROUND COLOR FOR PAST PRESENT FUTURE


    if (timeBlock < currentTime) {
      $(this).removeClass('future');
      $(this).removeClass('present');
      $(this).addClass('past');
    }

    else if (timeBlock === currentTime) {
      $(this).removeClass('future');
      $(this).addClass('present');
      $(this).removeClass('past');
    }

    else {
      $(this).addClass('future');
      $(this).removeClass('present');
      $(this).removeClass('past');
    }

  })

}

$(document).ready(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?




  $('button').on('click', function () {
    // console.log('The save button was clicked')
    var calInfo = $(this).siblings('.col-8').val();
    var hour = $(this).parent().attr('id');
    console.log(calInfo)
    console.log(hour)

    localStorage.setItem(hour, calInfo);





    
    
  })
  
 
  
})






