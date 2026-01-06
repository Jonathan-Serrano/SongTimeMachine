import './App.css'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import type { GridColDef } from '@mui/x-data-grid';
import songs from '../data/result.json';

const columns: GridColDef<(typeof songs)[number]>[] = [
  { field: 'master_metadata_track_name', 
    headerName: 'Track Name', 
    width: 360
  },
  {
    field: 'master_metadata_album_artist_name',
    headerName: 'Artist',
    width: 240,
  },
  {
    field: 'count',
    headerName: 'Count',
    type: 'number',
    width: 150,
    headerAlign: 'left',
    align: 'left',
  },
  {
    field: 'first_played',
    headerName: 'First Played',
    // type: 'dateTime',
    width: 200,
  },
  {
    field: 'last_played',
    headerName: 'Last Played',
    // type: 'dateTime',
    width: 200,
  },
];

// const rows = songs


function App() {

  return (
    <Box sx={{ height: '70vh', width: '80%', display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mt: '5vh', maxWidth: "1210px"}}>
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
        pageSizeOptions={[5, 10, 100]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}

export default App
