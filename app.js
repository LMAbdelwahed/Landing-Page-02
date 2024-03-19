// toggler

document.querySelector("#openMenu").addEventListener('click', function(){
	document.querySelector("#openMenu").classList.remove("open");
	document.querySelector("#openMenu").classList.add("hide");
	document.querySelector("#hideMenu").classList.remove("hide");
	document.querySelector("#hideMenu").classList.add("open");
	document.querySelector(".nav-collapse").style.display = "flex";
});

document.querySelector("#hideMenu").addEventListener('click', function(){
	document.querySelector("#hideMenu").classList.remove("open");
	document.querySelector("#hideMenu").classList.add("hide");
	document.querySelector("#openMenu").classList.remove("hide");
	document.querySelector("#openMenu").classList.add("open");
	document.querySelector(".nav-collapse").style.display = "none";
});