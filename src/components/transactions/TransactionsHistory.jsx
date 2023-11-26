import transactions from '../transactions/transactions.json'
import css from './transactionsHistory.module.css';
export default function TransactionHistory() {
    const tableItem = transactions.map(({ id, type, amount, currency }) => 
         <tr key= {id} className={css.tableBodyData}>
                    <td className={css.tableBodyItem}>{type}</td>
                    <td className={css.tableBodyItem}>{amount}</td>
                    <td className={css.tableBodyItem}>{currency}</td>
         </tr>
    )
    return (
        <table className={css.table}>
            <thead className={css.tableHeadContainer}>
                  <tr className={css.tableHead}>
                       <th scope="col" className={css.tableHeadItem}>Type</th>
                       <th scope="col" className={css.tableHeadItem}>Amount</th>
                       <th scope="col" className={css.tableHeadItem}>Currency</th>
                  </tr>
            </thead>
            
            <tbody className={css.tableBody}>
               {tableItem}
            </tbody>

        </table>
    )
}
