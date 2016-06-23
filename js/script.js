$(document).ready(function(){

  $('.aside-left').on('click', '.something', function(){
    $(this).parent().toggleClass('highlight')
    
    if($(this).siblings('.options').is(':hidden')){
      $(this).siblings('.options').slideDown('slow');
    }else{
      $(this).siblings('.options').slideUp('slow')
    }
  });
  
  $('.aside-right').on('click', '.something', function(){
    $(this).parent().toggleClass('highlight')
    
    if($(this).siblings('.options').is(':hidden')){
      $(this).siblings('.options').slideDown('slow');
    }else{
      $(this).siblings('.options').slideUp('slow')
    }
  });
  
  $('body').on('click', '.arrow' function(){
    $('.aside-left li.highlight').appendTo('.aside-right ul').removeClass('highlight').children('.options').hide();
    $('.aside-right li.highlight').appendTo('.aside-left ul').removeClass('highlight').children('.options').hide()
  });
  
  // $('.aside-left').on('dblclick', 'li', function(){
  //   if($(this).children('.options').is(':hidden')){
  //     $(this).children('.options').slideDown('slow');
  //   }else{
  //     $(this).children('.options').slideUp('slow')
  //   }
  // });  
  
  // $('.aside-right').on('dblclick', 'li', function(){
  //   if($(this).children('.options').is(':hidden')){
  //     $(this).children('.options').slideDown('slow');
  //   }else{
  //     $(this).children('.options').slideUp('slow')
  //   }
  // });
  
  $('#input-form').on('click', '.add', function(){
    var $input = $('.input-text').val();
    
    $('.to-get-items').append('<li class="item"><div class="something">' + $input + '</div><div class="edit-box"><form class="edit-box-text" onSubmit="return false"><input type="text" value="" class="edit-text"></form></div><div class="options"><div class="edit"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></div><div class="move"><i class="arrow fa fa-arrows-h"></i></div><div class="trash"><i class="fa fa-trash-o" aria-hidden="true"></i></div></div></li>');   
    $('.input-text').val('');
  });
  
  $('.hero').on('click', '.edit', function(){
    var $item = $(this).parent().siblings('.something').text()
    $(this).parent().siblings('.something').hide();
    $(this).parent().siblings('.edit-box').children('.edit-box-text').children('.edit-text').attr('value', $item);
    $(this).parent().siblings('.edit-box').show();

  });
  
  $('.hero').on('click', '.trash', function(){
    $(this).closest('.item').remove();
  });
  
  $('.hero').on('click', '.move', function(){
    $('.aside-left li.highlight').appendTo('.aside-right ul').removeClass('highlight').children('.options').hide();
    $('.aside-right li.highlight').appendTo('.aside-left ul').removeClass('highlight').children('.options').hide();
  });
  
  
  $('.hero').on('keydown', '.edit-text',  function(e){
    var $changedItem = $(this).parent().parent().siblings('.something')
    var $newText = $(this).val();
    
    if(e.keyCode == 13){
      
      $changedItem.text($newText);
      $changedItem.show();
      $(this).parent().parent().hide();
      $(this).parent().parent().siblings('.options').slideUp('fast');
    }
    
  });
  
  
  $('#input-form').on('keydown', '.input-text', function(e){
    var $input = $('.input-text').val();

    if(e.keyCode == 13){
      e.preventDefault();
      $('.to-get-items').append('<li class="item"><div class="something">' + $input + '</div><div class="edit-box"><form class="edit-box-text" onSubmit="return false"><input type="text" value="" class="edit-text"></form></div><div class="options"><div class="edit"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></div><div class="move"><i class="arrow fa fa-arrows-h"></i></div><div class="trash"><i class="fa fa-trash-o" aria-hidden="true"></i></div></div></li>');   
      $('.input-text').val(''); 
    }
  });

  
});





















