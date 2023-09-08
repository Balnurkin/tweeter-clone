import { usePosts } from '../../store/usePosts'
import './HomePost.css'
import {FaUserCircle} from 'react-icons/fa'
import { useEffect } from 'react'

export default function HomePost(){
    const { posts } = usePosts()
    useEffect(() => {
        console.log(posts);
    }, [posts])

    const formatDate = (date) => {
        const options = {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        };
        return new Date(date).toLocaleDateString('en-US', options);
    };

    return(
        <div className="home--post">
            {posts.map((post) => {
                return <div className='post'>
                    <FaUserCircle />
                    <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
                        <p style={{fontSize: '18px'}}>{post.postText}</p>
                        <p style={{fontSize:'12px'}}>{formatDate(post.publishTime)}</p>
                    </div>
                </div>
            })}
        </div>
    )
}