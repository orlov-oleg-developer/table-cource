export type SortType = 'asc' | 'desc' | 'default'

export type TableHeaderCell<RowType> = {
  key: keyof RowType,
  kind: 'string' | 'number' | 'select',
  title: string,
  options?: { value: string, name: string, disabled?: boolean }[],
  onSort?: (type: SortType) => void;
}

export type TableHeader<RowType> = TableHeaderCell<RowType>[]
