import { UserLocationApiResponse, UserLocationData } from '@models/user-location-data.interface';
import { BaseApi } from './base-api';

class UserLocation extends BaseApi {
  private static _instance: UserLocation;
  private readonly _url = 'https://api.ipregistry.co';

  private get url(): string {
    const key = import.meta.env.VITE_IP_REGISTRY_KEY;
    return `${this._url}/?key=${key}`;
  }

  static get Instance(): UserLocation {
    return this._instance || (this._instance = new this());
  }

  getUserLocation(): Promise<UserLocationData | null> {
    return this.axiosInstance
      .get<UserLocationApiResponse>(this.url)
      .then(({ data }) => data)
      .then(
        ({ location: { city, country } }: UserLocationApiResponse): UserLocationData => ({
          city,
          country: country?.name,
          country_iso_code: country?.code,
          flag_emoji: country?.flag?.emoji,
          flag_svg: country?.flag?.twemoji,
          city_with_code: `${city},${country?.code}`,
        }),
      )
      .catch(() => {
        this.errorHanlder('Can not track user location!');
        return null;
      });
  }
}

const UserLocationApi = UserLocation.Instance;
export default UserLocationApi;
