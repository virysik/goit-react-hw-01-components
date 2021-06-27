import PropTypes from 'prop-types';
import s from './Profile.module.css';

function Profile({ name, tag, location, avatar, stats }) {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt={`Аватар ${name}`} className={s.avatar} />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.tag}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.li}>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{stats.followers}</span>
        </li>
        <li className={s.li}>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{stats.views}</span>
        </li>
        <li className={s.li}>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;

Profile.defaultProps = {
  avatar: 'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg',
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};
