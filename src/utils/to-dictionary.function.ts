import { Dictionary } from '@models/dictionary.interface';
import { KeyString } from '@models/key-string.type';

export function toDictionary<T>(
  data: T[],
  selectorFn: (item: T) => KeyString<T, keyof T>,
  valueHandler: (v: KeyString<T, keyof T>) => string,
): Dictionary<Array<T>> {
  const result: Dictionary<Array<T>> = {};

  data.forEach((item) => {
    const value = valueHandler(selectorFn(item));

    value in result ? result[value].push(item) : (result[value] = [item]);
  });

  return result;
}
