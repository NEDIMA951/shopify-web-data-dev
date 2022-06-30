/*-----------------------------------------------------------------------------/
/ Custom Theme JS
/-----------------------------------------------------------------------------*/

// Insert any custom theme js here
document.addEventListener("DOMContentLoaded", () => {
	color_picker();
});

function color_picker() {
	let color = document.getElementById('Color');
	let product_bg = document.querySelector('.featured-product__wrapper');
	// let product_bg = document.querySelector('.featured-product__media-column');

	if ( typeof color !== 'undefined' && typeof product_bg !== 'undefined' ) {
		let color_value = color.value;
		product_bg.style.background = color_value;

		color.addEventListener("change", function() {
			let color_value = color.value;
			product_bg.style.backgroundColor = color_value;
		});
	}
}