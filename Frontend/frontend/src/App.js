import Message from './components/Message';
import DateSeparator from './components/DateSeparator';
import MessageGroup from './components/MessageGroup';

const messages = [
  {
    id: 'm1',
    content: 'Привіт!',
    sentAt: new Date(2025, 4, 19, 10, 15),
    isEdited: false,
    isRead: true,
    images: [],
    user: {
      firstName: 'Іван',
      lastName: 'Петров',
      avatar: '/avatars/ivan.png',
    }
  },
  {
    id: 'm2',
    content: 'Як справи? xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    sentAt: new Date(2025, 4, 19, 10, 17),
    isEdited: false,
    isRead: true,
    images: [],
    user: {
      firstName: 'Іван',
      lastName: 'Петров',
      avatar: '/avatars/ivan.png',
    }
  },
  {
    id: 'm3',
    content: 'Все добре, дякую!',
    sentAt: new Date(2025, 4, 20, 9, 0),
    isEdited: true,
    isRead: false,
    images: [],
    user: {
      firstName: 'Олена',
      lastName: 'Коваль',
      avatar: '/avatars/olena.png',
    }
  },
  {
    id: 'm4',
    content: 'Lorem ipsum dolor sit amet consectetur. Amet amet posuere ut egestas mauris purus. Facilisis congue sed a',// nulla pellentesque. Lacus posuere lorem sed ut. Praesent feugiat lacinia penatibus habitant sem dolor morbi tincidunt. Scelerisque pulvinar netus sed eget venenatis ornare arcu tincidunt morbi. Feugiat sapien volutpat eget etiam. Elit nam ut at rutrum enim arcu turpis non phasellus. Hendrerit venenatis ornare praesent nisi rhoncus eleifend cursus congue. Enim laoreet ac diam volutpat blandit id ultrices dignissim habitant..їздки',
    sentAt: new Date(2025, 4, 20, 9, 5),
    isEdited: false,
    isRead: false,
    media: [
      'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg',
      'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg',
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg',
      // 'https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg',
      //'https://img.freepik.com/photos-gratuite/beau-cameleon-dans-nature_23-2151731208.jpg',
      //'https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg',
      //'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg',
      //'https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg',
      // 'https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg',
      // 'https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg',
    ],
    user: {
      firstName: 'Олена',
      lastName: 'Коваль',
      avatar: '/avatars/olena.png',
    }
  }
];



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
      <MessageGroup messages={messages} isLeft={false}></MessageGroup>
    </>
  );
}

export default App;
