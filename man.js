            // varibles
// title
var title =document.querySelector(".titleType"),

//input nd convert btn
    // inputer = document.querySelector(".inputer").value,
    convertBtn = document.querySelector(".convertbtn"),

//work converter
    toDecimal = document.querySelector(".toDecBTN"),
    toBinary = document.querySelector(".toBinBTN");

//work variables
    converterTool= true;


            //workings
convertBtn.addEventListener("click", function () {
    var answer = document.querySelector(".output");

    var inputer= document.querySelector(".inputer").value;
    var StringIt= inputer.toString(2);
    // console.log(StringIt +"hjh");
    if (converterTool==true){
        console.log(parseInt(StringIt, 2));
        answer.innerHTML= parseInt(StringIt, 2);
        // inputer.C= "";
    }else{
        toNum= parseInt(inputer);
        answer.innerHTML = toNum.toString(2);
    }
    
})

toBinary.addEventListener("click",function () {
    if (converterTool==true){
        title.innerHTML= "Decimal to binary"
        converterTool=false;
        toDecimal.style.display="unset";
        toBinary.style.display="none";
    }
    
})

toDecimal.addEventListener("click", function () {
    if (converterTool===false){
        converterTool=true;
        title.innerHTML= "Binary to decimal"
        toDecimal.style.display="none";
        toBinary.style.display="unset";
    }
    
})