var menu=[];
menu[0]=document.getElementById("menu1");
menu[1]=document.getElementById("menu2");
menu[2]=document.getElementById("menu3");
menu[3]=document.getElementById("menu4");
menu[4]=document.getElementById("menu5");
menu_a=[];
menu_a[0]=document.getElementById("menu1-a");
menu_a[1]=document.getElementById("menu2-a");
menu_a[2]=document.getElementById("menu3-a");
menu_a[3]=document.getElementById("menu4-a");
menu_a[4]=document.getElementById("menu5-a");
var content=[];
content[0]=document.getElementById("header-ab");
content[1]=document.getElementById("header-ab-about");
content[2]=document.getElementById("header-ab-ex");
content[3]=document.getElementById("header-ab-skill");
content[4]=document.getElementById("header-ab-awards");
content[5]=document.getElementById("header-ab-contact");

function hien(element, paragraphId,paragraphId_2){
	for (var i = 0; i < menu.length; i++) {
		if(menu[i].style.transform = "scale(1.3)"){
			menu[i].style.transform = "scale(1)";
			menu[i].style.background="none";
		}
		if(menu_a[i].style.color="white"){
			menu_a[i].style.color="rgba(255, 255, 255,0.5 )";
		}
	}
	for (var i = 0; i < content.length; i++) {
		if(content[i].style.display="block"){
			content[i].style.display="none";
		}
	}
	element.style.transform = "scale(1.3)"; 
	element.style.background="rgba(70, 187, 280,0.5 )"; 
	document.getElementById(paragraphId).style.color="white";
	document.getElementById(paragraphId_2).style.display="block"
}
function hienbg(paragraphId){
	document.getElementById(paragraphId).style.display="block";	
	for (var i = 0; i < menu.length; i++) {
		if(menu[i].transform = "scale(1.3)"){
			menu[i].style.transform = "scale(1)";
			menu[i].style.background="none";
		}
				if(menu_a[i].style.color="white"){
			menu_a[i].style.color="rgba(255, 255, 255,0.5 )";
		}
	}
	for (var i = 1; i < content.length; i++) {
		if(content[i].style.display="block"){
			content[i].style.display="none";
		}
	}
}
function inpic(){
document.getElementById("hide").style.transform= "translateY(300px)";
document.getElementById("hide").style.transition= "1s";
document.getElementById("hide").style.filter= "blur(10px)";
document.getElementById("hide").style.opacity= "0";

}
function hidepic(){
document.getElementById("hide").style.transform= "translateY(0)";
document.getElementById("hide").style.transition= "1s";
document.getElementById("hide").style.filter= "none";
document.getElementById("hide").style.opacity= "1";
}



	setTimeout(function(){menu[0].style.display="block"}, 2300);
	setTimeout(function(){menu[1].style.display="block"}, 2800);
	setTimeout(function(){menu[2].style.display="block"}, 3300);
	setTimeout(function(){menu[3].style.display="block"}, 3800);
	setTimeout(function(){menu[4].style.display="block"}, 4300);
	setTimeout(function(){document.getElementById("pic_1").style.display="block"}, 2000);
	setTimeout(function(){document.getElementById("content").style.display="block"}, 4300);
	setTimeout(function(){document.getElementById("roll").style.display="block"}, 1500);
	setTimeout(function(){document.getElementById("appear_border_avatar").style.display="block"}, 1500);
	







