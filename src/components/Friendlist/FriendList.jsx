import React from 'react';
import cs from './Friendlist.style.css'

export default function FriendList ({ friends }) {
    return(
    <ul className={cs.friend_list}>
    {friends.map(friend => (
      <li className={cs.item} key={friend.id}>
        <span
          className={
            friend.isOnline ? cs.statusOnline : cs.statusOffline
          }
        ></span>
        <img className={cs.avatar} src={friend.avatar} alt="" width="48" />
        <p className={cs.name}>{friend.name}</p>
      </li>
    ))}
  </ul>)
        }