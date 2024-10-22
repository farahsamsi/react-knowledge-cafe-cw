import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleAddToBookmark }) => {
    const { title, cover, author, author_img, reading_time, posted_date, hashtags } = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-8 rounded-xl' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between items-center mb-4'>
                <div className='flex items-center'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span className='mr-2'>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)}><CiBookmark></CiBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl mb-4">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func
}

export default Blog;