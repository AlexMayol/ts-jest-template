import { numToEmoji } from './index';

describe('index', () => {
  test('if less than 5', () => {
    const result = numToEmoji(1);
    expect(result).toBe('🤗');
  });
  test('if more than 5', () => {
    const result = numToEmoji(6);
    expect(result).toBe('🤫');
  });
  test('if equal to 5', () => {
    const result = numToEmoji(5);
    expect(result).toBe('😮‍💨');
  });
  test('if equal to 42', () => {
    const result = numToEmoji(42);
    expect(result).toBe('😣');
  });
  test('if equal to 69 ( ͡° ͜ʖ ͡°)', () => {
    const result = numToEmoji(69);
    expect(result).toBe('👫');
  });

  test('if distinct to 7 and given a boolean = true', () => {
    const result = numToEmoji(69, true);
    expect(result).toBe('🧜');
  });
  test('if equal to 7 and given a boolean = true', () => {
    const result = numToEmoji(7, true);
    expect(result).toBe('🧛‍♀️');
  });

  test('if distinct to 7 and given a boolean = false', () => {
    const result = numToEmoji(69, false);
    expect(result).toBe('👫');
  });
  test('if equal to 7 and given a false boolean = false', () => {
    const result = numToEmoji(7, false);
    expect(result).toBe('🤫');
  });
});
