import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Overview,  Revenue, Users } from './pages/Overview';
import Sidebar from './compontent/Sidebar';
import './App.css'
import {Reports, ReportsOne, ReportsThree, ReportsTwo, } from './pages/Reports';
import {Messages,  MessagesOne, MessagesThree, MessagesTwo } from './pages/Messages';
import Products from './pages/Products';
import Supports from './pages/Supports';
import Team from './pages/Team';

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/overview" element={<Overview />} />
          <Route path="/overview/users" element={<Users />} />
          <Route path="/overview/revenue" element={<Revenue />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/messages/messages1" element={<MessagesOne />} />
          <Route path="/messages/messages2" element={<MessagesTwo />} />
          <Route path="/messages/messages3" element={<MessagesThree />} />
          <Route path="/products" element={<Products />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/reports/reports1" element={<ReportsOne />} />
          <Route path="/reports/reports2" element={<ReportsTwo />} />
          <Route path="/reports/reports3" element={<ReportsThree />} />
          <Route path="/support" element={<Supports />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
