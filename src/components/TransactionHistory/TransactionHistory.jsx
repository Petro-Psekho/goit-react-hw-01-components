import PropTypes from 'prop-types';
import css from 'components/TransactionHistory/TransactionHistory.module.css';

export const TransactionHistory = ({items}) => {
  return (
    <table className={css.transactionHistory}>
  <thead className={css.tableHeader}>
    <tr>
      <th className={css.tableHeaderItem}>Type</th>
      <th className={css.tableHeaderItem}>Amount</th>
      <th className={css.tableHeaderItem}>Currency</th>
    </tr>
  </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
        <tr key={id} className={css.tableData}>
            <td className={css.tableDataItem}>{type}</td>
            <td className={css.tableDataItem}>{amount}</td>
            <td className={css.tableDataItem}>{currency}</td>
        </tr>
      ))}
  </tbody>
</table>
  )
}


TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      
    })
  ),
};

