let getcolor = () =>{
    const randomNmber = Math.floor(Math.random()*16777215);
    const RandCode = "#" + randomNmber.toString(16); 
    // console.log(RandCode,randomNmber);
    document.getElementById("color-code").innerHTML =RandCode;
    document.body.style.backgroundColor = RandCode;
}
    
document.getElementById("btn").addEventListener(
    "click",
    getcolor
   

)
