'use strict';
 
function renderCreature() {
  Creature.all.forEach(person => $('#photo-gallery').append(creature.render()));
  $('.person-template').remove();
  sortAlphabetical();
  showCreature(1);
}