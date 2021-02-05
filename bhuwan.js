var form=document.getElementById("si");
form.onsubmit=function(e){
    e.preventDefault();
    var p=document.getElementById("p").value;
    var t=document.getElementById("t").value;
    var r=document.getElementById("s").value;
var result=document.getElementById("result");

result.innerHTML="Simple Interest is: "+(p*t*r)/100;

}
