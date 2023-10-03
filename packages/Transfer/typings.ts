interface ITransferItem {
  id: number
  label?: string
  disabled?: boolean
}

interface ITransferProp {
  data?: ITransferItem[]
  rightTitle?: string
  leftTitle?: string
  emptyKeyWords?: string
  modelValue?: ITransferItem[]
}

export { ITransferItem, ITransferProp }
