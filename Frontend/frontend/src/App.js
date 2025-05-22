import Message from './components/Message';
import DateSeparator from './components/DateSeparator';
import MessageGroupList from './components/MessageGroupList';
import Chat from './components/Chat';

// const messages = [
//   {
//     id: 'm1',
//     content: 'Привіт!',
//     sentAt: new Date(2025, 4, 19, 10, 15),
//     isEdited: false,
//     isRead: true,
//     images: [],
//     user: {
//       firstName: 'Іван',
//       lastName: 'Петров',
//       avatar: '/avatars/ivan.png',
//     }
//   },
//   {
//     id: 'm2',
//     content: 'Як справи? xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
//     sentAt: new Date(2025, 4, 19, 10, 17),
//     isEdited: false,
//     isRead: true,
//     images: [],
//     user: {
//       id: 1,
//       firstName: 'Іван',
//       lastName: 'Петров',
//       avatar: '/avatars/ivan.png',
//     }
//   },
//   {
//     id: 'm3',
//     content: 'Все добре, дякую!',
//     sentAt: new Date(2025, 4, 20, 9, 0),
//     isEdited: true,
//     isRead: false,
//     images: [],
//     user: {
//       firstName: 'Олена',
//       lastName: 'Коваль',
//       avatar: '/avatars/olena.png',
//     }
//   },
//   {
//     id: 'm4',
//     content: 'Lorem ipsum dolor sit amet consectetur. Amet amet posuere ut egestas mauris purus. Facilisis congue sed a',// nulla pellentesque. Lacus posuere lorem sed ut. Praesent feugiat lacinia penatibus habitant sem dolor morbi tincidunt. Scelerisque pulvinar netus sed eget venenatis ornare arcu tincidunt morbi. Feugiat sapien volutpat eget etiam. Elit nam ut at rutrum enim arcu turpis non phasellus. Hendrerit venenatis ornare praesent nisi rhoncus eleifend cursus congue. Enim laoreet ac diam volutpat blandit id ultrices dignissim habitant..їздки',
//     sentAt: new Date(2025, 4, 20, 9, 5),
//     isEdited: false,
//     isRead: false,
//     media: [
//       // 'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg',
//       // 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg',
//       // 'https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg',
//       // 'https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg',
//       // 'https://img.freepik.com/photos-gratuite/beau-cameleon-dans-nature_23-2151731208.jpg',
//       // 'https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg',
//       'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg',
//       //'https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg',
//       // 'https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg',
//       // 'https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg',
//     ],
//     user: {
//       firstName: 'Олена',
//       lastName: 'Коваль',
//       avatar: '/avatars/olena.png',
//     }
//   }
// ];

const companion = {
  id: 2,
  firstName: 'Олег',
  lastName: 'Ковальчук',
  event: "Allo"
};

const messages = [
  {
    id: 'm1',
    content: 'Привіт!',
    sentAt: new Date(2025, 4, 18, 9, 30),
    isEdited: false,
    isRead: true,
    media: ['https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg'],
    user: {
      id: 1,
      firstName: 'Іван',
      lastName: 'Петров',
    },
  },
  {
    id: 'm2',
    content: 'Як справи?',
    sentAt: new Date(2025, 4, 18, 9, 32),
    isEdited: false,
    isRead: true,
    media: [
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg',
      'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg'],
    user: {
      id: 1,
      firstName: 'Іван',
      lastName: 'Петров',
    },
  },
  {
    id: 'm3',
    content: 'Привіт, все добре. А в тебе?',
    sentAt: new Date(2025, 4, 21, 9, 35),
    isEdited: false,
    isRead: true,
    media: [],
    user: {
      id: 2,
      firstName: 'Олег',
      lastName: 'Ковальчук',
    },
  },
  {
    id: 'm4',
    content: 'Теж нормально.',
    sentAt: new Date(2025, 4, 21, 9, 36),
    isEdited: false,
    isRead: true,
    images: [],
    user: {
      id: 2,
      firstName: 'Олег',
      lastName: 'Ковальчук',
    },
  },
  {
    id: 'm5',
    content: 'Що робиш сьогодні?',
    sentAt: new Date(2025, 4, 21, 9, 38),
    isEdited: false,
    isRead: true,
    media: [
    ],
    user: {
      id: 1,
      firstName: 'Іван',
      lastName: 'Петров',
    },
  },
  {
    id: 'm6',
    content: 'Піду на футбол ввечері.',
    sentAt: new Date(2025, 4, 21, 9, 40),
    isEdited: false,
    isRead: true,
    media: ['https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg',
      'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg',

      'https://img.freepik.com/photos-gratuite/beau-cameleon-dans-nature_23-2151731208.jpg'],
    user: {
      id: 2,
      firstName: 'Олег',
      lastName: 'Ковальчук',
    },
  },
  {
    id: 'm7',
    content: 'Клас, гарної гри!',
    sentAt: new Date(2025, 4, 21, 9, 41),
    isEdited: false,
    isRead: true,
    media: [
      'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg',
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg',
      'https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg',
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg'],
    user: {
      id: 1,
      firstName: 'Іван',
      lastName: 'Петров',
    },
  },
  {
    id: 'm8',
    content: 'Дякую!',
    sentAt: new Date(2025, 4, 21, 9, 42),
    isEdited: false,
    isRead: true,
    media: ['https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg',
      'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg',
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg',
      'https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg',
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg'],
    user: {
      id: 2,
      firstName: 'Олег',
      lastName: 'Ковальчук',
    },
  },
  {
    id: 'm9',
    content: 'Добрий ранок!',
    sentAt: new Date(2025, 4, 22, 8, 0), // Новый день
    isEdited: false,
    isRead: true,
    media: [],
    user: {
      id: 1,
      firstName: 'Іван',
      lastName: 'Петров',
    },
  },
  {
    id: 'm10',
    content: 'Ранок добрий!',
    sentAt: new Date(2025, 4, 22, 8, 5),
    isEdited: false,
    isRead: true,
    user: {
      id: 2,
      firstName: 'Олег',
      lastName: 'Ковальчук',
      avatar: 'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg',
    },
  },
].slice().sort((a, b) => b.date - a.date);




function App() {

  let content = ""
  let sentAt = new Date(2025, 4, 19, 7, 30);
  let isEdited = false;
  let images = [];
  let user = {
    avatar: "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
    firstName: "Antonio",
  }
  let isLeft = true;

  return (
    <>
      <Chat messages={messages} currentUser={{ id: 2 }} companion={companion}></Chat>
    </>
  );
}

export default App;
