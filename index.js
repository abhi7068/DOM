let num1,num2,flag,num;
function func1(){
    let p=document.getElementById("number").textContent;
    p++;
    flag=1;
    console.log(p);
    document.getElementById("number").innerHTML=p;
    num=p;
//     num1=p;
//    console.log(num2);
}

function func2(){
let p=document.getElementById("number").textContent;
   let flag=0;
    p--;
    
    console.log(p);
    document.getElementById("number").innerHTML=p;
    num=p;
    // num2=p;
   
}

function func3(){
    let p=document.getElementById("number").textContent;
   // let num=p;
    let i;
    for(i=0;i<num;i++){
        let paragraphs=document.createElement("p");
        let paraText=document.createTextNode("This is me,Abhishek");
        paragraphs.appendChild(paraText);
        document.body.appendChild(paragraphs);
    }
    // if(p<num){
    //     remove();
    // }
//     if(flag==1){
//         for(i=0;i<num1;i++){
//             let paragraphs=document.createElement("p");
//             let paraText=document.createTextNode("This is me,Abhishek");
//             paragraphs.appendChild(paraText);
//             document.body.appendChild(paragraphs);
//         }
//     }
//      else{
//         for(i=0;i<num2;i++){
//             let paragraphs=document.createElement("p");
//             let paraText=document.createTextNode("today is my dom challenge");
//             paragraphs.appendChild(paraText);
//             document.body.appendChild(paragraphs);
//         }
//     }
// }
// function remove(e){
//     var myevent=e.target
//     myevent.parentNode.remove();
// }
}