import { LocalStorageKeys } from '@enums/local-storage-keys.enum';

class LocalStorageHelperI {
  private static _instance: LocalStorageHelperI;

  static get Instance(): LocalStorageHelperI {
    return this._instance || (this._instance = new this());
  }

  setItem(key: LocalStorageKeys, value: string): void {
    localStorage.setItem(key, value);
  }

  getItem(key: LocalStorageKeys): string {
    return localStorage.getItem(key);
  }

  removeItem(key: LocalStorageKeys): void {
    localStorage.removeItem(key);
  }
}

const LocalStorageHelper = LocalStorageHelperI.Instance;
export default LocalStorageHelper;
