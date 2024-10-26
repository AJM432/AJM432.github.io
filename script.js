var i = 0;

var prompt = 
'<span>[alvin@Archer ~]$</span>'

var build = 
'<div id=prompt0 style="display: none">' +
prompt +
'<span style="color: white" id="terminal-install"></span>' +
'</div>' +
'<div id=prompt1 style="display: none">' +
'<span style="color: white; overflow-wrap: break-word;" id="terminal-success-1">(1/2) installing build </span>' +
'</div>' +
'<div id=prompt2 style="display: none">' +
'<span style="color: white; overflow-wrap: break-word;" id="terminal-success-2">(2/2) installing help </span>' +
'</div>' +
'<div id=prompt3 style="display: none">' +
prompt +
'<span style="color: white" id="terminal-name"></span>' +
'</div>' +
'<div id=prompt4 style="display: none">' +
prompt +
'<span style="color: white" id="terminal-description"></span>' +
'</div>' +
'<div id=prompt5 style="display: none">' +
prompt +
'<span style="color: white" id="terminal-navigation"></span>' +
'</div>' +
'<div id=prompt6 style="display: none">' +
prompt +
'</div>'

const delay = ms => new Promise(res => setTimeout(res, ms));

async function enterCommands() {
    document.getElementById("terminal-wrapper").innerHTML = build;
    document.getElementById("prompt0").style.display = "block";
    await typeWriter(' sudo pacman -S build help', 'terminal-install');

    document.getElementById("prompt1").style.display = "block";
    await typeWriter(' [#################################################] 100%', 'terminal-success-1', speed=20);
    document.getElementById("prompt2").style.display = "block";
    await typeWriter(' [#################################################] 100%', 'terminal-success-2', speed=10);


    document.getElementById("prompt3").style.display = "block";
    await typeWriter(' help -d name', 'terminal-name');
    await showElement('name', 0);

    document.getElementById("prompt4").style.display = "block";
    await typeWriter(' help -d description', 'terminal-description');
    await showElement('description', 0);

    document.getElementById("prompt5").style.display = "block";
    await typeWriter(' build -s navigation', 'terminal-navigation');
    showElement('navbar', 0);

    await showElement('logo', 0);
    document.getElementById("prompt6").style.display = "block";
}

async function typeWriter(text, id, speed=60) {
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

async function showElement (id, t_delay) {
	await delay(t_delay);
    var x = document.getElementById(id);
    // toggle show attribute
    if (x.classList.contains("show")) {
        x.classList.remove("show");
      } 
    else {
    x.classList.add("show");
    }
}

async function delayedShowBlock(block_id, t_delay) {
	await delay(t_delay);
    document.getElementById(block_id).style.display = "block";
}
