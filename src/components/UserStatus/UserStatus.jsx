import css from "./UserStatus.module.css"


export default function UserStatus({ stats: { followers, views, likes } }) {
    return (
        <ul className={css.container}>
            <li className={css.item}>
      <span>Followers</span>
      <span className={css.text}>{followers}</span>
    </li>
    <li className={css.item}>
      <span>Views</span>
      <span className={css.text}>{views}</span>
    </li>
    <li className={css.item}>
      <span>Likes</span>
      <span className={css.text}>{likes}</span>
    </li>
    </ul>
)
    
}