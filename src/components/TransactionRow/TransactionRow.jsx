import PropTypes from 'prop-types'
const TransactionRow = ({ currency, amount, type }) => (
    <tr>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
    </tr>
)

TransactionRow.propTypes = {
    currency: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
}
export default TransactionRow;
