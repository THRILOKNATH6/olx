
var el= document.getElementById("s-bar");
var e=document.getElementById("extend");
var dm=document.getElementById("downimg1");

function toggle(){
    var el= document.getElementById("s-bar");
    var e=document.getElementById("extend");
    var dm=document.getElementById("downimg1");
    if (e.style.display === "none") {
        e.style.display = "block";
        dm.style.cssText = 'transform: rotate(180deg);';
    } else {
        e.style.display = "none";
        dm.style.cssText = 'transform: rotate(0deg);';
    }
}
function location_div_expand(){
    var el= document.getElementById("s-bar");
    var e=document.getElementById("extend");
    var dm=document.getElementById("downimg1");
    e.style.display = "block";
    dm.style.cssText = 'transform: rotate(180deg);';
}
