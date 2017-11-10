$(document).ready(function(){

  $("#form1").submit(function(event){

    var form1s = ["person1", "person2", "petName", "imaginaryPlace", "anObject"];

    form1s.forEach(function(form1){
      var userInput = $("input#" + form1).val();
      $("." + form1).text(userInput);
    });

    $("#story").show();

    event.preventDefault();

  });
});
