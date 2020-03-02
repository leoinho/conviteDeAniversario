$(document).ready(function() {
  window.setInterval(mudaNome, 1000);
  var audio = new Audio('./audio/06-The-Nutcracker-Suite-Opera-71A-Russian-Dance-Pyotr-Ilyich-Tchaikovsky.mp3');
  

  $('body').click(function() {
    if(audio.currentTime != 0){
      audio.pause();
      audio.currentTime = 0;
    }else{
      audio.play();
    }
  });
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
});
