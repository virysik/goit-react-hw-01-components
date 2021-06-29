import Profile from 'components/Profile';
import Statistics from 'components/Statistics';
import FriendList from 'components/FriendList';
import TransactionHistory from 'components/TransactionHistory';
import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
