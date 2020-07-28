'use strict'; 
function handleSort() {
  $('#sort-by').on('change', function () {
    let sortBy = $(this).val();
    if (sortBy === 'alpha') {
      sortAlphabetical();
    }
    else if (sortBy === 'alpha-rev') {
      sortReverseAlphabetical();
    }
    else if (sortBy === 'age') {
      sortNumerical($('.person'));
    }
    else if (sortBy === 'age-rev') {
      sortReverseNumerical($('.person'));
    }
    showCreature(1);
  });
}
 
function sortAlphabetical() {
  $('.creature').sort((a, b) => {
    let result;
    if (($(b).data('keyword').toLowerCase()) < ($(a).data('keyword').toLowerCase())) {
      result = 1;
    }
    else if (($(b).data('keyword').toLowerCase()) > ($(a).data('keyword').toLowerCase())) {
      result = -1;
    }
    else {
      if (($(b).data('firstname').toLowerCase()) < ($(a).data('firstname').toLowerCase())) {
        result = 1;
      }
      else if (($(b).data('firstname').toLowerCase()) > ($(a).data('firstname').toLowerCase())) {
        result = -1;
      }
      else {
        result = 0;
      }
    }
    return result;
  }).appendTo('#photo-gallery');
}
 
function sortReverseAlphabetical() {
  $('.creature').sort((a, b) => {
    let result;
    if (($(b).data('keyword').toLowerCase()) < ($(a).data('keyword').toLowerCase())) {
      result = -1;
    }
    else if (($(b).data('keyword').toLowerCase()) > ($(a).data('keword').toLowerCase())) {
      result = 1;
    }
    else {
      if (($(b).data('firstname').toLowerCase()) < ($(a).data('firstname').toLowerCase())) {
        result = -1;
      }
      else if (($(b).data('firstname').toLowerCase()) > ($(a).data('firstname').toLowerCase())) {
        result = 1;
      }
      else {
        result = 0;
      }
    }
    return result;
  }).appendTo('#photo-gallery');
}
 
function sortNumerical(arr) {
  $('.creature').sort((a, b) => {
    return ($(b).data('horns')) < ($(a).data('horns')) ? 1 : -1;
  }).appendTo('#photo-gallery');
}
 
function sortReverseNumerical(arr) {
  $('.creature').sort((a, b) => {
    return ($(b).data('horns')) > ($(a).data('horns')) ? 1 : -1;
  }).appendTo('#photo-gallery');
}