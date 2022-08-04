window.setInterval(load_unicode, 1000);

var curr_symbol_pos = -1;

function load_unicode() {
    const unicode_objects =
    [
        '| 0%',
        '|| 5%',
        '|||||| 25%',
        '||||||||||||||||||||| 100%'
    ]
    curr_symbol_pos = (curr_symbol_pos+1) % (unicode_objects.length);

    document.getElementById('unicode').innerHTML = unicode_objects[curr_symbol_pos];
}