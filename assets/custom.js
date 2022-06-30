/*-----------------------------------------------------------------------------/
/ Custom Theme JS
/-----------------------------------------------------------------------------*/

// Insert any custom theme js here
document.addEventListener("DOMContentLoaded", () => {
	color_picker();
  });

function color_picker() {
	let color = document.getElementById('Color');
	let product_bg = document.getElementsByClassName('featured-product__media-column');
	let value = color.value;

	product_bg.style.backgroundColor = value;

	color.addEventListener("change", function() {
		product_bg.style.backgroundColor = value;
	});
}