$(document).ready(function() {
  $('.fadeIn').fadeIn(2000);
});


// Scroll header.
$(window).scroll(function() {
  window_y = $(window).scrollTop(); // VALOR QUE SE HA MOVIDO DEL SCROLL
  scroll_critical = parseInt($("#header").height()); // VALOR DE TU DIV.
  var bg_bul = parseInt($("#bgBul").height());
  if (window_y > 5) { // SI EL SCROLL HA SUPERADO EL ALTO DE TU DIV.
    // ACA MUESTRAS EL OTRO DIV Y EL OCULTAS EL DIV QUE QUIERES.
    $('#header').addClass('fixed'); // VER.
    $('#box_btn_head').fadeIn(600);
    // $('.fono').removeClass('fono_mov');
  } else {
    // ACA HACES TODO LO CONTRARIO.
    $('#header').removeClass('fixed'); // OCULTAR.
    $('#box_btn_head').fadeOut(600);
    // $('.fono').addClass('fono_mov');
  }
});

// Evento top.
$(window).scroll(function() {
  var windowHeight = $(window).scrollTop();
  var contenido2 = $("#secDos").offset();

  contenido2 = contenido2.top;
  // console.log(contenido2);
  contenido2 = (contenido2 - 200);

  if (windowHeight >= contenido2) {
    console.log("llego");
    $('#tit_transform').animate({
      fontSize: '50px',
      fontWeight: '300'
    }, 1000);

    $('#fadeDos').animate({
      opacity: '1',
      top: '0'
    }, 1000);

  } else {}
});

// Wrap Calendly.
var buttonCal = $('.AgZoom');
var elemCal = $('#caja_form_calendly')[0];

$(buttonCal).on('click', function(e) {
  $('#formCalendly').removeClass('ocultar');
  $(elemCal).fadeIn(500);
  e.stopPropagation();
});

$(document).on('click', function(e) {
  if ($(e.target).closest(elemCal).length === 0) {
    $(elemCal).fadeOut(500, function() {
      $('#formCalendly').addClass('ocultar');
    });
  }
});

$(document).on('keydown', function(e) {
  if (e.keyCode === 27) {
    $(elemCal).fadeOut(500, function() {
      $('#formCalendly').addClass('ocultar');
    });

  }
});

// Wrap form.
var button = $('.FmHs');
var elem = $('#caja_form')[0];

$(button).on('click', function(e) {
  $('#formFlotante').removeClass('ocultar');
  $(elem).fadeIn(500);
  e.stopPropagation();
});

$('.formFlot').on('click', function() {
  $('#formFlotante').removeClass('ocultar');
  //$(elem).fadeIn(500);
});

$(document).on('click', function(e) {
  if ($(e.target).closest(elem).length === 0) {
    $(elem).fadeOut(500, function() {
      $('#formFlotante').addClass('ocultar');
    });
  }
});

$(document).on('keydown', function(e) {
  if (e.keyCode === 27) {
    $(elem).fadeOut(500, function() {
      $('#formFlotante').addClass('ocultar');
    });

  }
});

// btn Cerrar.
$("#btnCerrar").on('click', function(e) {
  $(elem).fadeOut(500, function() {
    $('#formFlotante').addClass('ocultar');
  });
});

// btn Cerrar.
$("#btnCerrarCal").on('click', function(e) {
  $(elemCal).fadeOut(500, function() {
    $('#formCalendly').addClass('ocultar');
  });
});