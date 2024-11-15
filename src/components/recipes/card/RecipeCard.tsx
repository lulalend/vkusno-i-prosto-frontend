import styles from './styles.module.css';
import { Recipe } from '../../../types/types.ts';
import DefaultRecipe from '../../../assets/img/defaultRecipe.png';
import Edit from '../../../assets/svg/edit.svg';

type Props = {
  recipe: Recipe;
};

export const RecipeCard = ({ recipe }: Props) => (
  <div className={styles.recipeCard}>
    <img
      src={recipe.image ? recipe.image : DefaultRecipe}
      className={styles.recipeIcon}
      alt="Recipe image"
    />
    <div className={styles.recipeDetails}>
      <div className={styles.recipeDescription}>
        <p className={styles.name}>{recipe.name}</p>
        <p className={styles.username}>{recipe.ownerUsername}</p>
      </div>
      <img src={Edit} className={styles.editIcon} alt="Edit icon" />
    </div>
  </div>
);
