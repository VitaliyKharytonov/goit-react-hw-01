import UserStatus from "../UserStatus/UserStatus"
import css from "./UserProfile.module.css"

export default function UserProfile({ data:{username,tag,location,avatar,stats}}) {
    return (<div className={css.container}>
      <img className={css.image}
      src={avatar}
      alt="User avatar"
       />
        <p className={css.name}>{username}</p>
      <p className={css.text}>@{tag}</p>
        <p className={css.text}>{location}</p>
        <UserStatus stats={stats}/>
    </div>) }