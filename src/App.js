import './App.css';

// MUI imports
import Box from '@mui/material/Box';

// Component imports
import NavBar from './components/nav-bar';
import FabMenu from './components/fab-menu/fab-menu';

function App() {

  const getFabMenuPositionStyles = () => {
    return {
      position: 'absolute',
      bottom: '20px',
      right: '20px'
    };
  };

  return (
    <div className="App">
      <NavBar />
      <Box sx={getFabMenuPositionStyles()}>
        <FabMenu></FabMenu>
      </Box>
    </div>
  );
}

export default App;
