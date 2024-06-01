export interface options {
  direction?: number
  locale?: string
  draggable?: boolean
  editable?: boolean
  contextMenu?: boolean
  contextMenuOption?: any
  toolBar?: boolean
  keypress?: boolean
  mouseSelectionButton?: 0 | 2
  before?: Before
  newTopicName?: string
  allowUndo?: boolean
  overflowHidden?: boolean
  mainLinkStyle?: number
  subLinkStyle?: number
  mobileMenu?: boolean
  theme?: Theme
  nodeMenu?: boolean
}

export type onOperation = ({
  render,
  info,
}: {
  render: MindElixirInstance
  info: Operation
}) => void

export type onSelectNode = (
  { render, nodeObj }: { render: MindElixirInstance; nodeObj: NodeObj },
  e?: MouseEvent,
) => void

export type selectNewNode = ({
  render,
  nodeObj,
}: {
  render: MindElixirInstance
  nodeObj: NodeObj
}) => void

export type selectNodes = ({
  render,
  nodeObj,
}: {
  render: MindElixirInstance
  nodeObj: NodeObj[]
}) => void

export type unselectNodes = ({ render }: { render: MindElixirInstance }) => void

export type expandNode = ({
  render,
  nodeObj,
}: {
  render: MindElixirInstance
  nodeObj: NodeObj
}) => void

export interface NodeObj {
  topic: string
  id: Uid
  style?: {
    fontSize?: string
    color?: string
    background?: string
    fontWeight?: string
  }
  children?: NodeObj[]
  tags?: string[]
  icons?: string[]
  hyperLink?: string
  expanded?: boolean
  direction?: number
  root?: boolean
  image?: {
    url: string
    width: number
    height: number
  }
  branchColor?: string
  parent?: NodeObj
}
