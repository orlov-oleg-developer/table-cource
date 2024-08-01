export type SortType = 'up' | 'down' | 'default'

export type TableHeader<RowType> = {
  key: keyof RowType,
  kind: 'string' | 'number' | 'select',
  title: string,
  options?: { value: string, name: string, disabled?: boolean }[],
  onSort?: (type: SortType) => void;
  onFilter?: () => void;
}[]

