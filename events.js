function offCanvas() {
    let x = document.getElementById("showRight");
    x.style.display = "block";
};

function cancel() {
    let x = document.getElementById("showRight");
    x.style.display = "none";
};

let x = document.getElementById("filter-content");
    x.style.display = "none";

function dropdown() {
        if (x.style.display === "block") {
            x.style.display = "none";
        }else{
            x.style.display = "block";
        }
    };
    
function closeContent() {
    x.style.display = "none";
};

// Disable zoom using JavaScript
document.addEventListener('wheel', function (event) {
    if (event.ctrlKey) {
        event.preventDefault();
    }
});