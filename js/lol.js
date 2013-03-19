// Generated by CoffeeScript 1.6.1

$(function() {
  var initActions;
  initActions = function() {
    initItemsAction();
    initSpellsAction();
    initSkillsAction();
    initRunesAction();
    initMasterAction();
    initMasteries();
    return null;
  };
  $('#myModal').modal('hide');
  $("#tabs").tabs();
  $('.ui-tabs-nav a').bind('click', function() {
    $('.character').effect('slide', 800);
    return null;
  });
  $('.inner-items').draggable();
  $('.inner-spells').draggable();
  $('.skills-inner').sortable({
    placeholder: 'placehold',
    revert: 'true',
    items: 'img',
    tolerance: 'pointer',
    deactivate: function(event, ui) {
      var localService, saves;
      saves = $(ui.item).siblings().andSelf();
      localService = angular.element('html').injector().get('localService');
      $(saves).each(function() {
        var item;
        item = $('.image img').attr('id') + 'Skill' + $(this).index();
        try {
          localService.set(item, $(this).attr('src'));
        } catch (error) {
          alert("Сохранить в локальное хранилище не удалось: " + error);
        }
        return null;
      });
      return null;
    }
  }).disableSelection();
  $('.arguments').each(function() {
    var text;
    text = parseInt($(this).text());
    if (text !== 0) {
      return $(this).parent('p').removeClass('disabled');
    }
  });
  return null;
});