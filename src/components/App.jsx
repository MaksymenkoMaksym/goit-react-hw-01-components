import Profile from './Profile/Profile';
import Statistic from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistoryTable from './TransactionHistoryTable/TransactionHistoryTable';

import user from '../users/user.json';
import data from '../users/data.json';
import friends from '../users/friends.json';
import transacions from '../users/transactions.json';
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
      <FriendList friends={friends} />
      <TransactionHistoryTable transactions={transacions} />
    </div>
  );
};