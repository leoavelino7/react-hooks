type ItemProps = {
  title: string
}

export function Item({title}: ItemProps) {
  return <li>{title}</li>
}