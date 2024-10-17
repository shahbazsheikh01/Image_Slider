var elm = document.getElementById("carousal");
var links = ["bike1.jpg","bike2.jpg" , "bike3.jpg" , "bike4.jpg", "bike5.jpg"];
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


