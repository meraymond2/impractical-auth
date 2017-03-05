import verify from '../dev/verificationService.js';
import KeyStroke from '../dev/keystroke.js'

test('verify returns Promise<true> on correct input', () => {
  const correct = [
    new KeyStroke(65, 0, 78),
    new KeyStroke(66, 100, 187),
    new KeyStroke(67, 200, 1252),
    new KeyStroke(68, 3000, 3050)
  ];

  const alsoCorrect = [
    new KeyStroke(65, 81840, 81902),
    new KeyStroke(66, 81976, 82033),
    new KeyStroke(67, 82082, 83125),
    new KeyStroke(68, 85657, 85707)
  ];

  verify(correct)
    .then( returned => expect(returned).toBe(true));

  verify(alsoCorrect)
    .then( returned => expect(returned).toBe(true));
});

test('verify returns Promise<false> when length does not match', () => {
  const notLongEnough = [
    new KeyStroke(65, 0, 78),
    new KeyStroke(66, 100, 187),
    new KeyStroke(67, 200, 1252)
  ];

  verify(notLongEnough)
    .then( returned => expect(returned).toBe(false))

  const tooLong = [
    new KeyStroke(65, 0, 78),
    new KeyStroke(66, 100, 187),
    new KeyStroke(67, 200, 1252),
    new KeyStroke(68, 3000, 3050),
    new KeyStroke(69, 3100, 3200)
  ];

  verify(tooLong)
    .then( returned => expect(returned).toBe(false));

});

test('verify returns Promise<false> when a key is wrong', () => {
  const incorrect1 = [
    new KeyStroke(63, 0, 78),
    new KeyStroke(66, 100, 187),
    new KeyStroke(67, 200, 1252),
    new KeyStroke(68, 3000, 3050)
  ];

  const incorrect2 = [
    new KeyStroke(65, 0, 78),
    new KeyStroke(90, 100, 187),
    new KeyStroke(67, 200, 1252),
    new KeyStroke(68, 3000, 3050)
  ];

  const incorrect3 = [
    new KeyStroke(65, 0, 78),
    new KeyStroke(66, 100, 187),
    new KeyStroke(67, 200, 1252),
    new KeyStroke(89, 3000, 3050)
  ];

  verify(incorrect1)
    .then( returned => expect(returned).toBe(false));

  verify(incorrect2)
    .then( returned => expect(returned).toBe(false));

  verify(incorrect3)
    .then( returned => expect(returned).toBe(false));

});

test('verify returns Promise<false> when a duration is wrong', () => {
  const bTooLong = [
    new KeyStroke(65, 0, 78),
    new KeyStroke(66, 100, 1187),
    new KeyStroke(67, 200, 1252),
    new KeyStroke(68, 3000, 3050)
  ];

  const cTooShort = [
    new KeyStroke(65, 0, 78),
    new KeyStroke(90, 100, 187),
    new KeyStroke(67, 200, 999),
    new KeyStroke(68, 3000, 3050)
  ];

  const bTooLate = [
    new KeyStroke(65, 0, 78),
    new KeyStroke(66, 1100, 1187),
    new KeyStroke(67, 1200, 2252),
    new KeyStroke(68, 4000, 4050)
  ];

  const dTooSoon = [
    new KeyStroke(65, 0, 78),
    new KeyStroke(66, 100, 187),
    new KeyStroke(67, 200, 1252),
    new KeyStroke(89, 2000, 3050)
  ];

  verify(bTooLong)
    .then( returned => expect(returned).toBe(false));

  verify(cTooShort)
    .then( returned => expect(returned).toBe(false));

  verify(bTooLate)
    .then( returned => expect(returned).toBe(false));

  verify(dTooSoon)
    .then( returned => expect(returned).toBe(false));

});