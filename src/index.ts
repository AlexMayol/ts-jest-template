import { divide } from 'lodash';

/**
 * Pepe
 * @param testedNumber
 * @param isSeven {@linkcode divide} sdsqdswd
 * @returns
 */
export const numToEmoji = (testedNumber: number, isSeven?: boolean): string => {
  if (isSeven) return testedNumber === 7 ? '🧛‍♀️' : '🧜';

  if (testedNumber === 5) return '😮‍💨';
  if (testedNumber === 42) return '😣';
  if (testedNumber === 69) return '👫';
  if (testedNumber < 5) return '🤗';
  if (testedNumber > 5) return '🤫';

  return '😴';
};
