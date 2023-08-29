import React from 'react';
import Cover from '../../img/cover.jpg';
import Profile from '../../img/profileImg.jpg';
import './ProfileCard.css';

export default function ProfileCard() {
  return (
    <div className='ProfileCard'>
        <div className='ProfileImages'>
            <img src={Cover} alt='' />
            <img src={Profile} alt='' />
        </div>

        <div className='ProfileName'>
            <span>Full Name</span>
            <span>Profile Status</span>
        </div>

        <div className='FollowStatus'>
            <hr/>
            <div>
                <div className="Follow">
                    <span>3732</span>
                    <span>Following</span>
                </div>
                <div className="vl"></div>
                <div className="Follow">
                    <span>8</span>
                    <span>Followers</span>
                </div>
            </div>
            <hr/>
        </div>

        <span>
            My Profile
        </span>
    </div>
  )
}
