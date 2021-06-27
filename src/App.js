import Profile from './Profile';
import Statistics from './Statistics';
import user from './data/user.json';
import statisticalData from './data/statistical-data.json';

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
    </>
  );
}

export default App;
