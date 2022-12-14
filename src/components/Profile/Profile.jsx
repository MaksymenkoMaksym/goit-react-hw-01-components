import PropTypes from 'prop-types';
import { FaUserAstronaut, FaHashtag } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import iconSize from '../../constants/constants';

import css from './Profile.module.css';

const Profile = ({
  avatar,
  username,
  tag,
  stats: { views, likes, followers },
  location,
}) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.username}>
          <FaUserAstronaut size={iconSize.sm} color={'red'} />
          &nbsp;{username}
        </p>
        <p className={css.tag}>
          <FaHashtag size={iconSize.sm} color={'red'} />
          &nbsp;{tag}
        </p>

        <p className={css.location}>
          <HiOutlineLocationMarker size={iconSize.sm} color={'red'} />
          &nbsp;{location}
        </p>
      </div>

      <ul className={css.stats}>
        <li className={css.stats__item}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}> {followers}</span>
        </li>
        <li className={css.stats__item}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}> {views}</span>
        </li>
        <li className={css.stats__item}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}> {likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  stats: PropTypes.objectOf({
    views: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
    likes: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
    followers: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
  }).isRequired,
  location: PropTypes.string.isRequired,
};
export default Profile;
