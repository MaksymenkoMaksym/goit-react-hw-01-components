import PropTypes from "prop-types";
import Statistic from "../Statistic/Statistic";
import css from './Statistics.module.css';

const Statistics = ({ collection, title }) => (
    < section className={css.statisticSection}>
        {title && (<h2 className={css.title}>{title}</h2>)}
        <ul className={css.statList}>
            {collection.map(({ id, label, percentage }) => (
                <Statistic
                    key={id}
                    label={label}
                    percentage={percentage} />
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