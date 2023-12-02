
mobiscroll.setOptions({
locale: mobiscroll.localeEs,  // Specify language like: locale: mobiscroll.localePl or omit setting to use default
theme: 'ios',                 // Specify theme like: theme: 'ios' or omit setting to use default
themeVariant: 'light'         // More info about themeVariant: https://docs.mobiscroll.com/5-28-0/javascript/calendar#opt-themeVariant
});

mobiscroll.datepicker('#demo-one-input', {
controls: ['calendar'],       // More info about controls: https://docs.mobiscroll.com/5-28-0/javascript/calendar#opt-controls
showRangeLabels: true,
display: 'anchored'           // Specify display mode like: display: 'bottom' or omit setting to use default
});

mobiscroll.datepicker('#demo-init-inline', {
controls: ['calendar'],       // More info about controls: https://docs.mobiscroll.com/5-28-0/javascript/calendar#opt-controls
showRangeLabels: true,
display: 'inline'             // Specify display mode like: display: 'bottom' or omit setting to use default
});
