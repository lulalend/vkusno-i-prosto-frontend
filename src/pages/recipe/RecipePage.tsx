import { useParams } from 'react-router-dom';
import { useState } from 'react';
import styles from './styles.module.css';
// import { useRecipeById } from '../../api/recipes/useRecipeById.ts';
import DefaultRecipe from '../../assets/img/defaultRecipe.png';
import { getUsername } from '../../api/user/token.ts';

export const RecipePage = () => {
  const { id } = useParams<{ id: string }>();
  const [checkedIngredients, setCheckedIngredients] = useState<string[]>(
    JSON.parse(localStorage.getItem('ingredients') || '[]')
  );
  // const { data: recipe, isLoading } = useRecipeById({ id: id ?? '' });

  const username = getUsername(localStorage.getItem('token'));
  const recipe = {
    id: id,
    name: 'Завтрак',
    image: '',
    ingredients: ['сосиска', 'картошка'],
    steps: ['Порезать', 'Подождать 5 минут'],
    videoLink: 'https://www.youtube.com',
    ownerUsername: 'ramazan'
  };

  // if (isLoading) {
  //   return <div>Загрузка рецепта...</div>;
  // }

  if (!recipe) {
    return <div>Рецепт не найден. Пожалуйста, вернитесь назад.</div>;
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

  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        {recipe.ownerUsername !== username ? (
          <>
            <button>Изменить рецепт</button>
            <button>Удалить рецепт</button>
          </>
        ) : (
          <button>Сохранить</button>
        )
        }
      </div>
      <h1 className={styles.title}>{recipe.name}</h1>
      <p className={styles.owner}>Автор: {recipe.ownerUsername}</p>

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
              target='_blank'
              rel='noopener noreferrer'
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
                    type='radio'
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
    </div>
  );
};