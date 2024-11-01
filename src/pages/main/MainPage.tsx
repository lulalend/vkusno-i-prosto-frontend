import { useState } from 'react';
import styles from './styles.module.css';

export const MainPage = () => {
  const [showFilters, setShowFilters] = useState(false);

  const handlerFilterClick = () => {
    setShowFilters((showFilters) => !showFilters);
  };

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <input placeholder='Ищем рецепты...' />
        <div className={styles.filter} onClick={handlerFilterClick}>
          {!showFilters ? <img src='svg/filter.svg' alt='Filter icon' />
            : <img src='svg/focus-filter.svg' alt='Filter icon' /> }
          <span>Фильтры</span>
        </div>
      </div>
      {showFilters &&
        <div className={styles.filters}>
          <input placeholder='Содержит ингредиенты...' />
          <input placeholder='Не содержит ингредиенты...' />
        </div>
      }
    </div>
  );
};