import React from 'react';
import ProfileImage from '../../img/profileImg.jpg';
import './PostShare.css';
import { UilScenery, UilPlayCircle, UilLocationPoint, UilSchedule } from '@iconscout/react-unicons';

export default function PostShare() {
  return (
    <div className='PostShare'>
        <img src={ProfileImage} alt='' />

        <div>
            <input type='text' placeholder="What's happening"/>
        </div>

        <div className='PostOptions'>
            <div className='Option'>
                <UilScenery />
            </div>

            <div className='Option'>
                <UilPlayCircle />
            </div>

            <div className='Option'>
                <UilLocationPoint />
            </div>

            <div className='Option'>
                <UilSchedule />
            </div>

        </div>
    </div>
  )
}
