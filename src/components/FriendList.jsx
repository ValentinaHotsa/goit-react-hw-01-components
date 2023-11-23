import friends from 'data/friends.json'
import css from "./friendList.module.css";
// function IsOnline({ isOnline }) {
   
//                 if (isOnline === true) {
//     <span>🟢</span>
// } else {
//     <span>🔴</span>
// }

    
    // }
// const friendItem = friends.map(({avatar, name, isOnline, id}) =>
//         <li key={friend.id} className={css.item}>
//         <span className={css.status}>{friend.status}</span>
//   <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
//   <p className={css.name}>{friend.name}</p>
//     </li>)
        
// export default function FriendList () {
     
//     return (
//         <section className={css.friendList}>
//             <h2 className={css.title}>My friends</h2>
//             <ul className={css.friendList}>{friendItem}</ul>
//         </section>
       
//     )
// }


// const friendItem = friends.map(friend =>
//         <li key={friend.id} className={css.item}>
//         <span className={css.status}>{friend.status}</span>
//   <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
//   <p className={css.name}>{friend.name}</p>
//         </li>)
// export const FriendList = ({ friends }) => {
//     return (
//         <ul className="friend-list"></ul>
//     )
// }
export const FriendList = ({ friends }) => {
    return (
        <ul className="friend-list">
            {friends.map(({ avatar, name, isOnline, id }) => (
                <FriendListItem
                    key={id}
                    status={isOnline}
                    avatar={avatar}
                    name={name}
                />
))}
</ul>
    )
}
export const FriendListItem = ({ friends }) => {
    return (<li key={friends.id} className={css.item}>
        <span className={css.status}>{friends.status}</span>
  <img className={css.avatar} src={friends.avatar} alt="User avatar" width="48" />
  <p className={css.name}>{friends.name}</p>
    </li>)
}
