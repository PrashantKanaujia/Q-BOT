const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");
const chatbotToggler  = document.querySelector(".chatbot-toggler");
let reply="Please hold while I do my algorithmic dance."
let userMessage="";
let question="";
var intent="";

const inputHeight = chatInput.scrollHeight;

const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing"   ? `<p>${message}</p>` : `<span><img src="/images/icon.avif" alt="Q-Bot Logo" /></span><p>${message}</p>`;
    chatLi.innerHTML = chatContent;
    
    chatLi.querySelector("p").textContent = message;
    return chatLi;
}

const handlechat =async () => {
    userMessage =String(chatInput.value.trim());
    // console.log(userMessage)
    userMessage=(userMessage.toLowerCase())
    
    if(!(userMessage)) return;


    fetch("/nlp",{
        method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({um: `${userMessage}`})
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); 
    })
    .then(data => {
        
        intent = data;  
        if(!(intent=="None" || intent=="greeting")){
            // console.log(intent);
            reply=urdata[intent]
            // console.log(reply)
        }
    })
    .catch(error => console.log("Error:", error));
    
    
    
    chatbox.appendChild(createChatLi(userMessage.toLowerCase(), "outgoing"));
    chatInput.value = "";

    const loading = createChatLi("Please hold while I do my algorithmic dance.", "incoming")

    chatbox.appendChild(loading)
    chatbox.scrollTop = chatbox.scrollHeight;
    // console.log(reply)
    setTimeout(() => {
        if(reply=="Please hold while I do my algorithmic dance."){
                question=`User Name is ${urdata.name} .....User Query is>>>>> `
                question+=String(userMessage);
                
                

                fetch("/api",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({query: `${question}`})
              })
              .then(response=>response.json())
              .then(data=>{
                reply=data.receivedData;
              
              
              })
              .then( ()=>{
                loading.querySelector("p").innerText = reply;
                reply="Please hold while I do my algorithmic dance.";

              })
              .catch(error=>console.error("Error:",error));
           
        }
        else{
            loading.querySelector("p").innerText=reply;
            reply="Please hold while I do my algorithmic dance."
        }
        chatbox.scrollTop = chatbox.scrollHeight;
    }, 1000);

}

    let urdata;

fetch("/data",{
    method:"GET",
})
  .then(response=>response.json())
  .then(data=>{
    urdata=data.studData;
    // console.log(urdata);

}).catch(error=>console.error("Error:",error));


chatInput.addEventListener("input", () => {
    chatInput.style.height = `${inputHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
    if (
        e.key === "Enter" &&
        !e.shiftKey &&
        window.innerWidth > 800
    ) {
        e.preventDefault();
        handlechat();
    }
});

/* ==========================
   CHATBOT PANEL TOGGLE
========================== */

const chatbotPanel = document.querySelector(".chatbot-panel");

chatbotToggler.addEventListener("click", () => {

    document.body.classList.toggle("chat-collapsed");

    if(document.body.classList.contains("chat-collapsed")){

        chatbotPanel.style.width = "0";
        chatbotPanel.style.padding = "0";
        chatbotPanel.style.opacity = "0";
        chatbotPanel.style.pointerEvents = "none";

    }else{

        chatbotPanel.style.width = "450px";
        chatbotPanel.style.padding = "20px";
        chatbotPanel.style.opacity = "1";
        chatbotPanel.style.pointerEvents = "auto";

    }

});

/* ==========================
   SEND MESSAGE
========================== */

sendChatBtn.addEventListener("click", handlechat);