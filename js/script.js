$(document).ready(function() {
  window.setInterval(mudaNome, 1000);

  function mudaNome(){
    var nome1 = $('.nome1').css('display');
    var nome2 = $('.nome2').css('display');
    
    if($(nome1 == 'block')){
      $(".nome2").show();
      $(".img3").hide();
      $(".nome1").hide();
      
    }
    if(nome2 == 'block'){
      $(".nome2").hide();
      $(".img3").show();
      $(".nome1").show();
      
    }
  }
  //$("#imagem").click(function() {
  //});
  $(document).keypress(function(e) {
    if (e.which == 13) {
      console.log("quando apertar enter isso funciona");
    }
  });
  /*$("#form").hide();
  $("#button").click(function() {
    $("#form").show();
    $("header").hide();
  });

  $(".quantumWizButtonPaperbuttonFocusOverla").click(function() {
    $("#form").hide();
  });*/

  function mudaCor() {
    var filterSort = Math.floor(Math.random(1) * 3);
    console.log(filterSort);
    switch (filterSort) {
      case 1:
        var filter1 = "hue-rotate(142deg)";
        var filter2 = "invert(100%)";
        var filter3 = "saturate(300%)";
        var filter4 =
          "saturate(32%) invert(87%) drop-shadow(20px -20px 10px #0000ff)";
        $(".estrelinha1").css({ color: "#FFF", filter: filter3 });
        $(".estrelinha2").css({ color: "#FFF", filter: filter1 });
        $(".estrelinha3").css({ color: "#FFF", filter: filter3 });
        $(".estrelinha4").css({ color: "#FFF", filter: filter1 });
        $(".estrelinha5").css({ color: "#FFF", filter: filter3 });
        $(".estrelinha6").css({ color: "#FFF", filter: filter1 });
        break;
      case 2:
        var filter1 = "hue-rotate(142deg)";
        var filter2 = "invert(100%)";
        var filter3 = "saturate(300%)";
        var filter4 =
          "saturate(32%) invert(87%) drop-shadow(20px -20px 10px #0000ff)";
        $(".estrelinha1").css({ color: "#FFF", filter: filter1 });
        $(".estrelinha2").css({ color: "#FFF", filter: filter3 });
        $(".estrelinha3").css({ color: "#FFF", filter: filter1 });
        $(".estrelinha4").css({ color: "#FFF", filter: filter3 });
        $(".estrelinha5").css({ color: "#FFF", filter: filter1 });
        $(".estrelinha6").css({ color: "#FFF", filter: filter3 });
        break;
      case 3:
        var filter = "saturate(300%)";
        var filter1 = "hue-rotate(142deg)";
        var filter2 = "invert(100%)";
        var filter3 = "saturate(300%)";
        var filter4 =
          "saturate(32%) invert(87%) drop-shadow(20px -20px 10px #0000ff)";
        $(".estrelinha1").css({ color: "#FFF", filter: filter3 });
        $(".estrelinha2").css({ color: "#FFF", filter: filter2 });
        $(".estrelinha3").css({ color: "#FFF", filter: filter1 });
        $(".estrelinha4").css({ color: "#FFF", filter: filter4 });
        $(".estrelinha5").css({ color: "#FFF", filter: filter3 });
        $(".estrelinha6").css({ color: "#FFF", filter: filter2 });
        break;
      case 4:
        var filter =
          "saturate(32%) invert(87%) drop-shadow(20px -20px 10px #0000ff)";
        break;
    }

    $("img").css({ color: "#FFF", filter: filter });
  }

  var tempo = Math.floor(Math.random(1000) * 2000);
  //window.setInterval(mudaCor, 5000);

  // function posicoes() {
  //   mudaCor();
  //   var left1 = Math.floor(Math.random() * 300);
  //   var left2 = Math.floor(Math.random() * 250);
  //   var left3 = Math.floor(Math.random() * 200);
  //   var left4 = Math.floor(Math.random() * 150);
  //   var left5 = Math.floor(Math.random() * 100);
  //   var left6 = Math.floor(Math.random() * 50);

  //   $(".estrelinha1").css({ left: left1 });
  //   $(".estrelinha2").css({ left: left2 });
  //   $(".estrelinha3").css({ left: left3 });
  //   $(".estrelinha4").css({ left: left4 });
  //   $(".estrelinha5").css({ left: left5 });
  //   $(".estrelinha6").css({ left: left6 });
  // }

  $("#estrelinha1").click(function() {
    //$(".estrelinha1").puff();
    //$("#estrelinha1").puff({ duration: 3 });
  });
  // $("img").click(function() {
  //   console.log("apertou");

  //   var filterSort = Math.floor(Math.random() * 4);
  //   console.log(filterSort);
  //   switch (filterSort) {
  //     case 1:
  //       var filter = "hue-rotate(142deg)";
  //       break;
  //     case 2:
  //       var filter = "invert(100%)";
  //       break;
  //     case 3:
  //       var filter = "saturate(300%)";
  //       break;
  //     case 4:
  //       var filter =
  //         "saturate(32%) invert(87%) drop-shadow(20px -20px 10px #0000ff)";
  //       break;
  //   }

  //   $("img").css({ color: "#FFF", filter: filter });
  // });
});
