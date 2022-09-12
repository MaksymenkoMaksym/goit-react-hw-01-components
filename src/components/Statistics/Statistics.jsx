import PropTypes from "prop-types";
import Statistic from "../Statistic/Statistic";
import css from './Statistics.module.css';

const Statistics = ({ collection, title }) => (
    < section className={css.statisticSection}>
        {title && (<h2 className={css.title}>{title}</h2>)}
        <ul className={css.statList}>

            {collection.map(({ id, label, percentage }) => (
                <li key={id}>
                    <Statistic
                        label={label}
                        percentage={percentage} />
                </li>

            ))}
        </ul>
    </section >
)

Statistics.propTypes = {
    title: PropTypes.string,
    collection: PropTypes.arrayOf(
        PropTypes.shape({ id: PropTypes.string.isRequired }))
}
export default Statistics;