// var top=0;
let header=document.getElementById("header");
let Serch=document.getElementsByClassName("search-box")[0];
let onotice=document.getElementsByClassName("notice")[0];
let obefore=window.getComputedStyle(onotice,":before");
window.onscroll=function(){
	let top=document.body.scrollTop||document.documentElement.scrollTop;
	if(top>=20){
		header.style.backgroundColor="white";
		Serch.style.backgroundColor="#ececed";
		onotice.style.color="#222";
		obefore.style.backgroundSize="104px 326px"
	}else{
		header.style="";
		Serch.style="";
		onotice.style="";
		obefore.style="";
	}
}