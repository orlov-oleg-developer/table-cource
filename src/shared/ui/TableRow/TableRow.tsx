import { memo } from "react";

interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  children: React.ReactNode;
}

export const TableRow = memo(({
  children,
  ...props
}: TableRowProps) => {
  return (
    <tr {...props}>
      {children}
    </tr>
  )
})