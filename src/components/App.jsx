//profile
import Profile from "./Profile/Profile";
import user from '../data/user.json'
//profile

//statistics
import Statistics from "./Statistics/Stats";
import data from '../data/data.json'
//statistics

//FriendList
import FriendList from "./Friendlist/FriendList";
import friends from '../data/friends.json'
//FriendList

//Transiction history
import Transaction from "./Transaction/Transaction";
import transactions from "../data/transactions.json"
//Transiction history
export function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends}/>
      <Transaction items={transactions}/>
    </>
  );
}