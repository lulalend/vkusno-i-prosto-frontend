import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';
import Filter from '../../assets/svg/filter.svg';
import FocusFilter from '../../assets/svg/focusFilter.svg';
import Search from '../../assets/svg/search.svg';
import LeftArrow from '../../assets/svg/leftArrow.svg';
import DisabledLeftArrow from '../../assets/svg/disabledLeftArrow.svg';
import RightArrow from '../../assets/svg/rightArrow.svg';
import DisabledRightArrow from '../../assets/svg/disabledRightArrow.svg';
import { RecipeContainer } from '../../components/recipes/container/RecipeContainer.tsx';
import { useRecipes } from '../../api/recipes/useRecipes.ts';
import { LoadingPage } from '../loading/LoadingPage.tsx';

export const MainPage = () => {
  const [searchName, setSearchName] = useState(
    localStorage.getItem('searchName') || '',
  );
  const [includeIngredient, setIncludeIngredient] = useState(
    localStorage.getItem('includeIngredient') || '',
  );
  const [excludeIngredient, setExcludeIngredient] = useState(
    localStorage.getItem('excludeIngredient') || '',
  );
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage, setRecipesPerPage] = useState(8);
  const recipesRef = useRef<HTMLDivElement | null>(null);

  const limit = recipesPerPage;
  const offset = (currentPage - 1) * recipesPerPage;

  const { recipes, total, isLoading } = useRecipes(
    limit,
    offset,
    searchName,
    includeIngredient,
    excludeIngredient,
  );

  const calculateRecipesPerPage = (containerWidth: number) => {
    const isMobile = window.innerWidth < 768;
    const recipeWidth = isMobile ? 150 : 220;

    return Math.floor(containerWidth / recipeWidth) * 2;
  };

  useEffect(() => {
    const handleResize = () => {
      if (recipesRef.current) {
        const containerWidth = recipesRef.current.offsetWidth;

        setRecipesPerPage(calculateRecipesPerPage(containerWidth));
      }
    };

    const observer = new ResizeObserver(() => handleResize());

    if (recipesRef.current) {
      observer.observe(recipesRef.current);
    }

    return () => observer.disconnect();
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  const handlerFilterClick = () => {
    setShowFilters((filters) => !filters);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((page) => page - 1);
    }
  };

  const totalPages = Math.ceil((total || 1) / recipesPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((page) => page + 1);
    }
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const value = (e.target as HTMLInputElement).value.trim();

      if (value) {
        setSearchName(value);
        localStorage.setItem('searchName', value);
      }
    }
  };

  // prettier-ignore
  const handleFilterKeyDown =
    (filterType: 'include' | 'exclude') =>
      (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
          const value = (e.target as HTMLInputElement).value.trim();

          if (!value) return;

          if (filterType === 'include') {
            setIncludeIngredient(value);
            localStorage.setItem('includeIngredient', value);
          } else if (filterType === 'exclude') {
            setExcludeIngredient(value);
            localStorage.setItem('excludeIngredient', value);
          }
        }
      };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setSearchName(value);
    localStorage.setItem('searchName', value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <input
          style={{ backgroundImage: `url(${Search})` }}
          placeholder="Ищем рецепты..."
          onKeyDown={handleSearchKeyDown}
          value={searchName}
          onChange={handleSearchChange}
          autoFocus={true}
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
          <input
            placeholder="Содержит ингредиенты..."
            value={includeIngredient}
            onChange={(e) => {
              setIncludeIngredient(e.target.value);
            }}
            onKeyDown={handleFilterKeyDown('include')}
          />
          <input
            placeholder="Не содержит ингредиенты..."
            value={excludeIngredient}
            onChange={(e) => {
              setExcludeIngredient(e.target.value);
            }}
            onKeyDown={handleFilterKeyDown('exclude')}
          />
        </div>
      )}
      <div className={styles.recipes} ref={recipesRef}>
        {recipes.length > 0 ? (
          <>
            <RecipeContainer recipes={recipes} />
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
                src={
                  currentPage === totalPages ? DisabledRightArrow : RightArrow
                }
                onClick={handleNextPage}
                aria-disabled={currentPage === totalPages}
                alt="Right arrow"
              />
            </div>
          </>
        ) : (
          <p className={styles.message}>
            Рецептов нет, может добавим в личном кабинете? :)
          </p>
        )}
      </div>
    </div>
  );
};
