import styles from './styles.module.css';
import { Recipe } from '../../../types/types.ts';
import { RecipeCard } from '../card/RecipeCard.tsx';

type Props = {
  recipes: Recipe[];
};

export const RecipeContainer = ({ recipes }: Props) => (
  <div className={styles.recipeContainer}>
    {
      recipes
      && recipes.length > 0
      &&
      recipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)
    }
  </div>
);
