let shiftHeld = false;

$(document).on('keydown', 'body', event => {
  try {
    if (shiftHeld) {
      shiftKeyCodes[event.which]();
    } else {
      keyCodes[event.which]();
    }
  } catch(exception) {
    // Do nothing if shortcut key doesn't exist
  }
});

$(document).on('keyup', 'body', event => {
  if (event.which === 16) {
    shiftHeld = false;
  }
});

const keyCodes = {
  '8' : () => removeLastDigit(),
  '13' : () => events.equals(),
  '16' : () => { shiftHeld = true; },
  '48' : () => events.number(0),
  '49' : () => events.number(1),
  '50' : () => events.number(2),
  '51' : () => events.number(3),
  '52' : () => events.number(4),
  '53' : () => events.number(5),
  '54' : () => events.number(6),
  '55' : () => events.number(7),
  '56' : () => events.number(8),
  '57' : () => events.number(9),
  '187' : () => events.equals(),
  '189' : () => events.operator('-'),
  '190' : () => events.number('.'),
  '191' : () => events.operator('/')
}

const shiftKeyCodes = {
  '54' : () => events.operator('^'),
  '56' : () => events.operator('*'),
  '187' : () => events.operator('+'),
}
