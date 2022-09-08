
const Statistic = ({ collection, title }) => (
    < section >
        {title && (<h2 className="title">{title}</h2>)}
        <ul className="stat-list">
            {collection.map(({ id, label, percentage }) => (
                <li key={id} className="item">
                    <span className="label">{label}</span>
                    <span className="percentage">{percentage}</span>
                </li>
            ))}
        </ul>
    </section >
)



export default Statistic;