import css from './profile.module.css'
export default function Profile({ userData }) {
    
    return (
      <div className={css.profile}>
        <div className={css.description}>
        <img
           src={userData.avatar}
           alt="User avatar"
           className={css.avatar}
    />
          <p className={css.name}>{userData.username }</p>
          <p className={css.tag}>@{userData.tag}</p>
          <p className={css.location}>{userData.location}</p>
       </div>

  <ul className={css.stats}>
    <li className={css.statsItem}>
      <span className={css.label}>Followers </span>
      <span className={css.quantity}>{userData.stats.followers}</span>
    </li>
    <li className={css.statsItem}>
      <span className={css.label}>Views </span>
      <span className={css.quantity}>{userData.stats.views}</span>
    </li>
    <li className={css.statsItem}>
      <span className={css.label}>Likes </span>
      <span className={css.quantity}>{userData.stats.likes}</span>
    </li>
  </ul>
</div>
    )
}