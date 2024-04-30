import css from "./TransactionHistoryElem.module.css"

export default function TransactionHistoryElem({ items }) {
    return (
        <tbody>
            {items.map(({id,type,amount,currency}) => (
                <tr className={css.tr} key={id}>
                    <td className={css.td}>{type}</td>
                    <td className={css.td}>{amount}</td>
                    <td className={css.td}>{currency}</td>
                 </tr>))
            }
        </tbody>
    )
}