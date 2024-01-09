
import './App.css'
import News from './components/News/News'
import AsideAdd from './components/AsideAdd/AsideAdd'
import Search from './components/Search/Search'
import HorizontalAdd from './components/HorizontalAdd/HorizontalAdd'
import Weather from './components/Weather/Weather'
import Popular from './components/Popular/Popular'
import Tv from './components/Tv/Tv'
import TvNow from './components/TvNow/TvNow'
import Map from './components/Map/Map'
import { tvList, newsList, asideAdd, category, popular, tvChanel } from './data/data'







function App() {

  return (
    <div>
       <div className='header'>
        <News newsList={newsList} /> {/*компонент новостей */ }
        <AsideAdd asideAdd={asideAdd}/> {/*компонент бокового рекламного блока */ }
      </div>
      <Search category={category}/> {/*компонент строки поиска и категорий */ }
      <HorizontalAdd/> {/*компонент горизонтальной рекламы */ }
      <div className='blocks'>
        <div className='col1'>
          <Weather /> {/*компонент погоды */ }
          <Popular popular={popular} />  {/*компонент популярных посещений */ }
        </div>
        <div className='col2'>
          <Map/> {/*компонент карты */ }
          <Tv tvChanel={tvChanel}/> {/*компонент тв передач */ }
        </div>
        <div className='col3'>
          <TvNow tvList={tvList}/> {/*компонент тв эфира */ } 
        </div>

      </div>
    </div>
   
  )
  
}
export default App


