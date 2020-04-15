var mode = true;
function Load(){
			if (mode) {
				White();
			}
			else {
				Black();
			}
			
	}
function Black(){	
	mode=false;
	document.firstElementChild.lastElementChild.classList.add("_dark");

	var menu= document.querySelector(".menu");
	menu.classList.add("menu_dark");
	menu.classList.remove("menu");
	

	var menu_link = document.querySelector(".menu_link");
	menu_link.classList.add("menu_link_dark");
	menu_link.classList.remove("menu_link");

	var stupid_link = document.getElementById(1);
	stupid_link.classList.add("menu_link_dark");
	stupid_link.classList.remove("menu_link");
	
	
	var menu_list = document.querySelector(".menu_list");
	menu_list.classList.add("menu_list_dark");
	menu_list.classList.add("menu_list_dark");

	var sub_menu = document.querySelectorAll(".sub-menu");
	
	for (var i = 0; i < sub_menu.length; i++) {
		sub_menu[i].classList.add("sub-menu_dark");
		sub_menu[i].classList.remove("sud-menu");
	}

	var sub_menu_link = document.querySelectorAll(".sub-menu_link");
		for (var i = 0; i < sub_menu_link.length; i++) {	
		sub_menu_link[i].classList.add("sub-menu_link_dark");
		sub_menu_link[i].classList.remove("sub-menu_link");
	}


	var titel = document.querySelectorAll(".title");
		for (var i = 0; i < titel.length ; i++) {	
		titel[i].classList.add("title_dark");
		titel[i].classList.remove("title");
	}

	var common_text = document.querySelectorAll(".common_text");
		for (var i = 0; i < common_text.length; i++) {	
		common_text[i].classList.add("common_text_dark");
		common_text[i].classList.remove("common_text");
	}

	var infom_after_main = document.querySelectorAll(".infom_after_main");
	for (var i = 0; i < infom_after_main.length; i++) {
		infom_after_main[i].classList.add("infom_after_main_dark");
		infom_after_main[i].classList.remove("infom_after_main");
	}

	var common_text_after = document.querySelector(".common_text_after");
	common_text_after.classList.add("common_text_after_dark");
	common_text_after.classList.remove("common_text_after");

	var list = document.querySelectorAll(".list");
	for (var i = 0; i < list.length; i++) {
		list[i].classList.add("list_dark");
		list[i].classList.remove("list");
	}
	var photo = document.querySelectorAll(".photo");
	for (var i = 0; i < photo.length; i++) {
		photo[i].classList.add("photo_dark");
		photo[i].classList.remove("photo");
	}

	var table = document.querySelectorAll(".table");
	for (var i = 0; i < table.length; i++) {
		table[i].classList.add("table_dark");
		table[i].classList.remove("table");
	}

	var arrow = document.querySelector(".arrow");
	arrow.classList.add("arrow_dark");


	var but1 = document.querySelector(".button_style");
	var but2 = document.querySelector(".button_style_dark");
	but1.classList.add("hidden_but");
	but2.classList.remove("hidden_but");
}

function White(){	
	mode = true;
	document.firstElementChild.lastElementChild.classList.remove("_dark");

	var menu= document.querySelector(".menu_dark");
	menu.classList.remove("menu_dark");
	menu.classList.add("menu");
	

	var menu_link = document.querySelector(".menu_link_dark");
	menu_link.classList.remove("menu_link_dark");
	menu_link.classList.add("menu_link");

	var stupid_link = document.getElementById(1);
	stupid_link.classList.remove("menu_link_dark");
	stupid_link.classList.add("menu_link");
	
	
	var menu_list = document.querySelector(".menu_list_dark");
	menu_list.classList.remove("menu_list_dark");

	var sub_menu = document.querySelectorAll(".sub-menu_dark");
	
	for (var i = 0; i < sub_menu.length; i++) {
		sub_menu[i].classList.remove("sub-menu_dark");
		sub_menu[i].classList.add("sud-menu");
	}

	var sub_menu_link = document.querySelectorAll(".sub-menu_link_dark");
		for (var i = 0; i < sub_menu_link.length; i++) {	
		sub_menu_link[i].classList.remove("sub-menu_link_dark");
		sub_menu_link[i].classList.add("sub-menu_link");
	}


	var titel = document.querySelectorAll(".title_dark");
		for (var i = 0; i < titel.length ; i++) {	
		titel[i].classList.remove("title_dark");
		titel[i].classList.add("title");
	}

	var common_text = document.querySelectorAll(".common_text_dark");
		for (var i = 0; i < common_text.length; i++) {	
		common_text[i].classList.remove("common_text_dark");
		common_text[i].classList.add("common_text");
	}

	var infom_after_main = document.querySelectorAll(".infom_after_main_dark");
	for (var i = 0; i < infom_after_main.length; i++) {
		infom_after_main[i].classList.remove("infom_after_main_dark");
		infom_after_main[i].classList.add("infom_after_main");
	}

	var common_text_after = document.querySelector(".common_text_after_dark");
	common_text_after.classList.remove("common_text_after_dark");
	common_text_after.classList.add("common_text_after");

	var list = document.querySelectorAll(".list_dark");
	for (var i = 0; i < list.length; i++) {
		list[i].classList.remove("list_dark");
		list[i].classList.add("list");
	}
	var photo = document.querySelectorAll(".photo_dark");
	for (var i = 0; i < photo.length; i++) {
		photo[i].classList.remove("photo_dark");
		photo[i].classList.add("photo");
	}

	var table = document.querySelectorAll(".table_dark");
	for (var i = 0; i < table.length; i++) {
		table[i].classList.remove("table_dark");
		table[i].classList.add("table");
	}

	var arrow = document.querySelector(".arrow");
	arrow.classList.remove("arrow_dark");

	var but1 = document.querySelector(".button_style");
	var but2 = document.querySelector(".button_style_dark");
	but1.classList.remove("hidden_but");
	but2.classList.add("hidden_but");
}