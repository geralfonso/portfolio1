$(document).ready(function () {
  var sections = $('main').find('section'),
    nav = $('nav'),
    nav_height = nav.outerHeight();

  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();
    sections.each(function () {
      var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
      if (cur_pos >= top && cur_pos <= bottom) {
        $('nav li a').removeClass('activo');
        $('nav li').find('a[href="#' + $(this).attr('id') + '"]').addClass('activo');
      }
    });
  });


  $('nav li').on('click', 'a', function () {
    $('nav li a').removeClass('activo');
    $(this).addClass('activo');

    var id = $(this).attr('href');

    $('html,body').animate({
      scrollTop: $(id).offset().top - nav_height
    }, 500)
  });
  $(".button-collapse").sideNav({
    closeOnClick: true,
    draggable: true,
    onOpen: function (el) {
      var $nav = $(this).data('activates');
      var $idnav = '#' + $nav;
      $($idnav).fadeIn("slow");
    },
    onClose: function (el) {
      var $nav = $(this).data('activates');
      var $idnav = '#' + $nav;
      $($idnav).fadeOut("slow");
    }
  });

  $('#filters').on('click', 'a', function () {
    $('#works').find('.work').hide().fadeOut();
    var current = '.' + ($(this).data('card'));
    $('.work').filter(current).show().fadeIn();
  })
});
