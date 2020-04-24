$(window).on('scroll', function(){
  if($(window).scrollTop())
  {
    $('nav').addClass('black');
    $('#menu').addClass('black');
  }
  else
  {
    $('nav').removeClass('black');
    $('#menu').removeClass('black');
  }
})
