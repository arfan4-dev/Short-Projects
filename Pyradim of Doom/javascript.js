// Pyramid of Doom
function changeTextColor(Element,text,color,time,Onsuccess,onFailure){
    setTimeout(() => {
        if(Element){
            
            Element.textContent=text;
            Element.style.color=color;
            if(Onsuccess){
                Onsuccess();
            }
        }
        else
        {
            if((onFailure)){

                onFailure()
            }
        }
    }, time);
}

changeTextColor(heading1,"one","purple",2000,()=>{
changeTextColor(heading2,"two","red",1000,()=>{
changeTextColor(heading3,"three","yellow",1000,()=>{
changeTextColor(heading4,"four","green",1000,()=>{
changeTextColor(heading5,"five","skyblue",1000,()=>{
changeTextColor(heading6,"six","cyan",1000,()=>{
changeTextColor(heading7,"seven","rgb(2,262,118)",1000,()=>{
console.log("Heading7 exist")},()=>{console.log("Heading7 does not exist")})
console.log("Heading6 exist")},()=>{console.log("Heading6 does not exist")})
console.log("Heading5 exist")},()=>{console.log("Heading5 does not exist")})
console.log("Heading4 exist")},()=>{console.log("Heading4 does not exist")})
console.log("Heading3 exist")},()=>{console.log("Heading3 does not exist")})
console.log("Heading2 exist")},()=>{console.log("Heading2 does not exist")})    
console.log("Heading1 exist")},()=>{console.log("Heading1 does not exist")})


