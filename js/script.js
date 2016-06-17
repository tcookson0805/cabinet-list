$(document).ready(function(){


  
  $('.aside-left li').on('dblclick', function(){
    var options = $(this).children()
    if(options.is(':hidden')){
      options.slideDown('slow')  
    }else{
      options.slideUp('slow');
    }
  })  
  
  $('.aside-right li').on('click', function(){
    var options = $(this).children()
    if(options.is(':hidden')){
      options.slideDown('slow')  
    }else{
      options.slideUp('slow');
    }
  })
  
});