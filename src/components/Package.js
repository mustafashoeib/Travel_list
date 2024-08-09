import { useState } from "react";
import  Item from "./Item";

export default function Package({
  items,
  onDeleteItem,
  onToggleUpdate,
  onClearAllItems,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortItems;

  if (sortBy === "input") sortItems = items;

  if (sortBy === "description")
    sortItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleUpdate={onToggleUpdate}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sorted By Input</option>
          <option value="description">Sorted By Description</option>
          <option value="packed">Sorted By Packed</option>
        </select>
        <button onClick={onClearAllItems}>Clear All Items</button>
      </div>
    </div>
  );
}
