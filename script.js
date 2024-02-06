var i = 0;
var speed = 100;

var prompt = 
'<span>alvin@MacBook-Pro</span>' +
'<span style="color: white">:</span>' + 
'<span style="color: rgb(0, 102, 255)">~</span>' + 
'<span style="color: white">$</span>'

var build = 
'<div id=prompt1 style="display: none">' +
prompt +
'<span style="color: white" id="terminal-name"></span>' +
'</div>' +
'<div id=prompt2 style="display: none">' +
prompt +
'<span style="color: white" id="terminal-description"></span>' +
'</div>' +
'<div id=prompt3 style="display: none">' +
prompt +
'<span style="color: white" id="terminal-navigation"></span>' +
'</div>' +
'<div id=prompt4 style="display: none">' +
prompt +
'</div>'

async function enterCommands() {
    document.getElementById("terminal-wrapper").innerHTML = build;
    document.getElementById("prompt1").style.display = "block";
    await typeWriter(' help -d name', 'terminal-name');
    showElement('name');
    document.getElementById("prompt2").style.display = "block";
    await typeWriter(' help -d description', 'terminal-description');
    showElement('description');
    document.getElementById("prompt3").style.display = "block";
    await typeWriter(' build -s navigation', 'terminal-navigation');
    showElement('navbar', flex=true);
    showElement('logo');
    document.getElementById("prompt4").style.display = "block";
}

async function typeWriter(text, id) {
    return new Promise((resolve) => {
        function type() {
            if (i < text.length) {
                const char = text.charAt(i);
                    document.getElementById(id).innerHTML += char;
                i++;
                setTimeout(type, speed);
            } else {
                i=0;
                resolve();
            }
        }
        type();
    });
}

function showElement(id, flex) {
    var x = document.getElementById(id);
    if (flex) {
        x.style.display = "flex";
    }
    else {
        x.style.display = "block";
    }
}
