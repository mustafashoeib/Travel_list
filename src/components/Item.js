export default function Item({ item, onDeleteItem, onToggleUpdate }) {
  return (
    <li>
      <input
        checked={item.packed}
        type="checkbox"
        onChange={() => onToggleUpdate(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-Through" } : {}}>
        {item.description} {item.quantity}
        <button onClick={() => onDeleteItem(item.id)}>❌</button>
      </span>
    </li>
  );
}
