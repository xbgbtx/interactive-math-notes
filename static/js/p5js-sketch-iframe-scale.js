const unscaled_sketch_size = 512;

window.addEventListener('resize', 
    e => resize_all_sketches (calc_sketch_width()),
    true);
document.addEventListener('DOMContentLoaded',
    e => resize_all_sketches(calc_sketch_width()),
    false);

function calc_sketch_width ()
{
    const main = document.getElementsByTagName("main")[0];
    const w = main.offsetWidth;

    return Math.min ( w, unscaled_sketch_size );
}

function resize_all_sketches (size)
{
    const sketch_divs = document.getElementsByClassName("p5js-sketch");

    for ( const d of sketch_divs )
        resize_sketch_div ( d, size );
}

function resize_sketch_div (sketch_div, new_width)
{
    const scale = new_width / unscaled_sketch_size;
    const sketch_iframe = sketch_div.getElementsByTagName ( "iframe" )[0];

    console.log(`${new_width}, ${scale}`);
    sketch_iframe.style.scale = scale;
}

