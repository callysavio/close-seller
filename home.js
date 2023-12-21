function offCanvas() {
    let x = document.getElementById("showRight");
    x.style.display = "block";
};

function cancel() {
    let x = document.getElementById("showRight");
    x.style.display = "none";
};

// Disable zoom using JavaScript
document.addEventListener('wheel', function (event) {
    if (event.ctrlKey) {
        event.preventDefault();
    }
});