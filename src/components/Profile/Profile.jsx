import PropTypes from "prop-types";
import { FaUserAstronaut, FaHashtag } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';


import css from './Profile.module.css'

const Profile = ({ avatar, username, tag, stats: { views, likes, followers }, location }) => {
    return (<div className={css.profile}>
        <div className={css.description}>
            <img
                src={avatar}
                alt="User avatar"
                className={css.avatar}
            />
            <p className={css.username}><FaUserAstronaut size={16} color={"red"} />&nbsp;{username}</p>
            <p className={css.tag}><FaHashtag size={16} color={"red"} />&nbsp;{tag}</p>

            <p className={css.location}><HiOutlineLocationMarker size={16} color={"red"} />&nbsp;{location}</p>
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
    </div>)
}
Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
    location: PropTypes.string.isRequired,
};
export default Profile;