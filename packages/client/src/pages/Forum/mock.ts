export interface SmileModel {
  smile: number;
  count: number;
}

export interface CommentModel {
  name: string;
  comment: string;
  toAnswer: string;
  smiles?: SmileModel[];
}

export interface TopicModel {
  id: number;
  title: string;
  owner: string;
  desc: string;
  comments: CommentModel[];
}

export const topics: TopicModel[] = [
  {
    id: 1,
    title: 'Флудилка',
    owner: 'John',
    desc: 'Малосодержательные и нетематические сообщения в интернет-форумах и чатах, зачастую занимающие большие объёмы. Технический флуд представляет собой хакерскую атаку с большим количеством запросов, приводящую к отказу в обслуживании. В некоторых ситуациях флудом считается несколько сообщений подряд от одного игрового лица.',
    comments: [
      {
        name: 'Frodo123',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        toAnswer: '',
        smiles: [
          {
            smile: 128077,
            count: 3,
          },
          {
            smile: 128293,
            count: 1,
          },
        ],
      },
      {
        name: 'Gandalf-111',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        toAnswer: 'Frodo123',
      },
    ],
  },
  {
    id: 2,
    title: 'Вопросы',
    owner: 'Frodo123',
    desc: 'Высказывание, которое обычно функционирует как запрос информации, которая, как ожидается, будет предоставлена в форме ответа. Таким образом, вопросы могут быть поняты как своего рода иллокутивный акт в области прагматики или как особые виды пропозиций в рамках формальной семантики, такие как альтернативная семантика или пытливая семантика.',
    comments: [
      {
        name: 'John',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        toAnswer: '',
        smiles: [
          {
            smile: 128077,
            count: 3,
          },
          {
            smile: 128293,
            count: 1,
          },
        ],
      },
      {
        name: 'Frodo123',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        toAnswer: 'John',
      },
    ],
  },
  {
    id: 3,
    title: 'Ответы',
    owner: 'Gandalf-111',
    desc: 'Новое суждение, уточняющее или дополняющее, в соответствии с поставленным вопросом, исходное знание. Поиск ответа предполагает обращение к конкретной области теоретических или эмпирических знаний, которую называют областью поиска ответов. Полученное в ответе знание, расширяя либо уточняя исходную информацию, может служить базисом для постановки новых, более глубоких вопросов о предмете исследования.',
    comments: [
      {
        name: 'Hideo_Kojima',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        toAnswer: '',
      },
      {
        name: 'Forrest-Gump',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        toAnswer: 'Hideo_Kojima',
        smiles: [
          {
            smile: 128077,
            count: 3,
          },
          {
            smile: 128293,
            count: 1,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'Ошибки',
    owner: 'Forrest-Gump',
    desc: 'Непреднамеренное отклонение от правильных действий, поступков, мыслей; разница между ожидаемой или измеренной и реальной величиной.',
    comments: [],
  },
  {
    id: 5,
    title: 'Уровни',
    owner: 'Mario',
    desc: 'Уровень, карта, область, этап, мир, дорожка, доска, этаж, зона, фаза, миссия, эпизод или курс в видео game - это общее пространство, доступное игроку в ходе выполнения дискретной задачи.',
    comments: [
      {
        name: 'Forrest-Gump',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        toAnswer: '',
      },
    ],
  },
  {
    id: 6,
    title: 'Геймдизайн',
    owner: 'Hideo_Kojima',
    desc: 'Процесс создания формы и содержания игрового процесса (геймплея) разрабатываемой игры. Работа с геймдизайном может происходить как через соответствующий документ (англ. design document), так и существовать только в сознании разработчиков игры.',
    comments: [
      {
        name: 'Hideo_Kojima',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        toAnswer: '',
      },
      {
        name: 'Mario',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        toAnswer: 'Hideo_Kojima',
        smiles: [
          {
            smile: 128077,
            count: 3,
          },
          {
            smile: 128293,
            count: 1,
          },
        ],
      },
      {
        name: 'John',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        toAnswer: 'Hideo_Kojima',
      },
    ],
  },
];
