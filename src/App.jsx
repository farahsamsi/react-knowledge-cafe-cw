import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/BookMarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = (time, id) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);

    // remove the read blog from bookmark
    // console.log('remove id', id)
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  }


  return (
    <main className='w-11/12 mx-auto'>
      <Header></Header>
      <div className='md:flex'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </main>
  )
}

export default App
