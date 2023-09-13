import { UNITS } from '@enums/units.enum';

export interface Query {
  q?: string;
  units?: UNITS;
  appId?: string;
}
