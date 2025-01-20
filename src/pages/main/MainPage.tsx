import { useState } from 'react';
import styles from './styles.module.css';
import Filter from '../../assets/svg/filter.svg';
import FocusFilter from '../../assets/svg/focus-filter.svg';
import Search from '../../assets/svg/search.svg';

export const MainPage = () => {
  const [showFilters, setShowFilters] = useState(false);

  const handlerFilterClick = () => {
    setShowFilters((showFilters) => !showFilters);
  };

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <input
          style={{ backgroundImage: `url(${Search})` }}
          placeholder='Ищем рецепты...'
        />
        <div className={styles.filter} onClick={handlerFilterClick}>
          {!showFilters ? <img src={Filter} alt='Filter icon' />
            : <img src={FocusFilter} alt='Filter icon' /> }
          <span>Фильтры</span>
        </div>
      </div>
      {showFilters &&
        <div className={styles.filters}>
          <input
            placeholder='Содержит ингредиенты...'
          />
          <input
            placeholder='Не содержит ингредиенты...'
          />
        </div>
      }
    </div>
  );
};