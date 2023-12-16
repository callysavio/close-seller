var x = document.getElementById('sign-up')
    x.style.display = "none";

function setVisibility(elemID, disp) {
    var x = document.getElementById(elemID);
        x.style.display = disp;
}
function signUp() {
setVisibility("sign-up", "")
setVisibility("sign-in", "none")
}
function signIn() {
setVisibility("sign-in", "")
setVisibility("sign-up", "none")
}