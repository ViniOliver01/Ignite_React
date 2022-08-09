import { ImgHTMLAttributes } from 'react'
import styles from './styles.module.css'

interface ProfileImageprops extends ImgHTMLAttributes<HTMLImageElement>{
  HasBorder?: boolean;
}

export function ProfileImage({HasBorder, ...props}: ProfileImageprops){
  return (
    <div className={HasBorder == true ? styles.HasBorder : styles.NoBorder}>
        <img {...props}/>
    </div>
  );
}