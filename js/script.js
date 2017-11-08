$(document).ready(function(){

  $("#form1").submit(function(){

    var inputPerson1 = $("input#person1").val();
    var inputPerson2 = $("input#person2").val();
    var inputpetName = $("input#petName").val();
    var inputimaginaryPlace = $("input#imaginaryPlace").val();
    var inputanObject = $("input#anObject").val();

    $(".person1").text(inputPerson1);
    $(".person2").text(inputPerson2);
    $(".petName").text(inputpetName);
    $(".imaginaryPlace").text(inputimaginaryPlace);
    $(".anObject").text(inputanObject);

    $("#story").show();

    event.preventDefault();

  });
});
