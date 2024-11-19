import { useNavigate, useParams } from 'react-router-dom';
import { useMemo, useState } from 'react';
import styles from './styles.module.css';
import DefaultRecipe from '../../assets/img/defaultRecipe.png';
import { getUsername } from '../../api/user/token.ts';
import { RecipeForUpdate } from '../../types/types.ts';
import { RecipeForm } from '../../components/form/RecipeForm.tsx';
import { Modal } from '../../components/modal/Modal.tsx';
import { useUpdateRecipe } from '../../api/recipes/useUpdateRecipe.ts';
import { useDeleteRecipe } from '../../api/recipes/useDeleteRecipe.ts';
import { useRecipeById } from '../../api/recipes/useRecipeById.ts';
import { LoadingPage } from '../loading/LoadingPage.tsx';
// prettier-ignore
import {
  useIsFavoriteRecipe
} from '../../api/recipes/favorites/useIsFavoriteRecipe.ts';
// prettier-ignore
import {
  useAddFavoriteRecipe
} from '../../api/recipes/favorites/useAddFavoriteRecipe.ts';
// prettier-ignore
import {
  useDeleteFavoriteRecipe
} from '../../api/recipes/favorites/useDeleteFavoriteRecipe.ts';
import { NoMatch } from '../404/NoMatch.tsx';

export const RecipePage = () => {
  const { id } = useParams<{ id: string }>();
  const [checkedIngredients, setCheckedIngredients] = useState<string[]>(
    JSON.parse(localStorage.getItem('ingredients') || '[]'),
  );
  const [isFormActive, setIsFormActive] = useState(false);
  const navigate = useNavigate();
  const { data: recipe, isLoading } = useRecipeById(id ?? '');
  const { data: isFavorite, isLoading: isLoadingFavorite } =
    useIsFavoriteRecipe(id ?? '');
  const { mutate: updateRecipe } = useUpdateRecipe();
  const { mutate: addFavoriteRecipe } = useAddFavoriteRecipe();
  const { mutate: deleteRecipe } = useDeleteRecipe();
  const { mutate: deleteFavoriteRecipe } = useDeleteFavoriteRecipe();

  const token = localStorage.getItem('token');
  const username = useMemo(() => getUsername(token), [token]);

  if (isLoading || isLoadingFavorite) {
    return <LoadingPage />;
  }

  if (!recipe) {
    return <NoMatch />;
  }

  const handleIngredientCheck = (ingredient: string) => {
    setCheckedIngredients((prev) => {
      const updated = prev.includes(ingredient)
        ? prev.filter((i) => i !== ingredient)
        : [...prev, ingredient];

      localStorage.setItem('ingredients', JSON.stringify(updated));

      return updated;
    });
  };

  const handleUpdateRecipe = (newRecipe: RecipeForUpdate) => {
    updateRecipe(newRecipe);
    setIsFormActive(false);
  };

  const handleDeleteRecipe = () => {
    if (id) {
      deleteRecipe(id, {
        onSuccess: () => {
          navigate(-1);
        },
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        {recipe.ownerUsername === username ? (
          <>
            <button onClick={() => setIsFormActive(true)}>
              Изменить рецепт
            </button>
            <button onClick={handleDeleteRecipe}>Удалить рецепт</button>
          </>
        ) : (
          <>
            {isFavorite ? (
              <button onClick={() => deleteFavoriteRecipe(recipe.id)}>
                Убрать из сохранённого
              </button>
            ) : (
              <button onClick={() => addFavoriteRecipe(recipe.id)}>
                Сохранить
              </button>
            )}
          </>
        )}
      </div>
      <h1 className={styles.title}>{recipe.name}</h1>
      {recipe.ownerUsername && (
        <p className={styles.owner}>Автор: {recipe.ownerUsername}</p>
      )}

      <div className={styles.content}>
        <div className={styles.leftColumn}>
          <img
            src={recipe.image ? recipe.image : DefaultRecipe}
            alt={`${recipe.name}`}
            className={styles.image}
          />

          {recipe.videoLink && (
            <a
              href={recipe.videoLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.videoLink}
            >
              Смотреть видео
            </a>
          )}
        </div>

        <div className={styles.rightColumn}>
          <section>
            <h2>Ингредиенты:</h2>
            <ul>
              {recipe.ingredients.map((ingredient) => (
                <li
                  key={ingredient}
                  onClick={() => handleIngredientCheck(ingredient)}
                >
                  <input
                    type="radio"
                    checked={checkedIngredients.includes(ingredient)}
                  />
                  <span
                    className={
                      checkedIngredients.includes(ingredient)
                        ? styles.crossed
                        : ''
                    }
                  >
                    {ingredient}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2>Шаги приготовления:</h2>
            <ol>
              {recipe.steps.map((step, index) => (
                <li key={index}>
                  <span className={styles.index}>{index + 1})</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </div>

      <Modal isActive={isFormActive} onClose={() => setIsFormActive(false)}>
        <RecipeForm initialRecipe={recipe} onSubmit={handleUpdateRecipe} />
      </Modal>
    </div>
  );
};
