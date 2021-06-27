import { memo } from 'react'

type ItemProps = {
  title: string
  onAddWishlist: (item: string) => void
  countItemsWithOne: number
}

function ItemComponent({title, onAddWishlist, countItemsWithOne}: ItemProps) {
  return (
    <li>
      {title} - {countItemsWithOne}
      <button onClick={() => onAddWishlist(title)}>Add to wisthlist</button>
    </li>
  )
}

export const Item = memo(ItemComponent)