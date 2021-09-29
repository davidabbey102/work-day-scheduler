var currentDay = $("#currentDay")
var todaysDate = moment().format('dddd, MMM Do YYYY, HH:mm')
var saveBtn = $(".saveBtn")

//Adds current date to jumbotron
currentDay.text(todaysDate)

//Controls coloring of appt fields based on past, current, or upcoming
var momentTime = moment().startOf()
var hour = moment().format("H")

for (var i = 8; i < 18; i++) {
    
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


