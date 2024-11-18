import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import classNames from 'classnames';
import styles from './styles.module.css';
import defaultProfile from '../../assets/img/funnyDefaultProfile.png';
import MyRecipes from '../../assets/svg/myRecipes.svg';
import FocusMyRecipes from '../../assets/svg/focusMyRecipes.svg';
import SavedRecipes from '../../assets/svg/heart.svg';
import FocusSavedRecipes from '../../assets/svg/whiteHeart.svg';
// prettier-ignore
import {
  RecipeContainer
} from '../../components/recipes/container/RecipeContainer.tsx';
import { recipes } from '../../constants/recipes.ts';
import { RecipeForCreate } from '../../types/types.ts';
import { useCreateRecipe } from '../../api/recipes/useCreateRecipe.ts';
import { Modal } from '../../components/modal/Modal.tsx';
import { RecipeForm } from '../../components/form/RecipeForm.tsx';

export const ProfilePage = () => {
  const { login } = useParams<{ login: string }>();
  const navigate = useNavigate();
  const [isSavedActive, setIsSavedActive] = useState(false);
  const [isFormActive, setIsFormActive] = useState(false);
  const { mutate: createRecipe } = useCreateRecipe();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const handleCreateRecipe = (newRecipe: RecipeForCreate) => {
    createRecipe(newRecipe);
    setIsFormActive(true);
  };

  return (
    <div className={styles.profilePage}>
      <div className={styles.userInfo}>
        <img src={defaultProfile} alt="Profile picture" />
        <div className={styles.userDetails}>
          <p className={styles.userLogin}>{login}</p>
          {/*<p>Отображаемое имя:</p>*/}
          {/*<p>{username}</p>*/}
          <p className={styles.editDetails}>редактировать профиль</p>
        </div>
        <div className={styles.userSections}>
          <div
            className={classNames({
              [styles.activeSection]: !isSavedActive,
            })}
            onClick={() => setIsSavedActive(false)}
          >
            {isSavedActive ? (
              <img src={MyRecipes} alt="List icon" />
            ) : (
              <img src={FocusMyRecipes} alt="List icon" />
            )}
            Мои рецепты
          </div>
          <div
            className={classNames({
              [styles.activeSection]: isSavedActive,
            })}
            onClick={() => setIsSavedActive(true)}
          >
            {isSavedActive ? (
              <img src={FocusSavedRecipes} alt="Heart icon" />
            ) : (
              <img src={SavedRecipes} alt="Heart icon" />
            )}
            Сохранённые
          </div>
        </div>
        <button className={styles.logoutBtn} onClick={handleLogout}>
          Выйти
        </button>
      </div>
      <div className={styles.container}>
        <button onClick={() => setIsFormActive(true)}>Добавить рецепт</button>
        <RecipeContainer recipes={recipes} />
      </div>

      <Modal isActive={isFormActive} onClose={() => setIsFormActive(false)}>
        <RecipeForm onSubmit={handleCreateRecipe} />
      </Modal>
    </div>
  );
};
