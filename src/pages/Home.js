import React from 'react';
import './Home.css'
import ProfileSide from '../components/ProfileSide/ProfileSide';
import PostSide from '../components/PostSide/PostSide';

export default function Home() {
    return (
        <div className='Home'>
            <ProfileSide />
            <PostSide />
            <div className='RightSide'>Right Side</div>
        </div>
    )
}
