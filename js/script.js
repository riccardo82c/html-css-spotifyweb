function toggleTheme() {
    // If document have an attribute data-theme with value dark, set attribute to light, else set to dark.
    if (document.documentElement.getAttribute('data-theme') === 'dark')
        document.documentElement.setAttribute('data-theme', 'light')
    else
        document.documentElement.setAttribute('data-theme', 'dark')
}


// Get the button, and when the user clicks on it, execute myFunction
document.getElementById("myBtn").onclick = function() {
    myFunction(),
    burger(this)
};

/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// burger toggle between adding and removing the class .change from the 3 bar inside burger button
function burger(x) {
  x.classList.toggle("change");
}
