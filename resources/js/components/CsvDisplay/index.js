
import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper';
import { 
  Grid,
  Table, 
  TableHeaderRow,
  Toolbar,
  SearchPanel,
  TableColumnResizing
} from '@devexpress/dx-react-grid-material-ui';
import {
  SortingState,
  IntegratedSorting,
  SearchState,
  IntegratedFiltering,
} from '@devexpress/dx-react-grid';
import { alpha } from '@material-ui/core/styles'

const CsvDisplay = (props) => {
  const { camperData } = props
  const [columns] = useState([
    { name: 'camperMake', title: 'Camper Make' },
    { name: 'camperBrand', title: 'Camper Brand' },
    { name: 'sleepNumber', title: 'Sleep Number' },
    { name: 'price', title: 'Price' },
  ]);
  const [sorting, setSorting] = useState([{ columnName: 'camperMake', direction: 'asc' }]);
  const [defaultColumnWidths] = useState([
    { columnName: 'camperMake', width: 180 },
    { columnName: 'camperBrand', width: 180 },
    { columnName: 'sleepNumber', width: 180 },
    { columnName: 'price', width: 240 },
  ]);

  if (camperData.length > 0) {

const columns = [
  { name: 'camperMake', title: 'Camper Make' },
  { name: 'camperBrand', title: 'Camper Brand' },
  { name: 'sleepNumber', title: 'Sleep Number' },
  { name: 'price', title: 'Price' }
];

//populate rows from csv data response
const rows = camperData.map(rowData => ({
         camperMake: rowData.camperMake,
         camperBrand: rowData.camperBrand,
         sleepNumber: rowData.sleepNumber,
         price: rowData.price
        }));

    return <Paper>
      <Grid
        rows={rows}
        columns={columns}
      >
        <SearchState/>
        <IntegratedFiltering />
        <SortingState
          sorting={sorting}
          onSortingChange={setSorting}
        />
        <IntegratedSorting />
        <Table />
        <TableColumnResizing defaultColumnWidths={defaultColumnWidths} />
        <TableHeaderRow showSortingControls />
        <Toolbar />
        <SearchPanel />
      </Grid>
    </Paper>
    // }
  } else {
    return (<h3>Data will be displayed after CSV upload!</h3>)
  }

}
export default CsvDisplay
