// console.log("hello world");
let body=document.querySelector("body");
let btnQuerious=document.createElement("button");
btnQuerious.setAttribute("id","btnQuerious");
// body.appendChild(btnQuerious);

btnQuerious.addEventListener("click",doSomething);
body.appendChild(btnQuerious);


let speechRecognition=new webkitSpeechRecognition();
speechRecognition.continuous=true;
speechRecognition.interimResults=true;
speechRecognition.lang="en-us";


let transcript="";
speechRecognition.onresult=function(event){
    transcript="";
    for(let i =0; i < event.results.length;++i){
        transcript += event.results[i][0].transcript;
    }
};


document.addEventListener("keypress",handleKbd);
function handleKbd(event){
    if(event.shiftKey && event.altKey && event.code === 'KeyQ'){
        btnQuerious.click();
    }
}



function doSomething(){
    //console.log("hello world");
    if(btnQuerious.hasAttribute("Listening")===false){
        btnQuerious.setAttribute("listening",true);
        //console.log("I am all ears");
        speechRecognition.start();
    }else{
        btnQuerious.removeAttribute("listening");
        //console.log("I am not listening anymore");
        speechRecognition.stop();
        debugger;
        //console.log("This is what you said-" + transcript);

        const myPopup=new Popup({
            id:"my-popup",
            title:"Here is what you said:",
            content:transcript
        });
        myPopup.show();

    }
}