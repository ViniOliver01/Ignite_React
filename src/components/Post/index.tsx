import { ChangeEvent, FormEvent, InvalidEvent, useState} from 'react';
import { ProfileImage } from '../ProfileImage/index';
import { Comments } from '../Comments/index';

import styles from './styles.module.css'

import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: 'paragraph' | 'link';
  content: string;
}

interface PostProps {
  author: Author;
  content: Content[];
  publishedAt: Date;
  userName: string;
  userPhoto: string;
}

export function Post({author, content, publishedAt, userName, userPhoto}: PostProps){
  const [comment, setComment] = useState([
    {
      id: 0,
      name: 'Diego',
      avatarUrl:'https://github.com/diego3g.png',
      owner: false,
      time: '2h',
      commentary: 'Parabens',
      likes: '3',
    },
    {
      id: 1,
      name: 'Vinicius',
      avatarUrl:'https://github.com/vinioliver01.png',
      owner: true,
      time: '1h',
      commentary: 'Parabens Zé',
      likes: '7',
    }
  ])

  const [newCommentText, setnewCommentText] = useState('')

  const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:MM'h'", {
    locale: ptBR,
  })

  const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleCreateNewComment(event: FormEvent){
    event.preventDefault()
    setComment([
      ...comment,
      {
        id: comment.length+1,
        name: userName,
        avatarUrl: userPhoto,
        owner: true,
        time: '1h',
        commentary: newCommentText,
        likes: '7',
      }
    ]);
    setnewCommentText('')
    console.log(comment)
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("");
    setnewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Esse campo é obrigatório!");
    console.log();
  }

  function deleteComment(id:number){
    console.log(`Deletar comentario ${id}`);

    const commentsWithoutDeletedOne = comment.filter(comment =>{
      return comment.id != id
    })

    setComment(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length == 0;

  return (
    <div className={styles.container}>
        <div className={styles.profileInfo}>
            <ProfileImage HasBorder src={author.avatarUrl}/>
            <div className={styles.profileName}>
                <h2>{author.name}</h2>
                <h3>{author.role}</h3>
            </div>
            <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>Públicado {publishedDateRelativeNow}</time>
        </div>

        <div className={styles.Post_content}>
          {content.map(line =>{
            if(line.type == 'paragraph'){
              return <div><p key={line.content}>{line.content}</p><br/></div>;
            }
            if(line.type == 'link'){
              return <div><p key={line.content}><a href='#'>{line.content}</a></p><br/></div>;
            }
            if(line.type == 'hashtag'){
              return <div><p key={line.content}><a href='#'>{line.content}</a></p><br/></div>;
            }
          })}
        </div>
        <div className={styles.barLine}/>

        <form className={styles.feedbackArea} onSubmit={handleCreateNewComment}>
            <h2>Deixe seu feedback</h2>

            <textarea 
              name="text" 
              placeholder='Escreva um comentário...'
              value={newCommentText}
              onChange={handleNewCommentChange}
              onInvalid={handleNewCommentInvalid}
              required
            />

            <footer>
              <button 
                type="submit" 
                disabled={isNewCommentEmpty}
                >Publicar
                </button>
            </footer>
        </form>


        <div className={styles.coment_area}>
            {comment.map(c =>{
              return (
                <Comments 
                  key={c.id}
                  id={c.id}
                  name={c.name} 
                  img={c.avatarUrl} 
                  me={c.owner} 
                  time={c.time} 
                  comment={c.commentary} 
                  // likes={c.likes}
                  onDeleteComment={deleteComment}
              />
              )
            })}
        </div>
    </div>
  );
}