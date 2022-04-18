/*Ler mais ou ler menos em Resumo*/
$(document).ready(function () {

  var showChar = 175;
  var ellipsestext = "...";
  var moretext = "ver menos ";
  var lesstext = "ver mais";


  $('.more').each(function () {
    var content = $(this).html();

    if (content.length > showChar) {

      var c = content.substr(0, showChar);
      var h = content.substr(showChar, content.length - showChar);

      var html = c + '<span class="moreellipses">' + ellipsestext + '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';

      $(this).html(html);
    }

  });

  $(".morelink").click(function () {
    if ($(this).hasClass("less")) {
      $(this).removeClass("less");
      $(this).html(moretext);
    } else {
      $(this).addClass("less");
      $(this).html(lesstext);
    }
    $(this).parent().prev().toggle();
    $(this).prev().toggle();
    return false;
  });
});


/*Botao de likes*/
$(function () {
  $('.like').on('click', function () {
    $(this).next('.likes').find('span').text(function () {
      if (parseInt($(this).text()) === 0) {
        return parseInt($(this).text() + 1);
      }
      else {
        return 0;
      }
    });
  });
});


/*botao de favorito*/
document.getElementById('btn-2').onclick = function () {
  var botao = document.getElementById('btn-2');
  botao.style.backgroundColor = "#ebeb37";
  botao.disabled = false;
}


/*Ver as respostas dos comentarios */
$("#botao-mais").click(mostraMais);

function mostraMais() {
  $(".texto").toggle();
};
if ($("#botao-mais").text() === 'ler mais') {
  $("#botao-mais").text('Ler menos')
} else {
  $("#botao-mais").text('Resposta')
}
