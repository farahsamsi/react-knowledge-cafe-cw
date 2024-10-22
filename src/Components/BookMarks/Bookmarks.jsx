import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';


const Bookmarks = ({ bookmarks, readingTime }) => {

    return (
        <div className="md:w-1/3  ml-4 ">
            <div className='p-3 bg-white'>
                <h3 className="text-2xl text-center">Reading Time : {readingTime}</h3>
            </div>
            <div className='bg-gray-300 rounded-xl py-4'>
                <h2 className="text-2xl text-center">Bookmarked Blogs : {bookmarks.length}</h2>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;