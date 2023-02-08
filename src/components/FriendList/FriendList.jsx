import PropTypes from 'prop-types';
import { networkStatus } from 'components/utils/networkStatus';
import { colorStatus } from 'components/utils/colorStatus';
import css from 'components/FriendList/FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id} className={css.item}>
          <div className={css.wrapper}>
            <img
              className={css.avatar}
              src={avatar}
              alt="User avatar"
              width="48"
            />
            <span
              className={css.status}
              style={{
                color: colorStatus(isOnline),
              }}
            >
              {networkStatus(isOnline)}
            </span>
          </div>
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
