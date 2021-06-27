import { useState, useMemo, useCallback } from "react";

import { Item } from './components/Item'

function App() {
  const [items, setItems] = useState<string[]>([])
  const [, setWishlist] = useState<string[]>([])
  const [newItem, setNewItem] = useState('')

  function addItemToList() {
    setItems([...items, `Item ${items.length}`])

    setNewItem('')
  }

  const addItemToWishlist = useCallback((item: string) => {
    setWishlist(state => [...state, item])
  }, [])

  const countItemsWithOne = useMemo(() => {
    console.log('render countItemsWithOne');
    
    return items.filter(item => item.includes('1')).length
  }, [items]) 
 
  /*
  const countItemsWithOne = () => {
    console.log('render countItemsWithOne');
    
    return items.filter(item => item.includes('1')).length
  }
  */

  return (
    <div>
      <input type="text" onChange={e => setNewItem(e.target.value)} value={newItem} />
      <button onClick={addItemToList}>
        Add
      </button>
      <ul>
        {items.map((item) => {
          return <Item
            key={item}
            title={item}
            onAddWishlist={addItemToWishlist} 
            countItemsWithOne={countItemsWithOne}
          />
        })}
      </ul>
      <div>
        Contagem: {countItemsWithOne}
      </div>
    </div>
  );
}

export default App;
