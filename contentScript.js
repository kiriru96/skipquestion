let button = document.createElement("button");
let cantans = document.getElementsByClassName("CantAnswerActionItem");
button.setAttribute("class", "skipall");
button.innerHTML = `Skip ${cantans.length} Question `;
button.addEventListener("click", (ev)=>{
    for(let i = 0; i < cantans.length; i++){
        setTimeout(()=>{
            cantans[i].childNodes[0].click();
        }, 500);
    }
    button.innerHTML = `Done`;
    setTimeout(()=>{
        button.innerHTML = `Skip ${cantans.length} Question `;
    }, 1000);
});
document.body.appendChild(button);
window.addEventListener("scroll", (e)=>{
    button.innerHTML = `Skip ${cantans.length} Question `;
})
