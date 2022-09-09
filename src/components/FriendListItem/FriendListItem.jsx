import PropTypes from "prop-types";
import css from './FriendListItem.module.css';


const FriendListItem = ({ avatar, name, isOnline = true }) => (

    <li className={css.item}>
        <span className={isOnline ? css.online : css.offline}></span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
    </li>
)

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}
export default FriendListItem;
/*

Компонент должен принимать несколько пропов:

avatar - ссылка на аватар
name - имя друга
isOnline - буль сигнализирующий о состоянии друга, в сети или нет.
В зависимости от пропа isOnline, должен меняться цвет фона span.status. Это можно сделать через разный CSS-класс или Styled Components.

*/