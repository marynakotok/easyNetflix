var modal = $('#myModal');
function modalBox()
{
	modal.css("display", "block");

}

$("#form").submit(function(event){
    //alert(document.cookie);
    var email = document.getElementById("emailStart").value;
	var password = document.getElementById("passwordStart").value;
    var emailCookie=getCookie("_email");
    var passwordCookie = getCookie("_password");
			if (emailCookie === email) 
		    {
		    	if(passwordCookie === password)
		    	{
		        modal.css("display", "none");
		        document.getElementById("NameUser").innerHTML=getCookie("_username");
                $("#PhotoUser").attr("src", getCookie("_text"));
			    }
			    else alert("Password is not vali")
			} 
			else 
				{
					window.open("account.html");
					$("#emailStart").val=email;
	                $("#passwordStart").val=password;
				}
	event.preventDefault();

});

function setCookie(cname,cvalue,exdays) 
{
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) 
{
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}




var music = new Audio("../ImagesMaterial/videos/yes.wav");
var i=0;
var j=0;

$("#like img").click(function()
{
	i++;
	$("#like h2").html(i+" likes");
	music.play();
	
});

$("#sharing img").click(function()
{
	j++;
	$("#sharing h2").html(j+ " sharing");
	music.play();
});

var visible1=false;
var visible2=false;
var visible3=false;


$(".span1 img").click(function()
{
	if (visible1===false)
{
	//$(".text1").removeAttr("hidden");
	//$(".text1").show();
	$(".text1").fadeIn();
	//alert("1");
	visible1=true;
}
else
{
	//$(".text1").attr("hidden","hidden");
	$(".text1").fadeOut("slow");
	//$(".text1").hide();
	visible1=false;
}

});

$(".span2 img").click(function()
{
	if (visible2===false)
{
	//$(".text2").removeAttr("hidden");
	//$(".text2").show();
	$(".text2").fadeIn();
	//alert("1");
	visible2=true;
}
else
{
	//$(".text2").attr("hidden","hidden");
	//$(".text2").hide();
	$(".text2").fadeOut("slow");
	visible2=false;
}

});

$(".span3 img").click(function()
{
	if (visible3===false)
{
	//$(".text3").removeAttr("hidden");
	//$(".text3").show();
	$(".text3").fadeIn();
	//alert("1");
	visible3=true;
}
else
{
	$(".text3").attr("hidden","hidden");
	//$(".text3").hide();
	visible3=false;
	$(".text3").fadeOut("slow");
}

});
//WoRKING IN cHROME
var temp1;
var tempText;
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev, text) {
    ev.dataTransfer.setData("id", ev.target.id);
    ev.dataTransfer.setData("textId", text);
}

function drop(ev, text) {
    ev.preventDefault();
    var idFrom = ev.dataTransfer.getData("id");
    var elementFrom = document.getElementById(idFrom);
    var element = document.getElementById(ev.target.id);
    var temp1 = document.getElementById(ev.target.id).src;
	element.src = elementFrom.src;
	elementFrom.src=temp1;

	var textFrom = ev.dataTransfer.getData("textId");
	var elementTextFrom = document.getElementById(textFrom);
	var elementText = document.getElementById(text);
	tempText=elementText.innerHTML;
	document.getElementById(text).innerHTML = elementTextFrom.innerHTML;
	document.getElementById(textFrom).innerHTML = tempText;
	

}













