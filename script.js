let name= document.querySelector('#name');
let rollno= document.querySelector('#rollNo');
let ac=document.querySelector("#ac");
let pic=document.getElementById('pic');

let inputs=document.querySelector("#inputs");
console.log(pic);
let card=document.querySelector(`.card`);
let inputss=document.querySelector('.inputss');
let image = document.getElementById("image")
let n=document.querySelector( "#n" );
let r=document.querySelector("#r");
let a=document.querySelector( "#a" ) ;

//also i comment some btn for back to input part and another one is for newbtn by functioning it. 
//it will give you another design of student-card.
document.getElementById("submit").onclick = function generate() {
// let newbtn=document.createElement("buton"); 
let back=document.createElement("button");
// let text1 =document.createTextNode("another Card")
// let text=document.createTextNode("back to home");

if (pic.files.length > 0 && pic.files[0] instanceof Blob) {
    image.src = URL.createObjectURL(pic.files[0]);
} else {
    console.error("No valid file selected.");
}
n.innerHTML=name.value;
r.innerHTML=rollno.value;
a.innerHTML=ac.value;
// newbtn.append(text1);
// back.append(text);
// card.after(newbtn);
// back.style.margin="20px";
// back.style.padding="15px"
// back.style.border="2px solid"
// newbtn.style.padding="10px"
// newbtn.style.marginLeft= "20px"
// newbtn.style.marginTop="30px"
// newbtn.style.border="solid"
card.before(back);
back.style.display="none"
 inputs.style.display="none"
 inputss.style.display="none"
 card.style.display="block"
 console.log("hello")
 console.log(pic)
//  back.addEventListener("click", function() {
//     card1.style.display="none";
//     card.style.display = "none";    
//     back.style.display = "none";
//     inputs.style.display = "block";  
//     newbtn.style.display = "none";   
// });
}

