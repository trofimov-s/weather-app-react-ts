import { FC, FormEvent } from 'react';
import './Search.scss';
import { Input } from '@components/UI';
import { useAppDispatch } from '@store/index';
import { ForecastActions } from '@store/forecastActions';

const Search: FC = () => {
  const dispatch = useAppDispatch();

  const submitFormHandler = (e: FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const value = data.get('search').toString();
    form.reset();

    dispatch(ForecastActions.getCityForecast({ city: value }));
  };

  return (
    <section className="search-wrapper">
      <h2 className="search-title">Please enter city name</h2>
      <form className="search-form" onSubmit={submitFormHandler}>
        <Input icon="search" label="City name" name="search" btnType="submit" />
      </form>
    </section>
  );
};

export default Search;
