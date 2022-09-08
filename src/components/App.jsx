import Profile from './Profile'
import Statistic from './Statistic'
import user from '../users/user.json';
import data from '../users/data.json';
export const App = () => {

  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistic
        collection={data}
      />
      <Statistic title="Upload stats" collection={data} />
      {/* <Statistic stats={data} /> */}
    </div>
  );
};
    // <Profile
    //   username={user.username}
    //   tag={user.tag}
    //   location={user.location}
    //   avatar={user.avatar}
    //   stats={user.stats}
    // />