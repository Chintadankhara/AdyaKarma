import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Quickstart from './assets/Quickstart'
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'
import Hcmlcm from './Aptitude/Maths/Hcmlcm';
import { Average } from './Aptitude/Maths/Average'
import { BoatStreams } from './Aptitude/Maths/BoatStreams'
import { Ages } from './Aptitude/Maths/Ages'
import AptitudeGenerator from './Aptitude/AptitudeGenerator'
import ContextProvider from './assets/AppContext'
import MailEnter from './Components/MailEnter'
import EnterOtp from './Components/EnterOtp'
import { ResetPassword } from './Components/ResetPassword'


function App() {
  // const [isDark, setDark] = useState(() => localStorage.getItem('theme') === 'dark')

  // useEffect(() => {
  //   const root = document.documentElement;
  //   if (isDark) {
  //     root.classList.add('dark');
  //     localStorage.setItem('theme', 'dark');
  //   } else {
  //     root.classList.remove('dark');
  //     localStorage.setItem("'theme", 'light');
  //   }
  // }, [isDark]);
  // {/* <button onClick={()=>setDark(!isDark)} className='p-2 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white'>
  //     {isDark ? 'Light' : 'Dark'} 
  //      </button> */}


  return (

    <>
      <ContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/quickstart/' element={<Quickstart />}>
            <Route path='hcmlcm' element={<Hcmlcm />} />
            <Route path='averages' element={<Average />} />
            <Route path='boatStreams' element={<BoatStreams />} />
            <Route path='ages' element={<Ages />} />
          </Route>
          <Route path='/signin' element={<SignIn />} />
          <Route path='/mailenter' element={<MailEnter />} />
          <Route path='/enterotp' element={<EnterOtp />} />
          <Route path='/resetpassword' element={<ResetPassword />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path="/generate-questions" element={<AptitudeGenerator />} />
        </Routes>
      </ContextProvider>

    </>

  )
}

export default App
