import { IItemData } from '../types/ActionMenu'

let foo: IItemData = {}
console.log(foo)

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
   Tiny Types
  </div>
`
