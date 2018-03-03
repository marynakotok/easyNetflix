var modal = $('#myModal');
var modalChange= $("#modalChange");
var span = document.getElementsByClassName("close")[0];
var userKnown = false;
function modalBox()
{
	modal.css("display", "block");
}
span.onclick = function() {
    modalChange.css("display", "none");
}

$("#form").submit(function(event)
{
	var email = document.getElementById("emailStart").value;
	var password = document.getElementById("passwordStart").value;
	 		var emailCookie=getCookie("_email");
	 		var passwordCookie = getCookie("_password");
			if (emailCookie === email ) 
		    {
		    	if(passwordCookie === password)
		    	{
			        modal.css("display", "none");
			        document.getElementById("email").value=getCookie("_email");
				    document.getElementById("password").value=getCookie("_password");
				    document.getElementById("username").value=getCookie("_username");
				    document.getElementById("language").value=getCookie("_language");
				    
				    document.getElementById("name").value=getCookie("_name");
				    document.getElementById("data").value=getCookie("_data");
				    document.getElementById("text").value=getCookie("_text"); //photo
				    document.getElementById("adress").value=getCookie("_adress");
				    
				    document.getElementById("pay").value=getCookie("_pay");
				    document.getElementById("credit").value=getCookie("_credit");
				    document.getElementById("valid").value=getCookie("_valid");
				    document.getElementById("code").value=getCookie("_code");

				    document.getElementById("holder").value=getCookie("_holder");
				    document.getElementById("account").value=getCookie("_account");
				    document.getElementById("bank").value=getCookie("_bank");

				    document.getElementById("NameUser").innerHTML=getCookie("_username");
                    $("#PhotoUser").attr("src", getCookie("_text"));
                   

                    userKnown=true;
		    	}
		    	else 
						{
							alert("Password is not valid! Sorry.");
						    modal.css("display", "block");
						}			    	      
	        } 
		else 
	        {
                    modal.css("display", "none");
				    document.getElementById("username").value="";
				    $('#language').val("");
				    //document.getElementById("language").value="";
				    
				    document.getElementById("name").value="";
				    document.getElementById("data").value="";
				    document.getElementById("text").value=""; //photo
				    document.getElementById("adress").value="";
				    
				    $('#pay').val("");
				    //document.getElementById("pay").value=;
				    document.getElementById("credit").value="";
				    document.getElementById("valid").value="";
				    document.getElementById("code").value="";

				    document.getElementById("holder").value="";
				    document.getElementById("account").value="";
				    document.getElementById("bank").value="";
				//modal.css("display", "none");  
				alert("Enter your private information, please!!!");
				document.getElementById("email").value=email;
				document.getElementById("password").value=password;
			}
		event.preventDefault(); //dont refresh
});


