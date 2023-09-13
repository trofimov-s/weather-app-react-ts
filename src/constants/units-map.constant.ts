import { UNITS } from '@enums/units.enum';

export const UNITS_MAP: {
  [key in UNITS]: string;
} = {
  [UNITS.STANDARD]: 'F',
  [UNITS.METRIC]: 'C',
};
