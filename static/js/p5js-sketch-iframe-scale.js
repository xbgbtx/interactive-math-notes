const unscaled_sketch_size = 512;

window.addEventListener('resize', 
    e => resize_all_sketches (),
    true);
document.addEventListener('DOMContentLoaded',
    e => resize_all_sketches(),
    false);

function calc_sketch_width (sketch_div)
{
    const w = sketch_div.offsetWidth;

    return Math.min ( w, unscaled_sketch_size );
}

function resize_all_sketches (size)
{
    const sketch_divs = document.getElementsByClassName("p5js-sketch");

    for ( const d of sketch_divs )
        resize_sketch_div ( d, calc_sketch_width(d) );
}

function resize_sketch_div (sketch_div, new_width)
{
    const scale = new_width / unscaled_sketch_size;
    const sketch_iframe = sketch_div.getElementsByTagName ( "iframe" )[0];

    sketch_iframe.style.transformOrigin = "0 0";
    sketch_iframe.style.scale = scale;
}

