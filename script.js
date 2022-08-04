window.setInterval(load_dots, 1000);

var num_dots = 0;
function load_dots() {
    num_dots = (num_dots + 1) % 4;
    var new_text = 'Website Under Construction' + '.'.repeat(num_dots);
    document.getElementById('status').innerHTML = new_text;
}

load_dots();