import './App.css'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import type { GridColDef } from '@mui/x-data-grid';
import songs from '../data/result.json';

const columns: GridColDef<(typeof songs)[number]>[] = [
  { field: 'master_metadata_track_name', 
    headerName: 'Track Name', 
    width: 90 
  },
  {
    field: 'master_metadata_album_artist_name',
    headerName: 'Artist',
    width: 150,
  },
  {
    field: 'count',
    headerName: 'Count',
    width: 150,
  },
  {
    field: 'first_played',
    headerName: 'First Played',
    // type: 'dateTime',
    width: 110,
  },
  {
    field: 'last_played',
    headerName: 'Last Played',
    // type: 'dateTime',
    width: 110,
  },
];

// const rows = songs


function App() {

  return (
    <Box sx={{ height: 400, width: '80%' }}>
      <DataGrid
        rows={songs}
        columns={columns}
        getRowId={(row) => row.spotify_track_uri}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 100,
            },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}

export default App
