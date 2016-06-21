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
    if($(this).children('.options').is(':hidden')){
      $(this).children('.options').slideDown('slow');
    }else{
      $(this).children('.options').slideUp('slow')
    }
  });  
  
  $('.aside-right').on('dblclick', 'li', function(){
    if($(this).children('.options').is(':hidden')){
      $(this).children('.options').slideDown('slow');
    }else{
      $(this).children('.options').slideUp('slow')
    }
  });
  
  $('.add').click(function(){
    var $input = $('.input-text').val();
    $('.to-get-items').append('<li><div class="something">' + $input + '</div><div class="edit-box"><form class="edit-box-text" onSubmit="return false"><input type="text" value="" class="edit-text"></form></div><div class="options"><div class="trash"><i class="fa fa-trash-o" aria-hidden="true"></i></div><div class="edit"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></div></div></li>')   
    $('.input-text').val('')
  });
  
    
  $('.trash').click(function(){
    $(this).closest('.item').remove();
  });
  
  
  $('.edit').click(function(){
    var $item = $(this).parent().siblings('.something').text()
    $(this).parent().siblings('.something').hide();
    $(this).parent().siblings('.edit-box').children('.edit-box-text').children('.edit-text').attr('value', $item);
    $(this).parent().siblings('.edit-box').show();

  });
  
  
  $('.edit-text').on('keydown', function(e){
    var $changedItem = $(this).parent().parent().siblings('.something')
    var $newText = $(this).val();

    
    if(e.keyCode == 13){
      
      $changedItem.text($newText);
      $changedItem.show();
      $(this).parent().parent().hide();
      $(this).parent().parent().siblings('.options').slideUp('fast');
    }
    
  })

  
});





















