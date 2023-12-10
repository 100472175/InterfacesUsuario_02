const app = angular.module('dateTimeApp', []);
let app2 = "21";
app.controller('dateTimeCtrl', function () {
    const ctrl = this;

    ctrl.selected_date = new Date();
	ctrl.selected_date.setHours(10);
	ctrl.selected_date.setMinutes(0);
	
	ctrl.updateDate = function (newdate) {
		
		// Do something with the returned date here.
		// Aqui es donde lo tienes que guardar en el webstore o cookie.
		console.log(newdate);
	};
});

// Date Picker
app.directive('datePicker', function ($timeout, $window) {
    return {
        restrict: 'AE',
        scope: {
            selecteddate: "=",
            updatefn: "&",
            open: "=",
            datepickerTitle: "@",
            customMessage: "@",
            picktime: "@",
            pickdate: "@",
            pickpast: '=',
			mondayfirst: '@'
        },
		transclude: true,
        link: function (scope, element, attrs, ctrl, transclude) {
			transclude(scope, function(clone) {
				element.append(clone);
			});
			
            if (!scope.selecteddate) {
                scope.selecteddate = new Date();
            }

            if (attrs.datepickerTitle) {
                scope.datepicker_title = attrs.datepickerTitle;
            }

            scope.days = [
                { "long": "Domingo", "short": "Dom" },
                { "long": "Lunes", "short": "Lun" },
                { "long": "Martes", "short": "Mar" },
                { "long": "Miércoles", "short": "Mié" },
                { "long": "Jueves", "short": "Jue" },
                { "long": "Viernes", "short": "Vie" },
                { "long": "Sábado", "short": "Sáb" }
            ];
			if (scope.mondayfirst === 'true') {
				var sunday = scope.days[0];
				scope.days.shift();
				scope.days.push(sunday);
			}

            scope.monthNames = [
                "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
            ];

            function getSelected() {
                if (scope.currentViewDate.getMonth() === scope.localdate.getMonth()) {
                    if (scope.currentViewDate.getFullYear() === scope.localdate.getFullYear()) {
                        for (var number in scope.month) {
                            if (scope.month[number].daydate === scope.localdate.getDate()) {
                                scope.month[number].selected = true;
								if (scope.mondayfirst === 'true') {
									if (parseInt(number) === 0) {
										number = 6;
									} else {
										number = number - 1;
									}
								}
								scope.selectedDay = scope.days[scope.month[number].dayname].long;
							}
                        }
                    }
                }
            }

            function getDaysInMonth() {
                var month = scope.currentViewDate.getMonth();
                var date = new Date(scope.currentViewDate.getFullYear(), month, 1);
                var days = [];
                var today = new Date();
                while (date.getMonth() === month) {
                    var showday = true;
                    if (!scope.pickpast && date < today) {
                        showday = false;
                    }
                    if (today.getDate() === date.getDate() &&
                        today.getYear() === date.getYear() &&
                        today.getMonth() === date.getMonth()) {
                        showday = true;
                    }
                    var day = new Date(date);
                    var dayname = day.getDay();
                    var daydate = day.getDate();
                    days.push({ 'dayname': dayname, 'daydate': daydate, 'showday': showday });
                    date.setDate(date.getDate() + 1);
                }
                scope.month = days;
            }

            function initializeDate() {
                scope.currentViewDate = new Date(scope.localdate);
                scope.currentMonthName = function () {
                    return scope.monthNames[scope.currentViewDate.getMonth()];
                };
                getDaysInMonth();
                getSelected();
            }

            // Takes selected time and date and combines them into a date object
            function getDateAndTime(localdate) {
                var time = scope.time.split(':');
                if (scope.timeframe === 'am' && time[0] === '12') {
                    time[0] = 0;
                } else if (scope.timeframe === 'pm' && time[0] !== '12') {
                    time[0] = parseInt(time[0]) + 12;
                }
                return new Date(localdate.getFullYear(), localdate.getMonth(), localdate.getDate(), time[0], time[1]);                
            }


            // Convert from UTC to account for different time zones
            function convertFromUTC(utcdate) {
                return new Date(utcdate);
            }

            // Returns the format of time desired for the scheduler, Also I set the am/pm
            function formatAMPM(date) {
                let hours = date.getHours();
                let minutes = date.getMinutes();
                hours >= 12 ? scope.changetime('pm') : scope.changetime('am');
                hours = hours % 12;
                hours = hours ? hours : 12; // the hour '0' should be '12'
                minutes = minutes < 10 ? '0' + minutes : minutes;
                const strTime = hours + ':' + minutes;
                return strTime;
            }
			
            scope.$watch('open', function() {
                if (scope.selecteddate !== undefined && scope.selecteddate !== null) {
                    scope.localdate = convertFromUTC(scope.selecteddate);
                } else {
                    scope.localdate = new Date();
                    scope.localdate.setMinutes(Math.round(scope.localdate.getMinutes() / 60) * 30);
                }
				scope.time = formatAMPM(scope.localdate);
				scope.setTimeBar(scope.localdate);
				initializeDate();
				scope.updateInputTime();
            });

            scope.selectDate = function (day) {

                if (scope.pickdate === "true" && day.showday) {
                    for (var number in scope.month) {
                        var item = scope.month[number];
                        if (item.selected === true) {
                            item.selected = false;
                        }
                    }
                    day.selected = true;
                    scope.selectedDay = scope.days[day.dayname].long;
                    scope.localdate = new Date(scope.currentViewDate.getFullYear(), scope.currentViewDate.getMonth(), day.daydate);
                    initializeDate(scope.localdate);
                    scope.updateDate();
                }
            };

            scope.updateDate = function () {
                if (scope.localdate) {
                    var newdate = getDateAndTime(scope.localdate);
                    scope.updatefn({newdate:newdate});
                }
            };

            scope.moveForward = function () {
                scope.currentViewDate.setMonth(scope.currentViewDate.getMonth() + 1);
                if (scope.currentViewDate.getMonth() === 12) {
                    scope.currentViewDate.setDate(scope.currentViewDate.getFullYear() + 1, 0, 1);
                }
                getDaysInMonth();
                getSelected();
            };

            scope.moveBack = function () {
                scope.currentViewDate.setMonth(scope.currentViewDate.getMonth() - 1);
                if (scope.currentViewDate.getMonth() === -1) {
                    scope.currentViewDate.setDate(scope.currentViewDate.getFullYear() - 1, 0, 1);
                }
                getDaysInMonth();
                getSelected();
            };

            scope.calcOffset = function (day, index) {
                if (index === 0) {
                    let offset = (day.dayname * 14.2857142) + '%';
                    if (scope.mondayfirst === 'true') {
						offset = ((day.dayname - 1) * 14.2857142) + '%';
					}
                    return offset;
                }
            };
            
			///////////////////////////////////////////////
			// Check size of parent element, apply class //
			///////////////////////////////////////////////
			scope.checkWidth = function (apply) {
                const parent_width = element.parent().width();
                scope.compact = parent_width < 620;
				if (apply) {
					scope.$apply();
				}
			};
			scope.checkWidth(false);
			
            //////////////////////
            // Time Picker Code //
            //////////////////////
            if (scope.picktime) {
                let currenttime;
                let timeline;
                let timeline_width;
                let timeline_container;
                let sectionlength;

                scope.getHours = function () {
                    return new Array(11);
                };

                scope.time = "12:00";
                scope.hour = 12;
                scope.minutes = 0;
                scope.currentoffset = 0;

                scope.timeframe = 'am';

                scope.changetime = function(time) {
                    scope.timeframe = time;
                    scope.updateDate();
					scope.updateInputTime();					
                };
				
				scope.edittime = {
					digits: []
				};
				
				scope.updateInputTime = function () {
					scope.edittime.input = scope.time + ' ' + scope.timeframe;
					scope.edittime.formatted = scope.edittime.input;
				};
				
				scope.updateInputTime();
				
				function checkValidTime (number) {
                    let validity = true;
					switch (scope.edittime.digits.length) {
						case 0:
							if (number === 0) {
								validity = false;
							}
							break;
						case 1:
							validity = number <= 5;
							break;
						case 2:
							validity = true;
							break;
						case 3:
							if (scope.edittime.digits[0] > 1) {
								validity = false;
							} else if (scope.edittime.digits[1] > 2) {
								validity = false;
							} else validity = scope.edittime.digits[2] <= 5;
							break;
						case 4:
							validity = false;
							break;
					}
					return validity;
				}
				
				function formatTime () {
                    let time = "";
                    if (scope.edittime.digits.length === 1) {
						time = "--:-" + scope.edittime.digits[0];
					} else if (scope.edittime.digits.length === 2) {
						time = "--:" + scope.edittime.digits[0] + scope.edittime.digits[1];
					} else if (scope.edittime.digits.length === 3) {
						time = "-" + scope.edittime.digits[0] + ':' + scope.edittime.digits[1] + scope.edittime.digits[2];
					} else if (scope.edittime.digits.length === 4) {
						time = scope.edittime.digits[0] + scope.edittime.digits[1].toString() + ':' + scope.edittime.digits[2] + scope.edittime.digits[3];
						console.log(time);
					}
					return time + ' ' + scope.timeframe;
				}
				
				scope.changeInputTime = function (event) {
                    const numbers = {48: 0, 49: 1, 50: 2, 51: 3, 52: 4, 53: 5, 54: 6, 55: 7, 56: 8, 57: 9};
                    if (numbers[event.which] !== undefined) {
						if (checkValidTime(numbers[event.which])) {
							scope.edittime.digits.push(numbers[event.which]);
							console.log(scope.edittime.digits);
							scope.time_input = formatTime();
							scope.time = numbers[event.which] + ':00';
							scope.updateDate();
							scope.setTimeBar();
						}
					} else if (event.which === 65) {
						scope.timeframe = 'am';
						scope.time_input = scope.time + ' ' + scope.timeframe;
					} else if (event.which === 80) {
						scope.timeframe = 'pm';
						scope.time_input = scope.time + ' ' + scope.timeframe;
					} else if (event.which === 8) {
						scope.edittime.digits.pop();
						scope.time_input = formatTime();
						console.log(scope.edittime.digits);
					}
					scope.edittime.formatted = scope.time_input;
					// scope.edittime.input = formatted;
				};
				
                var pad2 = function (number) {
                    return (number < 10 ? '0' : '') + number;
                };
           
                scope.moving = false;
                scope.offsetx = 0;
                scope.totaloffset = 0;
                scope.initializeTimepicker = function () {
                    currenttime = $('.current-time');
                    timeline = $('.timeline');
                    if (timeline.length > 0) {
                        timeline_width = timeline[0].offsetWidth;
                    }
                    timeline_container = $('.timeline-container');
                    sectionlength = timeline_width / 24 / 6;
                };

                angular.element($window).on('resize', function () {
                    scope.initializeTimepicker();
                    if (timeline.length > 0) {
                        timeline_width = timeline[0].offsetWidth;
                    }
                    sectionlength = timeline_width / 24;
					scope.checkWidth(true);
                });
           
                scope.setTimeBar = function () {
					currenttime = $('.current-time');
                    const timeline_width = $('.timeline')[0].offsetWidth;
                    let hours = scope.time.split(':')[0];
                    if (hours === '12') {
						hours = 0;
					}
                    const minutes = scope.time.split(':')[1];
                    const minutes_offset = (minutes / 60) * (timeline_width / 12);
                    const hours_offset = (hours / 12) * timeline_width;
                    scope.currentoffset = parseInt(hours_offset + minutes_offset - 1);
                    currenttime.css({
						transition: 'transform 0.4s ease',
                        transform: 'translateX(' + scope.currentoffset + 'px)',
                    });
                };

                scope.getTime = function () {
                    // get hours
                    var percenttime = (scope.currentoffset + 1) / timeline_width;
                    var hour = Math.floor(percenttime * 12);
                    var percentminutes = (percenttime * 12) - hour;
					var minutes = Math.round((percentminutes * 60) / 5) * 5;
                    if (hour === 0) {
                        hour = 12;
                    }
					if (minutes === 60) {
						hour += 1;
						minutes = 0;
					}

                    scope.time = hour + ":" + pad2(minutes);
					scope.updateInputTime();
                    scope.updateDate();
                };
           
                var initialized = false;

                element.on('touchstart', function() {
                    if (!initialized) {
                        element.find('.timeline-container').on('touchstart', function (event) {
                            scope.timeSelectStart(event);
                        });
                        initialized = true;
                    }
                });

                scope.timeSelectStart = function (event) {
                    scope.initializeTimepicker();
                    const timepicker_container = element.find('.timepicker-container-inner');
                    if (event.type === 'mousedown') {
                        scope.xinitial = event.clientX;
                    } else if (event.type === 'touchstart') {
                        scope.xinitial = event.originalEvent.touches[0].clientX;
                    }
                    scope.moving = true;
                    scope.currentoffset = scope.xinitial - timepicker_container.offset().left;
                    scope.totaloffset = scope.xinitial - timepicker_container.offset().left;
					console.log(timepicker_container.width());
					if (scope.currentoffset < 0) {
						scope.currentoffset = 0;
					} else if (scope.currentoffset > timepicker_container.width()) {
						scope.currentoffset = timepicker_container.width();
					}
					currenttime.css({
                        transform: 'translateX(' + scope.currentoffset + 'px)',
                        transition: 'none',
                        cursor: 'ew-resize',
                    });
                    scope.getTime();
                };
           
                angular.element($window).on('mousemove touchmove', function (event) {
                    if (scope.moving === true) {
                        event.preventDefault();
                        if (event.type === 'mousemove') {
                            scope.offsetx = event.clientX - scope.xinitial;
                        } else if (event.type === 'touchmove') {
                            scope.offsetx = event.originalEvent.touches[0].clientX - scope.xinitial;
                        }
                        var movex = scope.offsetx + scope.totaloffset;
                        if (movex >= 0 && movex <= timeline_width) {
                            currenttime.css({
                                transform: 'translateX(' + movex + 'px)',
                            });
                            scope.currentoffset = movex;
                        } else if (movex < 0) {
                            currenttime.css({
                                transform: 'translateX(0)',
                            });
                            scope.currentoffset = 0;
                        } else {
                            currenttime.css({
                                transform: 'translateX(' + timeline_width + 'px)',
                            });
                            scope.currentoffset = timeline_width;
                        }
                        scope.getTime();
                        scope.$apply();
                    }
                });
           
                angular.element($window).on('mouseup touchend', function () {
                    if (scope.moving) {
                        // var roundsection = Math.round(scope.currentoffset / sectionlength);
                        // var newoffset = roundsection * sectionlength;
                        // currenttime.css({
                        //     transition: 'transform 0.25s ease',
                        //     transform: 'translateX(' + (newoffset - 1) + 'px)',
                        //     cursor: 'pointer',
                        // });
                        // scope.currentoffset = newoffset;
                        // scope.totaloffset = scope.currentoffset;
                        // $timeout(function () {
                        //     scope.getTime();
                        // }, 250);
                    }
                    scope.moving = false;
                });

                scope.adjustTime = function (direction) {
                    event.preventDefault();
                    scope.initializeTimepicker();
                    var newoffset;
                    if (direction === 'decrease') {
                        newoffset = scope.currentoffset - sectionlength;
                    } else if (direction === 'increase') {
                        newoffset = scope.currentoffset + sectionlength;
                    }
                    if (newoffset < 0 || newoffset > timeline_width) {
                        if (newoffset < 0) {
                            newoffset = timeline_width - sectionlength;
                        } else if (newoffset > timeline_width) {
                            newoffset = 0 + sectionlength;
                        }
                        if (scope.timeframe === 'am') {
                            scope.timeframe = 'pm';
                        }
                        else if (scope.timeframe === 'pm') {
                            scope.timeframe = 'am';
                        }
                    }
                    currenttime.css({
                        transition: 'transform 0.4s ease',
                        transform: 'translateX(' + (newoffset - 1) + 'px)',
                    });
                    scope.currentoffset = newoffset;
                    scope.totaloffset = scope.currentoffset;
                    scope.getTime();
                };
            }

            // End Timepicker Code //

        }
    };
});



