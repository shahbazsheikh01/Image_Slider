var elm = document.getElementById("carousal");
var links = ["bike1.Jpg","bike2.Jpg" , "bike3.Jpg" , "bike4.Jpg", "bike5.Jpg"];
var count = 0
function nextSlide(value){
    if(count>4 ){
        count = 0
    }
    if( count<0){
        count = 4
    }
    elm.setAttribute("src", links[count]);
    if(value === '+'){
        count++;
        return;
    }
    if(value === '--'){

        count--;
        return
    }
    count++
}
setInterval(nextSlide,4000)


