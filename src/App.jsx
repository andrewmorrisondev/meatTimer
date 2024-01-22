import { Routes, Route, useNavigate } from 'react-router-dom'

// pages
import SetupPage from './Pages/SetupPage/SetupPage'
import CookPage from './Pages/CookPage/CookPage'

// css
import './App.css'

function App() {

    return (
        <Routes>
            <Route path="/" element={<SetupPage />} />
            <Route path="/countdown" element={<CookPage />} />
        </Routes>
    )

}

export default App
