$(document).ready(function(){

  $('.aside-left').on('click', 'li', function(){
    $(this).toggleClass('highlight')
  });
  
  $('.aside-right').on('click', 'li', function(){
    $(this).toggleClass('highlight')
  });
  
  $('.arrow').on('click', function(){
    $('.aside-left li.highlight').appendTo('.aside-right ul').removeClass('highlight');
    $('.aside-right li.highlight').appendTo('.aside-left ul').removeClass('highlight');
  });
  
  $('.aside-left').on('dblclick', 'li', function(){
    if($(this).children().is(':hidden')){
      $(this).children().slideDown('slow');
    }else{
      $(this).children().slideUp('slow')
    }
  });  
  
  $('.aside-right').on('dblclick', 'li', function(){
    if($(this).children().is(':hidden')){
      $(this).children().slideDown('slow');
    }else{
      $(this).children().slideUp('slow')
    }
  });
  
  $('button').click( function(){
    var $input = $('.input-text').val();
    $('.to-get-items').append('<div>asdfasd</div>')   
  });
  
  
});