'use strict';

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandom = function (arrayToRandomize) {
  var randomCoef = Math.floor(Math.random() * arrayToRandomize.length);
  var randomItem = arrayToRandomize[randomCoef];
  return randomItem;
};

var getFullName = function (namesArray, surnamesArray) {
  var randomName = getRandom(namesArray);
  var randomSurname = getRandom(surnamesArray);
  var fullName = '';
  fullName = randomName + ' ' + randomSurname;
  return fullName;
};

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var renderWizard = function (namesArray, surnamesArray, coatColorArray, eyeColorArray) {
  for (var i = 0; i < 4; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    similarListElement.appendChild(wizardElement);
    wizardElement.querySelector('.setup-similar-label').textContent = getFullName(namesArray, surnamesArray);
    wizardElement.querySelector('.wizard-coat').style.fill = getRandom(coatColorArray);
    wizardElement.querySelector('.wizard-eyes').style.fill = getRandom(eyeColorArray);
  }
};

renderWizard(names, surnames, coatColor, eyesColor);
