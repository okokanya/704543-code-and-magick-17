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


var eyesInput = document.getElementsByName('eyes-color')[0];
var coatInput = document.getElementsByName('coat-color')[0];
var fireBallInput = document.getElementsByName('fireball-color')[0];


var renderWizards = function (namesArray, surnamesArray, coatColorArray, eyeColorArray) {
  for (var i = 0; i < 4; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    similarListElement.appendChild(wizardElement);
    wizardElement.querySelector('.setup-similar-label').textContent = getFullName(namesArray, surnamesArray);

    var coatRandom = getRandomElement(coatColorArray);
    wizardElement.querySelector('.wizard-coat').style.fill = coatRandom;
    coatInput.value = coatRandom;

    var eyeRandom = getRandomElement(eyeColorArray);
    wizardElement.querySelector('.wizard-eyes').style.fill = eyeRandom;
    eyesInput.value = eyeRandom;

    // fireBallInput.value = fireballColorRandom;
  }
};

renderWizards(names, surnames, coatColor, eyesColor);

var openPopUpClickButton = document.querySelector('.setup-open');
var clickIcon = document.querySelector('.setup-open-icon');
var closePopUpClickButton = document.querySelector('.setup-close');
var wizardCoat = document.querySelector('.wizard-coat');
var fireball = document.querySelector('.setup-fireball-wrap');
var eyes = document.querySelector('.wizard-eyes');
var nameField = document.querySelector('.setup-user-name');

var changeColor = function (whatToChange, whatColorUseArray, typeOfColor, inputNode) {
  if (typeOfColor === 'fill') {
    whatToChange.style.fill = getRandomElement(whatColorUseArray);
  } if (typeOfColor === 'bg') {
    whatToChange.style.backgroundColor = getRandomElement(whatColorUseArray);
  }
  inputNode.value = getRandomElement(whatColorUseArray);
};

wizardCoat.addEventListener('click', function () {
  changeColor(wizardCoat, coatColor, 'fill', coatInput);
});

fireball.addEventListener('click', function () {
  changeColor(fireball, fireballColor, 'bg', fireBallInput);
});

eyes.addEventListener('click', function () {
  changeColor(eyes, eyesColor, 'fill', eyesInput);
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

var isFocused = false;
nameField.addEventListener('focus', function () {
  isFocused = !(isFocused);
});
nameField.addEventListener('blur', function () {
  isFocused = !(isFocused);
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
  if (isFocused === false) {
    if (evt.keyCode === 27) {
      closePopup();
    }
  }
});
