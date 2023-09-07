export interface UserLocationApiResponse {
  location: {
    city: string;
    country: {
      name: string;
      code: string;
      flag: {
        emoji: string;
        twemoji: string;
      };
    };
  };
}

export interface UserLocationData {
  city: string;
  country: string;
  flag_emoji: string;
  country_iso_code: string;
  flag_svg: string;
  city_with_code: string;
}
