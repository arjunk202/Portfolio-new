document.addEventListener('DOMContentLoaded', function () {
    var image = document.getElementsByClassName('parallax');
    new simpleParallax(image, {
        scale: 1.5
    });
});

document.getElementById('downloadButton').addEventListener('click', function () {
    // Replace 'path/to/your/file.pdf' with the actual path to your PDF file
    var pdfPath = './Resume/resume.pdf';

    // Create a download link
    var downloadLink = document.createElement('a');

    // Set the download link properties
    downloadLink.download = 'Athul-resume.pdf'; // Set the file name
    downloadLink.href = pdfPath; // Set the path to the PDF file

    // Append the download link to the document
    document.body.appendChild(downloadLink);

    // Trigger a click event on the download link
    downloadLink.click();

    // Remove the download link from the document
    document.body.removeChild(downloadLink);
});

window.addEventListener('load', function () {
    // Check if the user agent indicates a mobile device
    var isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    // Check if the screen width is below a certain threshold (adjust as needed)
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var isSmallScreen = screenWidth < 600; // Adjust the threshold as needed

    // Show an alert if both conditions are met
    if (isMobile && isSmallScreen) {
        alert('I recommend Using A Desktop Device For Viewing This Site');
    }
});

// window.onload = function() {
//     var shadowRoot = document.querySelector('spline-viewer').shadowRoot;
//     shadowRoot.querySelector('#logo').remove();
// }