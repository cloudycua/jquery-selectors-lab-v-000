'use-strict';

// all <h1> elements using an element selectro
function h1Selector(){
  return $('h1')
}

// all <li> inside of <ol> using a descendant selector
function liInOlSelector(){
  return $('ol li')
}

// all <a> inside element that has id 'box4' and class 'box5'
function linkSelector(){
  return $('#box4.box5 a')
}

function imageSelector(){
  return $('')
}

function checkboxInputSelector(){
  return $('')
}
