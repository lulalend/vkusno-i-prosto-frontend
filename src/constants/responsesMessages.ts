const responsesMessages: Record<number, string> = {
  500: 'Упс, что-то сломалось... Мы уже чиним',
  400: 'Упс, плохой запрос. Проверьте введённые данные или напишите нам',
  401: 'Чтобы сделать это действие, нужно зарегистрироваться',
  403: 'Ой, Вам сюда нельзя :(',
  404: 'Упс, не смогли найти :(',
};

export const getErrorMessage = (code: number): string => {
  if (code in responsesMessages) {
    return responsesMessages[code];
  }

  return 'Что-то пошло не так...';
};
