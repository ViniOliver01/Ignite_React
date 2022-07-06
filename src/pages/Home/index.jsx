import React from 'react';
import './styles.css';
import { NavBar } from './../../components/NavBar/index';
import { Post } from '../../components/Post';
import { ProfileSettings } from '../../components/ProfileSettings';
import { Comments } from './../../components/Comments/index';

export function Home(){


  return (
    <div className='container'>
      <NavBar />
      <div className='main'>
        <div className='asside'>
          <ProfileSettings />
        </div>
        <div className='body'>
          <Post/>
        </div>
      </div>
      
      
      
    </div>
  );
}