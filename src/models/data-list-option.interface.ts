export type DataListOptionType = 'units' | 'text';

export interface DataListOption<T> {
  title: string;
  key: keyof T;
  type: DataListOptionType;
}