let selectedBg = document.querySelector('.selected-bg');
let people = document.querySelector('.people');
let range = document.querySelector('.range');
let currentIndex = -1;
let iniDragCursorX = 0;
let iniTransformX = 0;
let currTransformX = 0;
let currentPosition = 0;


selectNumber = (index, isDragging) => {
    //console.log(index, currentIndex);
    if (!isDragging) {
        currTransformX = 3+(index * 78);
        TweenMax.to(selectedBg, 0.5, { x: currTransformX, force3D: true, ease: Back.easeOut });
    }
    if (index === currentIndex) {
        return;
    }
    TweenMax.to(people, 0.5, { x: (index * 74), force3D: true, ease: Quint.easeInOut });
    document.querySelectorAll('.options button').forEach((element, id) => {
        if (id === index) {
            element.classList.add('selected');
            TweenMax.killTweensOf(element);
            TweenMax.fromTo(element, 1, { y: 10, opacity: 0 }, { y: 0, opacity: 1, ease: Elastic.easeOut });
        } else {
            element.classList.remove('selected');
        }
    });
    let initialX = (index * 15) / 2;
    let rot = ((index > currentIndex) ? -30 : 30) + -((index - currentIndex) * 15);
    currentIndex = index;
    rot = Math.max(-80, Math.min(80, rot));
    for (let i = 0; i < 6; i++) {
        let person = people.children[i];
        if (i <= index) {
            TweenMax.to(person, 0.5, { scaleY: 1, x : -initialX + (i * 15), ease: Back.easeOut, delay: 0.3 });
            TweenMax.to(person, 0.5, { bezier:[{ rotation: rot}, { rotation: 0 }], ease: Quad.easeInOut, delay: Math.abs(index - i) * 0.006})
        } else {
            TweenMax.killTweensOf(person);
            TweenMax.to(person, 0.3, { scaleY: 0, ease: Quint.easeOut });
        }
    }

    currentIndex = index;
    console.log(currentIndex+1);
}


let id = 0;
document.querySelectorAll('.options button').forEach((element) => {
    element.index = id;
    id++;
    element.addEventListener('click', (evt) => {
        selectNumber(evt.currentTarget.index);
    });
});



document.getElementById('reservationSelector').addEventListener('change', function() {
    console.log("Selected option: " + this.value);
    // alert("Reservation for " + this.value + " people.");
});

