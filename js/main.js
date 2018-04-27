// -- Settings

const MAXLENGTH = 30;
const MAXAMOUNT = 100;
const NUMBERS = '1234567890';
const LOWERCASES = 'abcdefghijklmnopqrstuvwxyz';
const UPPERCASES = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const SPECIALS = '`~!@#$%^*()-=_+[]{}|\':",./<>?&';
const DEFAULT_SEPARATOR = '\n';

// -- Dom parametters

const inputLength = document.getElementById('num-param-length');
const inputAmount = document.getElementById('num-param-amount');
inputLength.min = 0;
inputLength.max = MAXLENGTH;
inputLength.placeHolder = "0 ~ " + MAXLENGTH
inputAmount.min = 0;
inputAmount.max = MAXAMOUNT;
inputLength.placeHolder = "0 ~ " + MAXAMOUNT

// -- Functions

function loadKeys() {
  const keysbox = document.getElementById('txt_keys');
  var keysLength = parseInt(inputLength.value, 10);
  var keysAmount = parseInt(inputAmount.value, 10);

  var keys = '';

  if(!isNaN(keysAmount)  && !isNaN(keysLength)) {
    keysLength = Math.min(keysLength, MAXLENGTH);
    keysAmount = Math.min(keysAmount, MAXAMOUNT);

    for(let i = 0; i < keysAmount; i++) {
      keys += genKey(
        keysLength,
        document.getElementById('chk-param-number').checked,
        document.getElementById('chk-param-lowercase').checked,
        document.getElementById('chk-param-uppercase').checked,
        document.getElementById('chk-param-special').checked
      );

      if(i == keysAmount - 1)
        break;

      keys += DEFAULT_SEPARATOR;
    }
  } else {
    keys = 'Invalids settings !'
  }
  keysbox.value = keys;
}

function genKey(length, useNumbers, useLowercase, useUpperCase, useSpecial) {
  var chars = '';
  var key = '';

  if(useNumbers) chars += NUMBERS;
  if(useLowercase) chars += LOWERCASES;
  if(useUpperCase) chars += UPPERCASES;
  if(useSpecial) chars += SPECIALS;

  for(let i = 0; i < length; i++) {
    key += chars[Math.floor(Math.random() * chars.length)];
  }

  return key;
}

loadKeys(); // Load some keys by default
