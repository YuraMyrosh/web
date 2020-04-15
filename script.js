let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};
		let body=document.querySelector('body');
if(isMobile.any()){
		body.classList.add('touch');
		let arrow=document.querySelectorAll('.arrow');
	for(i=0; i<arrow.length; i++){
			let thisLink=arrow[i].previousElementSibling;
			let subMenu=arrow[i].nextElementSibling;
			let thisArrow=arrow[i];
			thisLink.classList.add('parent');
		arrow[i].addEventListener('click', function(){
			subMenu.classList.toggle('open');
			thisArrow.classList.toggle('active');
		});
	}
}else{
	body.classList.add('mouse');
}

function check_text_filed(){
	let text = document.getElementById("text").value;
	var count=1;
	for (var i = 0; i < text.length; i++) {
		if (text[i]==" ") {
		count++;	
		}
	}
	if (count>=20) {
		alert("Your text is so big, write less")
	}
	else {
		if(count>=4)
		mark=mark*10/7;		
	}
	maxmark=maxmark*10/7;
	re();
}
function check_select(){
let select1 = document.getElementById("Select_1").value;
let select2 = document.getElementById("Select_2").value;
let select3 = document.getElementById("Select_3").value;
let mainselect = document.getElementById("mainselect").value;
if (select1==mainselect) {
	mark+=1;
}else if(select2==mainselect){
	mark+=2;
}else {
	mark+=0;
}
maxmark+=2;
}
function check_radio(){
	let radio1= document.getElementsByName("scientist")[0].checked;
	let radio2= document.getElementsByName("scientist")[1].checked;
	let radio3= document.getElementsByName("scientist")[2].checked;
	if(radio2){
		mark+=0;
	}else if(radio1) {
		mark+=2;
	}else if(radio3){
		mark+=1;m
	}
	maxmark+=2;
}
function check_checkbox(){
	let checked1 = document.getElementsByName("discovers")[0].checked;
	let checked2 = document.getElementsByName("discovers")[1].checked;
	let checked3 = document.getElementsByName("discovers")[2].checked;
	if (checked1) {
		mark+=1;
	}
	if (checked2) {
		mark+=0;
	}
	if (checked3) {
		mark+=2;
	}
	maxmark+=3;
}
/*function for_text(){
	var text1 = document.querySelector(".common_text");
	text1.classList.remove("common_text");	
	text1.classList.add("not_common");
	text1.classList[0].background = '-1';
	text1.addEventListener("mouseout",function(){text1.classList.add("common_text"); text1.classList.remove("not_common");});
}*/
