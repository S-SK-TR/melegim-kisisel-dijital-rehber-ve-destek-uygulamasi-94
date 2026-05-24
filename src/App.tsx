import { Routes, Route } from 'react-router-dom';
import { AppShell } from './components/layout/AppShell';
import { LovePage } from './features/lovepage/LovePage';

function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<LovePage />} />
        {/* Diğer route'lar buraya eklenebilir */}
      </Routes>
    </AppShell>
  );
}

export default App;