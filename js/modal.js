const modalBox = document.querySelector('.modal__box');
console.log(modalBox);

function createModalMarkUp () {

	const data = `
	<div class="backdrop">
	<div class="contact__container"></div>
	<div class="contact">
		<h1 class="title --title__center">Contacts</h1>
		<ul class="contacts__list">
			<li class="contacts__item">
				<a class="contact__link" href="tel:0934209800">
				<svg class="contact__icon">
					<use href="img/svg/symbol-defs.svg#phone"></use>
				</svg>
				<p class="contact__source">phone number</p>
				<p class="contact__text"> +38093420-98-00</p>
			</a>
			</li>
			<li class="contacts__item">
				<a class="contact__link" href="mailto:voznukeroman@ukr.net">
				<svg class="contact__icon">
					<use href="img/svg/symbol-defs.svg#icon-envelop"></use>
				</svg>
				<p class="contact__source">mail</p>
				<p class="contact__text">voznukeroman@ukr.net</p>
			</li>
		</a>
			<li class="contacts__item">
				
				<a class="contact__link" target="_blank" href="https://www.linkedin.com/in/voznuke-roman/">
					<svg class="contact__icon">
						<use href="img/svg/symbol-defs.svg#linkedin"></use>
					</svg>
					<p class="contact__source">linkedIn</p>
				</a>
				
			</li>
			<li class="contacts__item">
				
				<a class="contact__link" target="_blank" href="https://github.com/VozzRoman">
				<svg class="contact__icon">
					<use href="img/svg/symbol-defs.svg#github"></use>
				</svg>
				<p class="contact__source">github</p>
			</a>
			
			</li>
		
			<button class="contact__close">
				<svg class="close__icon">
					<use href="img/svg/symbol-defs.svg#close"></use>
				</svg>
			</button>
		</ul>

			
				<div class="contact__box">
					
				</div>
	</div>
</div>
	
	`;

	
return modalBox.innerHTML = data;
}



createModalMarkUp();

const modalTechbox = document.querySelector('.modalTech__box');
console.log(modalTechbox);
function modalTechMarkUp () {
	if(modalTechbox){
		const data = `
		<div class="backdropTech">
		<div class="modalTech">
		<div class="slider">

			<div class="slide__item">
				<svg class="slide__icon">
			<use href="img/svg/symbol-defs.svg#icon-css3"></use>
				</svg>
				<p class="slide__text">CSS</p>
			</div>
			<div class="slide__item">
				<svg class="slide__icon">
			<use href="img/svg/symbol-defs.svg#icon-javascript"></use>
				</svg>
				<p class="slide__text">Java Script</p>
			</div>
			<div class="slide__item">
				<svg class="slide__icon">
			<use href="img/svg/symbol-defs.svg#icon-visualstudiocode"></use>
				</svg>
				<p class="slide__text">VsCode</p>
			</div>
			<div class="slide__item">
			<svg class="slide__icon">
		<use href="img/svg/symbol-defs.svg#icon-react"></use>
			</svg>
			<p class="slide__text">React</p>
		</div>
		<div class="slide__item">
		<svg class="slide__icon">
	<use href="img/svg/symbol-defs.svg#icon-html5"></use>
		</svg>
		<p class="slide__text">HTML</p>
	</div>
	<div class="slide__item">
	<svg class="slide__icon">
<use href="img/svg/symbol-defs.svg#icon-webpack"></use>
	</svg>
	<p class="slide__text">WebPack</p>
</div>
<div class="slide__item">
<svg class="slide__icon">
<use href="img/svg/symbol-defs.svg#icon-gulp"></use>
</svg>
<p class="slide__text">Gulp</p>
</div>
<div class="slide__item">
<svg class="slide__icon">
<use href="img/svg/symbol-defs.svg#icon-sass"></use>
</svg>
<p class="slide__text">SASS</p>
</div>
		
	</div>
			<button class="contact__close">
				<svg class="close__icon">
					<use href="img/svg/symbol-defs.svg#close"></use>
				</svg>
			</button>
	
		</div>
		
		`;
		return modalTechbox.innerHTML = data;
	}

}

modalTechMarkUp();

const backDrop = document.querySelector('.backdrop');
console.log(backDrop);
const backDropTech = document.querySelector(".backdropTech");
const contetBlur = document.querySelector(".content");
console.log(contetBlur);
// const openModal = document.querySelector('.header__list');
// console.log(openModal);

document.addEventListener('click', onClick);
// document.addEventListener('click', closeModal);
function onClick(e){
	
	if(e.target.className === "header__button"){

		backDrop.classList.add('active');
		document.body.classList.toggle('lock');
		contetBlur.classList.add('lock');
	}
	if(e.target.className === "contact__close"){

		backDrop.classList.remove('active');
		document.body.classList.remove('lock');
		contetBlur.classList.remove('lock');
	}
	if(e.target.className === "hi__bth"){
		if(backDropTech){
			backDropTech.classList.add('active');
			document.body.classList.toggle('lock');
			contetBlur.classList.add('lock');
		}
	
	}
	if(e.target.className === "contact__close"){
		console.log("close");
		if(backDropTech){
			backDropTech.classList.remove('active');
			document.body.classList.remove('lock');
			contetBlur.classList.remove('lock');
		}

	}


}

