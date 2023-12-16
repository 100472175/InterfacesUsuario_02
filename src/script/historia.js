var isMac = /Mac/.test(navigator.platform);

if (isMac) {
    $(document).ready(function () {
        // Select the element with the class 'iframe-container'
        var $iframeContainer = $('.iframe-container');
        // Check if the element exists
        if ($iframeContainer.length > 0) {
            // Modify the background color
            $iframeContainer.css('top', '12.1%');
            $iframeContainer.css('height', '55.65vh');
        }
    });
} else {
    console.log("This device is not a Mac.");
}