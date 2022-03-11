//For background image to stretch across page:
var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {
    document.querySelector(".header").style.height = window.innerHeight + "px";
})
//src: https://websitesetup.org/bootstrap-tutorial-for-beginners/