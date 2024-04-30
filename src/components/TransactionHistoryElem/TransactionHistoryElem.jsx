import css from "./TransactionHistoryElem.module.css"

export default function TransactionHistoryElem({ items }) {
    return (
        <tbody>
            {items.map(({id,type,amount,currency}) => (
                <tr key={id}>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                 </tr>))
            }
        </tbody>
    )
}