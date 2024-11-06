const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let index=0
showslide()
const arrow_left = document.querySelector(".arrow_left")
arrow_left.addEventListener("click", function(){
	if(index===0){
		index=3
	 } else {
		index--
	 }

	 showslide()
	 dots()
})
const arrow_right = document.querySelector(".arrow_right")
arrow_right.addEventListener("click", function(){
if(index===3){
	index=0
 } else {
	index++
 }
showslide()
dots()
})
function showslide(){
	const curentslide=slides[index]
	const bannerimg=document.querySelector(".banner-img")
	bannerimg.src="./assets/images/slideshow/"+curentslide.image
	const bannertext=document.querySelector("#banner p")
	bannertext.innerHTML=curentslide.tagLine
	
}
function dots(){
	const dots=document.querySelector(".dots")
	dots.innerHTML=""
	let compteur=0
	for (const slide of slides){
		const dot=document.createElement("div")
		dot.classList.add("dot")
		
		if (index===compteur){
			dot.classList.add("dot_selected")
			
		}
		dots.append(dot)
		compteur++
	}
}
dots()

