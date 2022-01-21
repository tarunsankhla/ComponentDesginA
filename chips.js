var chipinput = document.querySelector('.__chips-input');
var chipcontainer = document.querySelector('.__chips-container');
var x_close = document.querySelector('.__x_close');

function  Chiprender(){
    event.preventDefault();
    console.log("as",chipinput.value);
    var node = document.createElement("DIV");                 // Create a <li> node
    var textnode = document.createTextNode(chipinput.value);

    var closenode = document.createElement("DIV");
    var closetextnode = document.createTextNode("X");

    var vs =`<div class="__x_close">
        Y
    </div>`
    // node.innerHTML = vs;
    node.appendChild(textnode);
    closenode.appendChild(closetextnode);
    node.appendChild(closenode);
    node.addEventListener('click',()=>{
        // console.log("xxx",node);
        node.style.display = "none";
        // x_close.style.display = "none"
        // closenode.display ="none"
    })

    closenode.classList.add("__x_close");
    closenode.style.padding = "0.1rem 0.3rem";
    closenode.style.margin="0 0 0 1rem"
    closenode.style.fontStyle ="bold";
    closenode.style.backgroundColor = "white";
    closenode.style.background = "50% black"
    closenode.style.borderRadius ="25%"
    closenode.style.color ="white";
    closenode.style.cursor ="pointer"

    node.style.display ="flex";
    node.style.backgroundColor = "#e2e8f0";
    node.style.padding = "1rem";
    node.style.margin = "1rem";
    node.style.color ="#0F172A";
    node.style.flexFlow="row"
    node.style.borderRadius ="0.5rem";
    node.style.fontWeight ="800"
    node.style.fontSize="1.5rem"
    node.style.flexWrap ="wrap"
    node.style.wordWrap = "wrap"
    node.style.wordBreak ="break"
    // node.style.flexBasis="20%"
    // node.style.flexShrink ="5rem"
    node.style.maxWidth = "80%"
    chipcontainer.appendChild(node)
}



x_close.addEventListener('click',()=>{
    console.log("yyy")
})