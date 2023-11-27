import css from './transactionsHistory.module.css';
export default function TransactionHistory({transactions}) {

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

                {transactions.map(item =>
                   <tr key= {item.id} className={css.tableBodyData}>
                      <td className={css.tableBodyItem}>{item.type}</td>
                      <td className={css.tableBodyItem}>{item.amount}</td>
                      <td className={css.tableBodyItem}>{item.currency}</td>
                   </tr> )}
                
            </tbody>

        </table>
    )
}
