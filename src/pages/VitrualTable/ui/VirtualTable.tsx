import { FixedSizeGrid as Grid } from 'react-window';
import { useSelector } from 'react-redux';
import { getTableData } from '../model/selectors/getTableData';
import { VirtualTableCell } from './VirtualTableCell';

export const VirtualTable = () => {
  const tableData = useSelector(getTableData);

  return (
    <>
      <h1>Virtual Table</h1>

      <Grid
        className="Grid"
        columnCount={6}
        columnWidth={160}
        height={150}
        rowCount={tableData.length}
        rowHeight={35}
        width={1060}
      >
        {VirtualTableCell}
      </Grid>
    </>
  );
}