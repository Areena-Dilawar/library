import { Routes, Route } from 'react-router-dom'
import Welcome from './Pages/Welcome'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import BookPage from './Pages/BookPage'
import Edit from './Pages/Edit'
function App() {

  return (
    <> 
      <div>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/bookpage' element={<BookPage />} />
          <Route path='/edit' element={<Edit />} />
        </Routes>
      </div>
    </>
  )
}

export default App
