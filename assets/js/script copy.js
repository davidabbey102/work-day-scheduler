var currentDay = $("#currentDay")
var todaysDate = moment().format('dddd, MMM Do YYYY, HH:mm')
var saveBtn = $(".saveBtn")

//Adds current date to jumbotron
currentDay.text(todaysDate)

//Controls coloring of appt fields based on past, current, or upcoming
// var momentTime = moment().startOf('day').add(8, 'hour')
var hour = moment().format("H")

for (var i = 8; i < 18; i++) {
    var colorCode;
    
    if (hour < i) {
        colorCode = 'past'
        $(`.appt-${i}`).siblings(".todo").addClass(colorCode)
        console.log(colorCode)
    } else if (hour == i) {
        colorCode = 'present'
        $(`.appt-${i}`).siblings(".todo").addClass(colorCode)
        console.log(colorCode)
    } else if (hour > i) {
        colorCode = 'future'
        $(`.appt-${i}`).siblings(".todo").addClass(colorCode)
        console.log(colorCode)
    }
}

//Save each field to local storage when pressed, if user hasn't entered text alert telling them nothing to save, though a save key for that time is still created
saveBtn.on("click", function() {
    
    var time = $(this).parent().attr("id")
    var appointment = $(this).siblings(".todo").val()
    localStorage.setItem(time, appointment)

    if (appointment == "") {
        alert("You have no appointments to save during that time.")
    }
})

//Fills in saved appt's on load
for (var i = 9; i < 18; i++) {
    $(`.appt-${i}`).val(localStorage.getItem(`hour-${i}`))
}




// for (var i = 8; i < 18; i++) {
//     var colorCode;
//     var hourColor =
    
//     if (hour < i) {
//         colorCode = 'past'
//         $(`.appt-${i}`).siblings(".todo").addClass(colorCode)
//         console.log(colorCode)
//     } else if (hour == i) {
//         colorCode = 'present'
//         $(`.appt-${i}`).siblings(".todo").addClass(colorCode)
//         console.log(colorCode)
//     } else if (hour > i) {
//         colorCode = 'future'
//         $(`.appt-${i}`).siblings(".todo").addClass(colorCode)
//         console.log(colorCode)
//     }
// }




var saveBtn = $(".saveBtn")

//Adds current date to jumbotron
setInterval(time, 1000)
function time() {
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
    
    console.log(populateContainer)
}

//Save each field to local storage when pressed, if user hasn't entered text alert telling them nothing to save, though a save key for that time is still created
saveBtn.on("click", function() {
    
    var time = $(this).parent().attr("id")
    var appointment = $(this).siblings(".todo").val()
    localStorage.setItem(time, appointment)

    if (appointment == "") {
        alert("You have no appointments to save during that time.")
    }
})

//Fills in saved appt's on load
for (var i = 9; i < 18; i++) {
    $(`.hour-${i}`).val(localStorage.getItem(`hour-${i}`))
}
