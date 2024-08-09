import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import Package from "./Package";
import Stats from "./Stats";
import { useLocalStorageState } from "./useLocalStorageState";

export default function App() {
  const [items, setItem] = useLocalStorageState([], "items");

  function handleAddItem(item) {
    setItem((items) => [...items, item]);
  }

  function handleDelete(id) {
    setItem((items) => items.filter((items) => items.id !== id));
  }

  function handleToggleUpdate(id) {
    setItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function clearAllItems() {
    // items.splice(0, items.length);
    setItem([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <Package
        items={items}
        onDeleteItem={handleDelete}
        onToggleUpdate={handleToggleUpdate}
        onClearAllItems={clearAllItems}
      />
      <Stats items={items} />
    </div>
  );
}
