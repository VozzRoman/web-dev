
//------------------burger--------------------//
$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
		

	});
});


//--------------SlickSlider-------------//
const sliderEl = document.querySelector('.slider');
console.log(sliderEl);
$(document).ready(function(){
	if(sliderEl){
		$('.slider').slick({
			slidesToShow: 3,
			centerPadding: "20px",
			centerMode: true,
			responsive:[
				{
					breakpoint: 750,
					settings: {
						slidesToShow: 1,
						centerMode: true,
					 }
					
				}
			]
		
		
		});
	}

 });
const logoSlider = document.querySelector('.log-slider__list');
console.log(logoSlider);
 $(document).ready(function(){
	if(logoSlider){
		$('.log-slider__list').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			infinite: true,
			// centerPadding: "20px",
			centerMode: true,
			responsive:[
				{
					breakpoint: 750,
					settings: {
						slidesToShow: 1,
						// centerMode: true,
					 }
					
				}
			]
		
		
		});
	}

 });



//hideHeader-----------
const headerEl = document.querySelector('.header');
let lastScroll = 0;
const defaultOffset = 200;
let scrollPsition = () => window.scrollY || window.pageXOffset;
const containHide = () => headerEl.classList.contains('active');

window.addEventListener('scroll', onScrollHide);

function onScrollHide (){
	if(scrollPsition() > lastScroll && !containHide() && scrollPsition() > defaultOffset){
		headerEl.classList.add('active');
		console.log('down');
	} else if(scrollPsition() < lastScroll && containHide()) {
		headerEl.classList.remove('active');
		console.log('up');
	}
	lastScroll = scrollPsition();
	
	
}
