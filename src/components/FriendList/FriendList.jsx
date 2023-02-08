// import PropTypes from 'prop-types';
import PropTypes from 'prop-types';
import css from 'components/FriendList/FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul classNane={css.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id} classNane={css.item}>
          <span classNane={css.status}></span>
          <img
            classNane={css.avatar}
            src={avatar}
            alt="User avatar"
            width="48"
          />
          <p classNane={css.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
