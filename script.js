// Q-4
let a = document.querySelector(".hello");
a.addEventListener("click",()=>{
a.innerHTML= "hello world";
a.style.color="white";

})
// Q-5
let rep = document.querySelector(".rep");
function replace() {
    rep.innerHTML = "Welcome to Elevation academy"

}
// Q-6
let c = document.getElementById("heading");
c.addEventListener("click",()=>{
    c.style.color = "red";
})
// Q-7
function changedirection(){
    const a = document.getElementById("container")
    if(a.style.flexDirection ==="row"){
    a.style.flexDirection="column";
    }
    else{
        a.style.flexDirection="row";
        // a.style.="row";
    }
}
// Q-9
let clocktime = document.querySelector(".clocked");
function clockstart(){
    let time = new Date();
    let hrs= time.getHours();
    let min = time.getMinutes();
    let sec= time.getSeconds();

    clocktime.innerHTML=` ${hrs} :: ${min} ::${sec}`

}
setInterval(() => {
    clockstart();
}, 1000);
    