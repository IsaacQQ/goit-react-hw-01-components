import React from 'react';
import css from './Friendlist.module.css'

export default function FriendList ({ friends }) {
    return(
    <ul className={css.friend_list}>
    {friends.map(friend => (
      <li className={css.item} key={friend.id}>
        <span
          className={
            friend.isOnline ? css.statusOnline : css.statusOffline
          }
        ></span>
        <img className={css.avatar} src={friend.avatar} alt="" width="48" />
        <p className={css.name}>{friend.name}</p>
      </li>
    ))}
  </ul>)
        }