// window.setInterval(load_unicode, 1000);
// var curr_symbol_pos = -1;
// function load_unicode() {
//     const unicode_objects =
//     [
//         '| 0%',
//         '|| 5%',
//         '|||||| 25%',
//         '||||||||||||||||||||| 100%'
//     ]
//     curr_symbol_pos = (curr_symbol_pos+1) % (unicode_objects.length);

//     document.getElementById('unicode').innerHTML = unicode_objects[curr_symbol_pos];
// }

// used to brighten background image when user hovers over any h1 tag
const h1_array = document.getElementsByTagName('h1');
for (var i=0; i < h1_array.length; i++) {
    h1_array[i].addEventListener('mouseout', brightenImage);
    h1_array[i].addEventListener('mouseover', lightenImage);
}

function brightenImage() {
    about_section = document.getElementById('about');
    document.getElementById("about").style.filter = "none";
}

function lightenImage() {
    about_section = document.getElementById('about');
    document.getElementById("about").style.filter = "brightness(80%)";
}
