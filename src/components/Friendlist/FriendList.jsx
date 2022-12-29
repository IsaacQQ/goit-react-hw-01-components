import React from 'react';
import styles from './Friendlist.module.css'

export default function FriendList ({ friends }) {
    return(
    <ul className={styles.friend_list}>
    {friends.map(friend => (
      <li className={styles.item} key={friend.id}>
        <span
          className={
            friend.isOnline ? styles.statusOnline : styles.statusOffline
          }
        ></span>
        <img className={styles.avatar} src={friend.avatar} alt="" width="48" />
        <p className={styles.name}>{friend.name}</p>
      </li>
    ))}
  </ul>)
        }