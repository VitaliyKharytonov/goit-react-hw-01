import clsx from "clsx";
import css from"./FriendListItem.module.css"


export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
    return (<>
        <img className={css.image} src={avatar} alt="Avatar" width="48" />
        <p className={css.name}>{name}</p>
        <p className={clsx(css.text,isOnline ? css.online : css.offline  )}>{isOnline ? "Online" : "Offline" }</p>
    </>)
}