'use strict';

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var getRandomElement = function (arrayToRandomize) {
  var randomCoef = Math.floor(Math.random() * arrayToRandomize.length);
  var randomItem = arrayToRandomize[randomCoef];
  return randomItem;
};

var getFullName = function (namesArray, surnamesArray) {
  var randomName = getRandomElement(namesArray);
  var randomSurname = getRandomElement(surnamesArray);
  return randomName + ' ' + randomSurname;
};

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var renderWizards = function (namesArray, surnamesArray, coatColorArray, eyeColorArray) {
  for (var i = 0; i < 4; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    similarListElement.appendChild(wizardElement);
    wizardElement.querySelector('.setup-similar-label').textContent = getFullName(namesArray, surnamesArray);
    wizardElement.querySelector('.wizard-coat').style.fill = getRandomElement(coatColorArray);
    wizardElement.querySelector('.wizard-eyes').style.fill = getRandomElement(eyeColorArray);
  }
};

renderWizards(names, surnames, coatColor, eyesColor);

var openPopUpClickButton = document.querySelector('.setup-open');
var clickIcon = document.querySelector('.setup-open-icon');
var closePopUpClickButton = document.querySelector('.setup-close');
var wizardCoat = document.querySelector('.wizard-coat');
var fireball = document.querySelector('.setup-fireball-wrap');
var eyes = document.querySelector('.wizard-eyes');

var changeColor = function (whatToChange, whatColorUseArray, typeOfColor) {
  if (typeOfColor === 'fill') {
    whatToChange.style.fill = getRandomElement(whatColorUseArray);
  } if (typeOfColor === 'bg') {
    whatToChange.style.backgroundColor = getRandomElement(whatColorUseArray);
  }
};
wizardCoat.addEventListener('click', function () {
  changeColor(wizardCoat, coatColor, 'fill');
});

fireball.addEventListener('click', function () {
  changeColor(fireball, fireballColor, 'bg');
});
eyes.addEventListener('click', function () {
  changeColor(eyes, eyesColor, 'fill');
});

var closePopup = function () {
  userDialog.classList.add('hidden');
};

var openPopup = function () {
  userDialog.classList.remove('hidden');
};

clickIcon.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    openPopup();
  }
});

closePopUpClickButton.addEventListener('focus', function () {
  closePopUpClickButton.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
      closePopup();
    }
  });
});

openPopUpClickButton.addEventListener('click', function () {
  userDialog.classList.remove('hidden');
});

closePopUpClickButton.addEventListener('click', function () {
  closePopup();
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    closePopup();
  }
});

var formData = new FormData(document.forms.wizardName);
var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://js.dump.academy/code-and-magick');
xhr.send(formData);
