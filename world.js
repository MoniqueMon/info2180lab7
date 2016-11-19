window.onload = function() {

var lookup=document.getElementById("lookup"); 
var check=document.getElementById("check");
var i=document.getElementById("country");


lookup.addEventListener("click",search ());
check.addEventListener("click",Asearch());

function search()
    {
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function()
                {
                    if (xhttp.readyState == 4 && xhttp.status == 200)
                    {
                        alert(xhttp.responseText);
                        document.getElementById("result").innerHTML = xhttp.responseText;
                        
                    }
                };
                xhttp.open("GET", "world.php?country=" +i.value, true);
                xhttp.send();
    }
    
function Asearch()
{
    i.value="";
    var c=document.getElementById("check").checked;
    
    if (c==true)
    {
        lookup.addEventListener("click",function(){
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    document.getElementById("result").innerHTML=xmlhttp.responseText;
                }
                }
                xmlhttp.open("GET", "world.php?"+check.name+"="+c.value,true);
                xmlhttp.send();
            });
        
    }
            else
            {
                lookup.addEventListener("click",function(){
                    if (i.value == "")
                    {
                        document.getElementById("result").innerHTML="Please to enter value";
                    }
                    
                    else
                    {
                        var xhttp = new XMLHttpRequest();
                        xhttp.onreadystatechange = function () {
                            if (xhttp.readyState == 4 && xhttp.status == 200) 
                            {
                                document.getElementById("result").innerHTML=xhttp.responseText;
                            }
                        };
                        xhttp.open("GET", "world.php?country="+i.value,true);
                        xhttp.send();
                    }
                });
            }
}
};