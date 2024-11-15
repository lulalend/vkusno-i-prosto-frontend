import { useState } from 'react';
import styles from './styles.module.css';
import Filter from '../../assets/svg/filter.svg';
import FocusFilter from '../../assets/svg/focusFilter.svg';
import Search from '../../assets/svg/search.svg';
import LeftArrow from '../../assets/svg/leftArrow.svg';
import DisabledLeftArrow from '../../assets/svg/disabledLeftArrow.svg';
import RightArrow from '../../assets/svg/rightArrow.svg';
import DisabledRightArrow from '../../assets/svg/disabledRightArrow.svg';
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
          <img
            src={currentPage === 1 ? DisabledLeftArrow : LeftArrow}
            onClick={handlePrevPage}
            aria-disabled={currentPage === 1}
            alt="Left arrow"
          />
          <span>
            Страница {currentPage} из {totalPages}
          </span>
          <img
            src={currentPage === totalPages ? DisabledRightArrow : RightArrow}
            onClick={handleNextPage}
            aria-disabled={currentPage === totalPages}
            alt="Right arrow"
          />
        </div>
      </div>
    </div>
  );
};
