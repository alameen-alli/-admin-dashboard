import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { FiSettings } from 'react-icons/fi';
import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Calendar, ColorPicker, Customers, Ecommerce, Editor, Employees, Kanban, Orders } from './pages';
import Line from './pages/Charts/Line';
import Area from './pages/Charts/Area';
import Bar from './pages/Charts/Bar';
import Pie from './pages/Charts/Pie';
import { useStateContext } from './contexts/ContextProvider';

function App() {
  const { activeMenu, setActiveMenu, themeSettings, setThemeSettings, currentMode, currentColor } = useStateContext();


  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
            <TooltipComponent content={`${themeSettings ? '' : 'Settings'}`} position='Top'>
              <button
               className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray'
               style={{ backgroundColor: currentColor, borderRadius: '50%'}}
               onClick={() => setThemeSettings(true)}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>

          {/* if activeMenu is true, sidebar is shown */}
          {activeMenu ? (
            <div className='bg-white w-72 fixed sidebar dark:bg-secondary-dark-bg'>
              <Sidebar />
            </div>)
            :
            //  if activeMenu is false, sidebar is hidden 
            (
              <div className='w-0 dark:bg-secondary-dark-bg'>
                <Sidebar />
              </div>
            )}

          <div className={
            activeMenu
              ? 'dark:bg-main-dark-bg bg-main-bg min-h-screen md:ml-72 w-full'
              : 'bg-main-bg dark:main-dark-bg  w-full min-h-screen flex-2'
          }
          >
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
              <Navbar />
            </div>

            <div>

              {themeSettings && <ThemeSettings />}

              <Routes>

                {/* Dashboard */}
                <Route path='/' element={<Ecommerce />} />
                <Route path='/ecommerce' element={<Ecommerce />} />

                {/* Pages */}
                <Route path='/orders' element={<Orders />} />
                <Route path='/employees' element={<Employees />} />
                <Route path='/customers' element={<Customers />} />

                {/* Apps */}
                <Route path='/kanban' element={<Kanban />} />
                <Route path='/editor' element={<Editor />} />
                <Route path='/calendar' element={<Calendar />} />
                {/* <Route path='/color-picker' element={<ColorPicker />} /> */}

                {/* Charts */}
                <Route path='/line' element={<Line />} />
                <Route path='/area' element={<Area />} />
                <Route path='/bar' element={<Bar />} />
                <Route path='/pie' element={<Pie />} />
                <Route path='/financial' element="Financial" />
                <Route path='/color-mapping' element="Color-Mapping" />
                <Route path='/pyramid' element="" />
                <Route path='/stacked' element="Stacked" />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;
