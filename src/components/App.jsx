import user from '../data/user.json'
import data from '../data/data.json'
import friends from '../data/friends.json'
import Profile from './profile.jsx'
import Statistics from './Statistics.jsx'
import { FriendList } from './FriendList.jsx'
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
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