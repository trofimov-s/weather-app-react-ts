import { FC } from 'react';
import './FavoriteCityListItem.scss';
import { RootState, useAppDispatch, useAppSelector } from '@store/index';
import { ForecastSelectors } from '@store/forecastSelectors';
import { Unit } from '@components/UI';
import { UNITS_MAP } from '@constants/units-map.constant';
import { Icon } from '@components/UI';
import { ForecastActions } from '@store/forecastActions';

type Props = {
  city: string;
};

const FavoriteCityListItem: FC<Props> = ({ city }) => {
  const dispatch = useAppDispatch();
  const [fullCityName, { temp, temp_min, temp_max, icon }, unit] = useAppSelector(
    (state: RootState) => ForecastSelectors.selectFavoriteCityForecast(state, city),
  );

  const currentUnit = UNITS_MAP[unit];

  const handleIconClick = () => {
    dispatch(ForecastActions.toggleFavorite(city));
  };

  return (
    <>
      <h3 className="favorite-city__title">{fullCityName}</h3>
      <div className="favorite-city__info-block">
        <img src={'https://openweathermap.org/img/wn/' + icon + '.png'} alt="" />
        <Unit temp={temp} unit={currentUnit} />
        <div className="min-max-block">
          <div className="min-max-block__container">
            <Icon extendedClass="arrow-icon arrow-icon--up" icon="keyboard_double_arrow_up" />
            <Unit temp={temp_max} unit={currentUnit} />
          </div>
          <div className="min-max-block__container">
            <Icon extendedClass="arrow-icon arrow-icon--down" icon="keyboard_double_arrow_down" />
            <Unit temp={temp_min} unit={currentUnit} />
          </div>
        </div>
      </div>
      <Icon icon="star" extendedClass="favorite-star" clickHanlder={handleIconClick} />
    </>
  );
};

export default FavoriteCityListItem;
