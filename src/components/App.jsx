import { Profile } from 'components/Profile/Profile';
import user from '../user';

export const App = () => {
  return <div><Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/></div>;
};
