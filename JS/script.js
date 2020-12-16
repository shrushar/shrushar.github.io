
AOS.init({
	// Global settings:
	disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
	startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
	initClassName: 'aos-init', // class applied after initialization
	animatedClassName: 'aos-animate', // class applied on animation
	useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
	disableMutationObserver: false, // disables automatic mutations' detections (advanced)
	debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
	throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
	
  
	// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
	offset: 120, // offset (in px) from the original trigger point
	delay: 0, // values from 0 to 3000, with step 50ms
	duration: 400, // values from 0 to 3000, with step 50ms
	easing: 'ease', // default easing for AOS animations
	once: false, // whether animation should happen only once - while scrolling down
	mirror: false, // whether elements should animate out while scrolling past them
	anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });
const animItems=document.querySelectorAll('._anim-items');
if(animItems.length>0) //функция работающая по событию скролла для анимации заголовков при пролистывании,
//в дальнейшем для остальных элементов будем пользоваться библиотекой AOS 
{
	window.addEventListener('scroll',animOnScroll);
	function animOnScroll(){
		for(let index=0;index<animItems.length;index++)
		{
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;


			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if(animItemHeight > window.innerHeight){
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
				animItem.classList.add('_active');
			} else{
				if(!animItem.classList.contains('_anim-hide')){
					animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset(el){
		const rect=el.getBoundingClientRect(),
		scrollLeft=window.pageXOffset || document.documentElement.scrollLeft,
		scrollTop=window.pageYOffset||document.documentElement.scrollTop;
		return{top:rect.top + scrollTop, left: rect.left + scrollLeft}

	}
	animOnScroll();
}
//анимация историй
var story=document.querySelectorAll('.story_background');
var buttons=document.querySelectorAll('.story_button');
buttons.forEach((buttons, index) => {
	buttons.addEventListener("click",e=>{
		
		anime({
			targets: buttons,
			autoplay: true,
			opacity: [
			  { value: 0.5, easing: "easeOutSine", duration: 600 },
			  { value: 1, easing: "easeInOutQuad", duration: 900 }
			],
			filter: [
			  { value: "blur(5px) grayscale(100%)", easing: "easeOutSine", duration: 700 },
			  { value: "blur(0px) grayscale(50%)", easing: "easeInOutQuad", duration: 1000 }
			],
			scale: [
			  { value: 0.3, easing: "easeOutSine", duration: 600 },
			  { value: 1, easing: "easeInOutQuad", duration: 1100 }
			],
			delay: anime.stagger(200, { grid: [5, 5], from: index })
		  });
	});
	buttons.addEventListener("scroll",k=>{
		anime({
			targets: k,
			scale: [{value: 1}, {value: 1.4}, {value: 1, delay: 250}],
			rotateY: {value: '+=180', delay: 200},
			easing: 'easeInOutSine',
			duration: 400,
		  });

});
});
function changeBackground(s){
	var imageUrl = ["url(images/theRoom.jpg)",
	 "url(images/Street_sub.jpg)",
	 "url(images/3girls.jpg)",
	 "url(images/IMG_9789.jpg)"
	];
	var stories_tell=document.getElementsByClassName("story_tell");
	anime({
		targets:[story, stories_tell],
		autoplay:true,
		opacity:[
			{ value: 0, easing: "easeOutSine", duration: 600 },
			{ value: 1, easing: "easeOutSine", duration: 600 }
		]
		
	});
	function f(){
		for (var i = 0; i < story.length; i++) {
			elements[i].style.backgroundImage=imageUrl[s];
			stories_tell[i].innerHTML=stories[s].textContent.toString();
		}  
	}
	setTimeout(f,600);
	
}
//слайдер персонажей
var slideIndex=1;
function plusSlides(n){
	animateInnerObjects();
	setTimeout(showSlides,1400,slideIndex+=n);
}
function currentSlide(n){
	animateInnerObjects();
	setTimeout(showSlides,1400,slideIndex=n);
}

function showSlides(n){
	var i;
	var slides =document.getElementsByClassName("slider");
	var dots =document.getElementsByClassName("dot");
	if(n>slides.length){
		slideIndex=1;
	}
	if(n<1){
		slideIndex=slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
}
const mediaQuery=window.matchMedia('(max-width:770px)');
function handleTabletChange(e){
	if(e.matches){
		var characterInfo=document.getElementsByClassName("character_info");
		characterInfo.style.width="250px";
	}
}
//функция анимаций элементов слайдера
function animateInnerObjects(){
	var characterBackground =document.getElementsByClassName("character_background");
	var characterBody=document.getElementsByClassName("character_body");
	var characterName=document.getElementsByClassName("nameContainer");
	var characterInfo=document.getElementsByClassName("character_info");

	var fadeLeftBackground=anime({
		targets: characterBackground,
		
		opacity:[
			{ value: 0, easing: "easeOutSine", duration: 800, },
			{ value: 1, easing: "easeOutSine", duration: 600,delay:1000 }
		],
		translateX:[
			{value: -450, easing: "easeInOutSine", duration:1400,},
			{value: 0, easing: "easeInOutSine", duration:800, delay:600 }
		],
		autoplay:true
	});
	
	var fadeRightCharacter=anime({
		targets: characterBody,
		
		opacity:[
			{ value: 0, easing: "easeOutSine", duration: 800,delay:500 },
			{ value: 1, easing: "easeOutSine", duration: 800 }

		],
		translateX:[
			{value: -250, easing: "easeInOutSine", duration:800,delay:600},
			{value: 0, easing: "easeInOutSine", duration:1400}
		],
		autoplay:true

	});
	
	var rollCharacterName=anime({
		autoplay:true,
		targets:characterName,
		width:[
			{value:'0%', duration:800,delay:200},
			{value:'70%',duration:800,delay:1000}
		],
		easing: 'easeInOutQuad'
	});
	var fadeCharacterInfo=anime(
		{
			autoplay:true,
			targets:characterInfo,
			opacity:[
				{ value: 0, easing: "easeOutSine", duration: 500, },
				{ value: 1, easing: "easeOutSine", duration: 500,delay:1100 }
			],
		}
	);
}
//слайдер выбора пакетов
showSlides(slideIndex);
function wordAnimation(){
	var slides = document.getElementsByClassName("word_slider");
	var slidePacks=anime({
		targets:slides,
		opacity:[
			{value:0,duration:200},
			{value:1,duration:200, delay:300}
		],
		translateX:[
			{ value:-50,easing: "easeOutSine",duration:250},
			{ value: 50,easing: "easeOutSine",duration:250},
			{ value: 0,easing: "easeOutSine",duration:250},
		]
	});

}

function plusSlidesWord(n) {
	wordAnimation();
	setTimeout(showSlidesWord,400,slideIndex += n);
}
  // Thumbnail image controls
function currentSlideWord(n) {
	showSlidesWord(slideIndex = n);
}
function showSlidesWord(n) {
	
	var i;
	var slides = document.getElementsByClassName("word_slider");
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex-1].style.display = "block";
	lineProduct(slideIndex-1);
} 
  function lineProduct(n){
	var products=document.querySelectorAll('.product');
	if(n==0){
		products[1].style.textDecoration="none";
		products[2].style.textDecoration="none";
		products[3].style.textDecoration="none";
	}
	  if(n==1){
		  products[1].style.textDecoration="underline #a91a16";
		  products[2].style.textDecoration="underline #a91a16";
		  products[3].style.textDecoration="none";
	  }
	  if(n==2){
		products[1].style.textDecoration="underline #a91a16";
		products[2].style.textDecoration="underline #a91a16";
		products[3].style.textDecoration="underline #a91a16";
	}
	
  }
  //анимация появления формы заказа
  var bueyrFormBackground=document.getElementsByClassName("buyer_form_background");
  var buyerFormContainer=document.getElementsByClassName("buyer_form_container");
  function fadeForm(){
	anime({
		targets:bueyrFormBackground,
		opacity:[
			{value:1},
			{value:0,duration:800}
		]
	});
	function fade(){
	  for(var i=0;i<bueyrFormBackground.length;i++){
		  bueyrFormBackground[i].style.display="none";
		  buyerFormContainer[i].style.display="none";
	  }
	}
	setTimeout(fade,600);
  }
  //события для выхода из формы
  document.onkeydown=function(evt){
	  evt=evt||window.Event;
	  var isEscape=false;
	  if("key" in evt){
		  isEscape=(evt.key==="Escape"||evt.key==="Esc");
	  }else{
		  isEscape=(evt.keyCode===27);
	  }
	  if(isEscape){
		 fadeForm();
	  }
	}
	document.querySelector('.buyer_form_background').addEventListener("click",()=>{
		fadeForm();
	})
  function ShowBuyerForm(){
	  
	  var showBackground=anime({
		  targets:bueyrFormBackground,
		  opacity:[
			  {value:0},
			  {value:1, duration:1400}
		  ]
	  });
	  var showForm=anime({
		  targets:buyerFormContainer,
		  opacity:[
			{value:0},
			{value:1, duration:300}
		],
		easing:"easeInSine"
	  });
	  for(var i=0;i<bueyrFormBackground.length;i++){
		  bueyrFormBackground[i].style.display="block";
		  buyerFormContainer[i].style.display="flex";
	  }
  }
  //функция создания капель
function createDrops(){
	  const section=document.querySelector('.section_for_drops');
	  const drop=document.createElement('span');

	  var size=Math.random()*20;
	  drop.style.width=10+size+'px';
	  drop.style.height=15+size+'px';

	  drop.style.top=Math.random()+'px';
	  drop.style.left= Math.random()*innerWidth+'px';

	  section.appendChild(drop);
	  setTimeout(() => {
		  drop.remove();
	  }, 15000);

  }
setInterval(createDrops, 1500);