$("#information").submit(function()
{
	var allChanges = "";
	var count=0;

				var email = document.getElementById("email").value;
			    var password= document.getElementById("password").value;
	            var username =document.getElementById("username").value;
			    var language = document.getElementById("language").value;
			    
			    var name = document.getElementById("name").value;
			    var data = document.getElementById("data").value;
			    var text = document.getElementById("text").value;
			    var adress = document.getElementById("adress").value;
			    
			    var pay = document.getElementById("pay").value;
			    var credit = document.getElementById("credit").value;
			    var valid = document.getElementById("valid").value;
			    var code = document.getElementById("code").value;

			    var holder =document.getElementById("holder").value;
			    var account = document.getElementById("account").value;
			    var bank = document.getElementById("bank").value;

//Cookie has already these data

			    	var emailLast = getCookie("_email");
				    var passwordLast = getCookie("_password");
				    var usernameLast = getCookie("_username");
				    var languageLast = getCookie("_language");
				    
				    var nameLast = getCookie("_name");
				    var dataLast = getCookie("_data");
				    var textLast = getCookie("_text"); //photo
				    var adressLast = getCookie("_adress");
				    
				    var payLast = getCookie("_pay");
				    var creditLast = getCookie("_credit");
				    var validLast = getCookie("_valid");
				    var codeLast = getCookie("_code");

				    var holderLast = getCookie("_holder");
				    var accountLast = getCookie("_account");
				    var bankLast = getCookie("_bank");

if (userKnown===true)
{
	if (password!=passwordLast)
	{
		allChanges += "Password = "+password+"; <br>";
		count++;
	}
	if (username!=usernameLast)
	{
		allChanges += "Username = "+username+"; <br>";
		count++;
	}
	if (language!=languageLast)
	{
		allChanges += "Language = "+language+"; <br>";
		count++;
	}
	if (name!=nameLast)
	{
		allChanges += "First name/Last name = "+name+"; <br>";
		count++;
	}
	if (data!=dataLast)
	{
		allChanges += "Birthday = "+data+"; <br>";
		count++;
	}
	if (text!=textLast)
	{
		allChanges += "Path to the photo = "+text+"; <br>";
		count++;
	}
	if (adress!=adressLast)
	{
		allChanges += "Address = "+adress+"; <br>";
		count++;
	}
	if (pay!=payLast)
	{
		allChanges += "Payment method = "+pay+"; <br>";
		count++;
	}
	if (credit!=creditLast)
	{
		allChanges += "Number = "+credit+"; <br>";
		count++;
	}
	if (valid!=validLast)
	{
		allChanges += "Valid thru = "+valid+"; <br>";
		count++;
	}
	if (code!=codeLast)
	{
		allChanges += "Code = "+code+"; <br>";
		count++;
	}
	if (holder!=holderLast)
	{
		allChanges += "Holder name = "+holder+"; <br>";
		count++;
	}
	if (account!=accountLast)
	{
		allChanges += "Account number = "+account+"; <br>";
		count++;
	}
	if (bank!=bankLast)
	{
		allChanges += "Bank name = "+bank+"; <br>";
		count++;
	}		    

//BoxChange
if (count>=1)
{
	document.getElementById("dataChange").innerHTML=allChanges;
    modalChange.css("display", "block");
}
else 
{
	document.getElementById("dataChange").innerHTML="No changes";
	modalChange.css("display", "block");
}

}

                setCookie("_email", email,30);
			    setCookie("_password", password,30);
			    setCookie("_username", username,30);
			    setCookie("_language", language,30);

			    setCookie("_name", name,30);
			    setCookie("_data", data,30);
			    setCookie("_text", text,30);
			    setCookie("_adress", adress,30);

			    setCookie("_pay", pay,30);
			    setCookie("_credit", credit,30);
			    setCookie("_valid", valid,30);
			    setCookie("_code", code,30);
			    
			    setCookie("_holder", holder,30);
			    setCookie("_account", account,30);
			    setCookie("_bank", bank,30);

document.getElementById("NameUser").innerHTML=getCookie("_username");
$("#PhotoUser").attr("src", getCookie("_text"));

});

function empty(){
	//$("#information").reset();
	var emailReset = document.getElementById("email").value;
	document.getElementById("information").reset();

					 if($("#pay").val() == '')
					    { 
					    	$("#credit").css("display", "none");
					    	$("#paypal").css("display", "none");
					    	$("#bankDiv").css("display", "none");
		                }   

    document.getElementById("email").value=emailReset;
    
}

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

$('#pay').change(function()
				{
					    if($(this).val() == '')
					    { 
					    	$("#credit").css("display", "none");
					    	$("#paypal").css("display", "none");
					    	$("#bankDiv").css("display", "none");
		                }
					    if($(this).val() == 'credit card')
					    { 
					    	$("#credit").css("display", "block");
					    	$("#paypal").css("display", "none");
					    	$("#bankDiv").css("display", "none");
		                }
		                if($(this).val() == 'paypal')
					    { 
					    	$("#paypal").css("display", "block");
					    	$("#credit").css("display", "none");
					    	$("#bankDiv").css("display", "none");
		                }
		                if($(this).val() == 'bank')
					    { 
					    	$("#bankDiv").css("display", "block");
					    	$("#paypal").css("display", "none");
					    	$("#credit").css("display", "none");
		                }

                });

$('input[type=file]').change(function () {
         var f=document.getElementById("myFile").value;
	     document.getElementById("text").value=f; 
});

