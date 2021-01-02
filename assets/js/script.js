window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());

gtag('config', 'UA-126939217-2');

$(document).ready(function() {
    $(".scrollspy").scrollSpy()
        // Initialize collapse button
    $(".button-collapse").sideNav({
        menuWidth: 190, // Default is 240
        edge: "left", // Choose the horizontal origin
        closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    })
})