import { ProfileImage } from '../ProfileImage/index';
import UserIMG from '../../assets/IMG/Rectangle4240.png';
import styles from './styles.module.css'
import { PencilSimpleLine } from 'phosphor-react'

interface ProfileSettingsProps {
  user: string;
  photo: string;
}

export function ProfileSettings({user, photo}:ProfileSettingsProps){
  return (
    <div className={styles.container}>
      <img src={UserIMG} alt="" />
      <div className={styles.imgComponent} >
        <ProfileImage HasBorder src={photo} />
      </div>
      <div className={styles.profileName}>
        <h2>{user}</h2>
        <h3>Dev Front-End</h3>
      </div>
          
        <div className={styles.barLine}/>
        
        <button><PencilSimpleLine size={20} />Editar seu perfil</button>
    </div>
  );
}