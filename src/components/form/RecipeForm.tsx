import { FormEvent, useState } from 'react';
import { Recipe, RecipeForCreate, RecipeForUpdate } from '../../types/types.ts';

type Props =
  | {
      initialRecipe: Recipe;
      onSubmit: (recipe: RecipeForUpdate) => void;
    }
  | {
      initialRecipe?: undefined;
      onSubmit: (recipe: RecipeForCreate) => void;
    };

export const RecipeForm = ({ initialRecipe, onSubmit }: Props) => {
  const [name, setName] = useState(initialRecipe?.name || '');
  const [image, setImage] = useState(initialRecipe?.image || '');
  const [ingredients, setIngredients] = useState<string[]>(
    initialRecipe?.ingredients || [],
  );
  const [steps, setSteps] = useState<string[]>(initialRecipe?.steps || []);
  const [videoLink, setVideoLink] = useState(initialRecipe?.videoLink || '');
  const [showUsername, setShowUsername] = useState(
    initialRecipe?.showUsername || false,
  );

  const isEditMode = !!initialRecipe;

  const addIngredient = () => {
    setIngredients([...ingredients, '']);
  };

  const removeIngredient = (index: number) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  const updateIngredient = (index: number, value: string) => {
    const updated = [...ingredients];

    updated[index] = value;
    setIngredients(updated);
  };

  const addStep = () => {
    setSteps([...steps, '']);
  };

  const removeStep = (index: number) => {
    setSteps(steps.filter((_, i) => i !== index));
  };

  const updateStep = (index: number, value: string) => {
    const updated = [...steps];

    updated[index] = value;
    setSteps(updated);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (isEditMode) {
      const newRecipe: RecipeForUpdate = {
        id: initialRecipe.id,
        name,
        image,
        ingredients,
        steps,
        videoLink,
        showUsername,
      };

      onSubmit(newRecipe);
    } else {
      const newRecipe: RecipeForCreate = {
        name,
        image,
        ingredients,
        steps,
        videoLink,
        showUsername,
      };

      onSubmit(newRecipe);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}
    >
      <h1>{isEditMode ? 'Редактирование рецепта' : 'Добавление рецепта'}</h1>

      <label>
        Название:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>

      <label>
        Изображение (URL):
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
      </label>

      <fieldset>
        <legend>Ингредиенты:</legend>
        {ingredients.map((ingredient, index) => (
          <div key={index} style={{ display: 'flex', gap: '0.5em' }}>
            <input
              type="text"
              value={ingredient}
              onChange={(e) => updateIngredient(index, e.target.value)}
              required
            />
            <button type="button" onClick={() => removeIngredient(index)}>
              Удалить
            </button>
          </div>
        ))}
        <button type="button" onClick={addIngredient}>
          Добавить ингредиент
        </button>
      </fieldset>

      <fieldset>
        <legend>Шаги приготовления:</legend>
        {steps.map((step, index) => (
          <div key={index} style={{ display: 'flex', gap: '0.5em' }}>
            <input
              type="text"
              value={step}
              onChange={(e) => updateStep(index, e.target.value)}
              required
            />
            <button type="button" onClick={() => removeStep(index)}>
              Удалить
            </button>
          </div>
        ))}
        <button type="button" onClick={addStep}>
          Добавить шаг
        </button>
      </fieldset>

      <label>
        Видео (опционально):
        <input
          type="text"
          value={videoLink}
          onChange={(e) => setVideoLink(e.target.value)}
        />
      </label>

      <label>
        <input
          type="checkbox"
          checked={showUsername}
          onChange={(e) => setShowUsername(e.target.checked)}
        />
        Показывать имя пользователя
      </label>

      <button type="submit">
        {isEditMode ? 'Сохранить изменения' : 'Добавить рецепт'}
      </button>
    </form>
  );
};
