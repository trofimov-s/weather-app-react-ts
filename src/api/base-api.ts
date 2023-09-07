import axios, { AxiosError, AxiosInstance } from 'axios';

export abstract class BaseApi {
  private _axiosInstance: AxiosInstance;

  constructor() {
    this._axiosInstance = axios.create({
      headers: { 'Content-Type': 'application/json' },
    });
  }

  protected get axiosInstance(): AxiosInstance {
    return this._axiosInstance;
  }

  protected errorHanlder(e: AxiosError | string): void {
    console.warn(`Http error: ${e}`);
  }
}
