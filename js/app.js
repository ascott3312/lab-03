'use strict';
$(() => {
  $('#photo-gallery').hide();
  const ajaxSettings = { method: 'get', dataType: 'json' };
  $.ajax('./datafiles/page-1.json', ajaxSettings)
    .then((data) => {
      const arrayOfCreatures = data;
      arrayOfCreatures.forEach((creature) => {
        Creature.all.push(new Creature(creature));
      });
    })
    .then(() => { 
      renderCreature();
      renderFilters();
      handleFilters();
      // $('.spinner').fadeOut();
      // $('#photo-gallery').fadeIn();
    });
});
function Creature(creature) {
    this.imgURL = creature.image_url;
    this.getTitle = creature.title;
    this.getDescription= creature.description;
    this.keyword = creature.keyword;
    if(Creature.keyword.indexOf(this.keyword) < 0) {
      Creature.keyword.push(this.keyword);
    }
}
Creature.all = [];
Creature.keyword = [];
Creature.prototype.render = function () {
  const templateHTML = $('#photo-template').html();
  const renderedHTML = Mustache.render(templateHTML, this);
  return renderedHTML;
};
function renderCreature() {
  Creature.all.forEach(creature => {
    $('#photo-gallary').append(creature.render());
    });
}
function fillKeywordDropdown(){
  Creature.keyword.forEach(keyword => {
    const $option = $('<option>').text(keyword).attr('value', keyword);
    $('#keyword-select').append($option);
  });
}
function renderFilters() {
  // Setup Creature filter
  Creature.keyword.sort();
  Creature.keyword.forEach(creature => {
    const $option = $('<option>').text(creature).attr('value',creature);
    $('#keyword-select').append($option);
  });
}
function handleFilters() {
  $('#keyword-select').on('change', function() {
    if($(this).val() !== 'default') {
      $('.creature').hide();
      $(`.creature[data-keyword="${$(this).val()}"]`).fadeIn();
    } else {
      $('.creature').fadeIn();
    }
  });
}