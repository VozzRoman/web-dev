
//------------------burger--------------------//
$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
		

	});
});

//-------------------ibg---------------------//
function ibg() {
	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}
ibg();

//------------------slider---------------//
// const galleryEl = document.getElementById('gallery');
// console.log(galleryEl);
// window.addEventListener('load', function () {
// 	if(galleryEl){
// 		baguetteBox.run('.gallery');
// 	}
// 	return;
// });

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


//Modal-----
// const backDrop = document.querySelector('.backdrop');
// console.log(backDrop);
// // const openModal = document.querySelector('.header__list');
// // console.log(openModal);

// document.addEventListener('click', onClick);
// // document.addEventListener('click', closeModal);
// function onClick(e){
// 	if(e.target.nodeName === "BUTTON"){
// 		backDrop.classList.toggle('active');
// 		document.body.classList.toggle('lock');
// 	}
// }
//hideHeader-----------
const headerEl = document.querySelector('.header');
let lastScroll = 0;
const defaultOffset = 200;
let scrollPsition = () => window.scrollY || window.pageXOffset;
const containHide = () => headerEl.classList.contains('active');

window.addEventListener('scroll', onScrollHide);

function onScrollHide (){
	if(scrollPsition() > lastScroll && !containHide()){
		headerEl.classList.add('active');
		console.log('down');
	} else if(scrollPsition() < lastScroll && containHide()) {
		headerEl.classList.remove('active');
		console.log('up');
	}
	lastScroll = scrollPsition();
	
	
}
