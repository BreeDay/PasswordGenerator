// function randomPassword(length) {
//     var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
//     var pass = "";
//     for (var x = 0; x < length; x++) {
//         var i = Math.floor(Math.random() * chars.length);
//         pass += chars.charAt(i);
//     }
//     return pass;
// }

function generate(div_id) {
  let complexity = document.getElementById("slider"+div_id).value;
  let value = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
  let password= "";
  for(var i=0; i<=complexity; i++){
    password = password + value.charAt(Math.floor(Math.random()*Math.floor(value.length-1)));
  }
    document.getElementById("display"+div_id).value = password;
    document.getElementById("Lastpswrds").innerHTML += password +"<br/>";
}

    document.getElementById("length").innerHTML = "Length:26";
    document.getElementById("slider"+div_id).oninput = function(){

      if(document.getElementById("slider").value >0){
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
      }
      else{
        document.getElementById("length").innerHTML = "Length: 1";
      }
    }

    function copypss(div_id){
          document.getElementById("display"+div_id).select();
          document.execCommand("Copy");
          alert("Your Password Has Been Copied to Clipboard");
    }
