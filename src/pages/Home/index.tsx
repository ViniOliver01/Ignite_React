import { NavBar } from '../../components/NavBar/index';
import { Post } from '../../components/Post';
import { ProfileSettings } from '../../components/ProfileSettings';

import styles from './styles.module.css';

// interface HomeProps {
//   user: string;
//   photo: string;
// }

const posts = [
  {
    id: 0,
    author:{
      avatarUrl: 'https://github.com/vinioliver01.png',
      name: 'Vinicius',
      role: 'Web Developer',
    },
    content:[
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. e um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: '👉 jane.design/doctorcare'},
      {type: 'link', content: '#novoprojeto #nlw #rocketseat'},
    ],
    publishedAt: new Date('2022-07-11 20:53:00'),
    commentId: [0,1]
  },
  {
    id: 1,
    author:{
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego',
      role: 'Rocket CTO',
    },
    content:[
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: '👉 jane.design/doctorcare'},
      {type: 'link', content: '#novoprojeto #nlw #rocketseat'},
    ],
    publishedAt: new Date('2022-07-13 18:53:00'),
    commentId: [0]
  }
];

const loggedUser = {
    userName: 'Vinicius',
    userPhoto:'https://github.com/vinioliver01.png',
  }


export function Home(){

  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.main}>
        <div className={styles.asside}>
          <ProfileSettings user={loggedUser.userName} photo={loggedUser.userPhoto} />
        </div>
        <div className={styles.body}>
          {posts.map(post =>{
            return (
              <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
              commentId={post.commentId}
              userName={loggedUser.userName}
              userPhoto={loggedUser.userPhoto}
              />
            )
          })}
        </div>
      </div>
      
      
      
    </div>
  );
}