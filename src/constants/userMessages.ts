const responsesMessages: Record<number, string> = {
  500: 'Упс, что-то сломалось... Мы уже чиним',
  400: 'Упс, плохой запрос. Проверьте введённые данные или напишите нам',
  401: 'Чтобы сделать это действие, нужно войти в аккаунт',
  403: 'Ой, проверьте введённые данные :(',
  404: 'Упс, не смогли найти :(',
};

const infoMessages: Record<string, string> = {
  allFieldsMustBeFilled: 'Упс... Все поля должны быть заполнены',
  defaultMessage: 'Что-то пошло не так... Уже чиним'
};

export const getErrorMessage = (code: number): string => {
  if (code in responsesMessages) {
    return responsesMessages[code];
  }

  return infoMessages['defaultMessage'];
};

export const getInfoMessage = (str: string) => {
  if (str in infoMessages) {
    return infoMessages[str];
  }

  return infoMessages['defaultMessage'];
};
