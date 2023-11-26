import user from './profile/user.json'
import data from './statistics/data.json'
import friends from './friendList/friends.json'
import transactions from './transactions/transactions.json'
import Profile from './profile/Profile'
import Statistics from './statistics/Statistics.jsx'
import FriendList  from './friendList/FriendList.jsx'
import TransactionHistory from './transactions/TransactionsHistory'
export const App = () => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        
      }}
    >
     <Profile
         username={user.username}
         tag={user.tag}
         location={user.location}
         avatar={user.avatar}
         stats={user.stats}
      />
     <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
     <TransactionHistory items={transactions} />
    </div>
  );
};




// <div className="profile">
//   <div className="description">
//     <img
//       src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
//       alt="User avatar"
//       className="avatar"
//     />
//     <p className="name">Petra Marica</p>
//     <p className="tag">@pmarica</p>
//     <p className="location">Salvador, Brasil</p>
//   </div>

//   <ul className="stats">
//     <li>
//       <span className="label">Followers</span>
//       <span className="quantity">1000</span>
//     </li>
//     <li>
//       <span className="label">Views</span>
//       <span className="quantity">2000</span>
//     </li>
//     <li>
//       <span className="label">Likes</span>
//       <span className="quantity">3000</span>
//     </li>
//   </ul>
// </div>