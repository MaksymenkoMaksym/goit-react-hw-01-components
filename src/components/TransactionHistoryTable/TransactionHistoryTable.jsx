import PropTypes from 'prop-types';
import TransactionRow from "../TransactionRow/TransactionRow"

import css from './TransactionHistoryTable.module.css';

const TransactionHistoryTable = ({ transactions }) => (
    <table className={css.transactionHistory}>
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>
        <tbody>
            {transactions.map(
                ({ id, currency, amount, type }) => (
                    <TransactionRow
                        key={id}
                        currency={currency}
                        amount={amount}
                        type={type} />
                )
            )
            }
        </tbody>
    </table>
)

TransactionHistoryTable.prototypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({ id: PropTypes.string.isRequired })
    )
}

export default TransactionHistoryTable;

