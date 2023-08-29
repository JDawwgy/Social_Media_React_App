import React from 'react';
import './FollowersCard.css';

import { Followers } from '../../Data/FollowersData';

export default function FollowersCard() {
  return (
    <div className='FollowersCard'>
        <h3>Who is following you</h3>

        {Followers.map((follower, id) => {
            return (
                <div key={follower.username} className='Follower'>
                    <div>
                        <img src={follower.img} alt='' className='FollowerImg' />
                        <div className='Name'>
                            <span>{follower.name}</span>
                            <span>@{follower.username}</span>
                        </div>
                    </div>
                    <button className='button fc-button'>
                        Follow
                    </button>
                </div>
            );
        })}
    </div>
  )
}
