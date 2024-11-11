type Codes = 500 | 400 | 403 | 404;

const responsesMessages: Record<Codes, string> = {
  500: 'Упс, что-то сломалось... Мы уже чиним',
  400: 'Упс, плохой запрос. Проверьте введённые данные или напишите нам',
  403: 'Ой, Вам сюда нельзя :(',
  404: 'Упс, не смогли найти :(',
};

export const getErrorMessage = (code: number) => {
  switch (code) {
    case 500:
      return responsesMessages[500];

    case 400:
      return responsesMessages[400];

    case 404:
      return responsesMessages[404];

    default:
      return 'Что-то пошло не так...';
  }
};
