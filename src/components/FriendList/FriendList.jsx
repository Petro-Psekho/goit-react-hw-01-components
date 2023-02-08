// import PropTypes from 'prop-types';
import PropTypes from 'prop-types';
import css from 'components/FriendList/FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id} className={css.item}>
          <span
            className={css.status}
            style={{
              color: colorStatus(isOnline),
            }}
          >
            {networkStatus(isOnline)}
          </span>
          <img
            className={css.avatar}
            src={avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css.name}>{name}</p>
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

export const colorStatus = isOnline => {
  if (isOnline) {
    return 'green';
  }
  return 'red';
};

export const networkStatus = isOnline => {
  return isOnline ? 'online' : 'offline';
};
