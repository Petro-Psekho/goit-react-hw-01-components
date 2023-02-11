import PropTypes from 'prop-types';
import { networkStatus } from 'utils/networkStatus';

import css from 'components/FriendListItem/FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li key={id} className={css.item}>
      <div className={css.wrapper}>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <span className={isOnline ? css.online : css.offline}>
          {networkStatus(isOnline)}
        </span>
      </div>
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number,
};
