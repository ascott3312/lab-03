'use strict';
function renderFilters() {
  // Setup nationality filter
  Creature.allCreatures.sort();
  Creature.allCreatures.forEach(creature => {
    $(this).parent().siblings().css('visibility', 'hidden');
    const $option = $('<option>').text(creature).attr('value', creature);
    $('#nationality-filter').append($option);
  });
 
  // Setup page filter
  $('#pageCount').text(Creature.numPages);
  for (let i = 1; i <= Creature.numPages; i++) {
    const $option = $('<option>').text(i).attr('value', i);
    $('#page-filter').append($option);
// Handles page filter
    $('#page-filter').on('change', function () {
    showCreature($(this).val());
  });
}
function showPeople(page) {
  $('.creature').hide();
  let startAt = Creature.creaturePerPage * (page - 1);
  let endAt = startAt + Creature.creaturePerPage > Creature.all.length ? Creature.all.length : startAt + Creature.creaturePerPage;
  let subset =  $('.creature').slice(startAt, endAt);
  subset.fadeIn();
  $('#firstShowing').text(startAt + 1);
  $('#lastShowing').text(endAt);
}
  }
