function convert(){
        
      var feet = document.getElementById("feet").value;
      var inches = document.getElementById("inches").value;
      
   var result = feet * 30.48 + inches * 2.54;
        
    document.getElementById("result"). innerHTML = result.toFixed(0) + "cm";
        
      }