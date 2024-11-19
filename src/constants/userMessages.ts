const responsesMessages: Record<number, string | Record<string, string>> = {
  500: 'Упс, что-то сломалось... Мы уже чиним',
  400: 'Упс, плохой запрос. Проверьте введённые данные или напишите нам',
  401: 'Чтобы сделать это действие, нужно войти в аккаунт',
  403: {
    BAD_AUTH: 'Ой, проверьте введённые данные :(',
    USER_EXISTS: 'Такой пользователь уже существует :(',
    NO_PERMISSION: 'Чтобы сделать это действие, нужно войти в аккаунт',
    TOKEN_EXPIRED: '',
  },
  404: 'Упс, не смогли найти :(',
};

const infoMessages: Record<string, string> = {
  allFieldsMustBeFilled: 'Упс... Все поля должны быть заполнены',
  defaultMessage: 'Что-то пошло не так... Уже чиним',
} as const;


export const getErrorMessage = (code: number, body?: string): string => {
  if (code in responsesMessages) {
    const message = responsesMessages[code];

    if (typeof message === 'string') {
      return message;
    }

    if (typeof message === 'object' && body && body in message) {
      return message[body];
    }
  }

  return infoMessages.defaultMessage;
};

export const getInfoMessage = (str: keyof typeof infoMessages) =>
  infoMessages[str];
