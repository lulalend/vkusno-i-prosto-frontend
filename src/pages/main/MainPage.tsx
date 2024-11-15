import { useState } from 'react';
import styles from './styles.module.css';
import Filter from '../../assets/svg/filter.svg';
import FocusFilter from '../../assets/svg/focusFilter.svg';
import Search from '../../assets/svg/search.svg';
// prettier-ignore
import {
  RecipeContainer
} from '../../components/recipes/container/RecipeContainer.tsx';
import { recipes } from '../../constants/recipes.ts';

export const MainPage = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 8;
  const totalPages = Math.ceil(recipes.length / recipesPerPage);

  const handlerFilterClick = () => {
    setShowFilters((showFilters) => !showFilters);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <input
          style={{ backgroundImage: `url(${Search})` }}
          placeholder="Ищем рецепты..."
        />
        <div className={styles.filter} onClick={handlerFilterClick}>
          {!showFilters ? (
            <img src={Filter} alt="Filter icon" />
          ) : (
            <img src={FocusFilter} alt="Filter icon" />
          )}
          <span>Фильтры</span>
        </div>
      </div>
      {showFilters && (
        <div className={styles.filters}>
          <input placeholder="Содержит ингредиенты..." />
          <input placeholder="Не содержит ингредиенты..." />
        </div>
      )}
      <div className={styles.recipes}>
        <RecipeContainer recipes={currentRecipes} />
        <div className={styles.pagination}>
          <button
            className={styles.pageButton}
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            Назад
          </button>
          <span>
            Страница {currentPage} из {totalPages}
          </span>
          <button
            className={styles.pageButton}
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Вперед
          </button>
        </div>
      </div>
    </div>
  );
};
