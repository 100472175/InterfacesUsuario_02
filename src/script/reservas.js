

calendar = new CalendarYvv("#calendar", moment().format("Y-M-D"), "Monday");
calendar.createCalendar();

// preselected dates
calendar.diasResal = [1,2,3]

// background color of preselected dates
calendar.colorResal = "#28a7454d"

// text color of preselected dates
calendar.textResalt = "#28a745"

// background class
calendar.bg = "bg-dark";

// text color class
calendar.textColor = "text-white";

// class for normal buttons
calendar.btnH = "btn-outline-light";

// button class when hovering over
calendar.btnD = "btn-rounded-success";

calendar.funcPer = function(ev){
    console.log(ev)
};


