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
    console.log("Close function called");
    x.style.display = "none";
};