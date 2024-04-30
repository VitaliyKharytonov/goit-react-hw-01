import TransactionHistoryElem from "../TransactionHistoryElem/TransactionHistoryElem"
import css from "./TransactionHistory.module.css"

export default function TransactionHistory({ items }) {
    return (
<table className={css.conteiner}>
    <thead>
        <tr className={css.tr}>
            <th className={css.th}>Type</th>
            <th className={css.th}>Amount</th>
            <th className={css.th}>Currency</th>
        </tr>
    </thead>
            
<TransactionHistoryElem items={items} />
</table>)
}