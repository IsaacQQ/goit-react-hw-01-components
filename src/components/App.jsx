import { Profile } from "./Profile/Profile";
import user from '../data/user.json'

export const App = () => {
  console.log(user)
  return (
  <div>
<Profile profile={user[0]}/>
  </div>
  );
};
