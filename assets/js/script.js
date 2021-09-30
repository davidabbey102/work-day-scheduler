//Adds current date to jumbotron
setInterval(timer, 1000)
function timer() {
    var currentDay = $("#currentDay")
    var todaysDate = moment().format('dddd, MMM Do YYYY, HH:mm:ss')
    currentDay.text(todaysDate)
}

//Controls coloring of appt fields based on past, current, or upcoming
var momentTime = moment().startOf('day').add(8, 'hour')
var hour = moment().format("H")

for (var i = 9; i < 18; i++) {
    var hourField = momentTime.add(1, 'hour').format('HH:mm')
    var colorCode;
    
    if (hour > i) {
        colorCode = 'past'
    } else if (hour == i) {
        colorCode = 'present'
    } else if (hour < i) {
        colorCode = 'future'
    }

    var populateContainer = 
        `<div class="row" id="hour-${i}">
            <p class="col-1 hour">${hourField}</p>
            <textarea class="todo col-10 ${colorCode} hour-${i}"></textarea>
            <button class="col-1 saveBtn"><i class="fa fa-save fa-w-14 fa-2x"></i></button>
        </div>`
    
    $('.container').append(populateContainer)
}

var saveBtn = $(".saveBtn")

//Save each related textarea text to local storage when pressed
saveBtn.on("click", function(event) {
    var time = $(this).parent().attr("id")
    var appointment = $(this).siblings(".todo").val()
    localStorage.setItem(time, appointment)
    console.log(time, appointment)
})

//Fills in saved appt's on load
for (var i = 9; i < 18; i++) {
    $(`.hour-${i}`).val(localStorage.getItem(`hour-${i}`))
}


