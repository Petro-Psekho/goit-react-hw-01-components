// import PropTypes from 'prop-types';
import css from 'components/FriendList/FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul classNane={css.friendList} >

      {friends.map(friend => (
        <li key ={friend.id} classNane={css.item}>
  <span classNane={css.status}></span>
  <img classNane={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
          <p classNane={css.name}>{ friend.name}</p>
</li>))}

</ul>
  )
}

  // {
  //   "avatar": "https://cdn-icons-png.flaticon.com/512/1998/1998592.png",
  //   "name": "Mango",
  //   "isOnline": true,
  //   "id": 1812
  // },