import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/BookMarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {


  return (
    <main>
      <Header></Header>
      <div className='md:flex'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </main>
  )
}

export default App
