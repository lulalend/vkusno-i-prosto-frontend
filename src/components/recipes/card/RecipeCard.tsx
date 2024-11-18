import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import { Recipe } from '../../../types/types.ts';
import DefaultRecipe from '../../../assets/img/defaultRecipe.png';

type Props = {
  recipe: Recipe;
};

export const RecipeCard = ({ recipe }: Props) => {
  const navigate = useNavigate();

  const goToRecipePage = (id: string) => {
    navigate(`/recipe/${id}`);
  };

  return (
    <div
      className={styles.recipeCard}
      onClick={() => goToRecipePage(recipe.id)}
    >
      <img
        src={recipe.image ? recipe.image : DefaultRecipe}
        className={styles.recipeIcon}
        alt="Recipe image"
      />
      <div className={styles.recipeDetails}>
        <div className={styles.recipeDescription}>
          <p className={styles.name}>{recipe.name}</p>
          {recipe.showUsername && (
            <p className={styles.username}>{recipe.ownerUsername}</p>
          )}
        </div>
      </div>
    </div>
  );
};
