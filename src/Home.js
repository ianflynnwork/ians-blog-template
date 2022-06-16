import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'The New world', body: 'get ready...', author: 'the one and only', id: 1},
        {title: 'Wasteland', body: 'its humid in here...', author: 'Ian', id: 2},
        {title: 'Moving out of this hellscape', body: 'leave your shit...', author: 'Neo', id: 3},
    ]);
const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs)
}
useEffect(() => {
    console.log('use effect ran')
})
    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
        </div>
     );
}
 
export default Home; 