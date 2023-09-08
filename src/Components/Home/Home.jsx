import { useState } from 'react'
import { usePosts } from '../../store/usePosts'
import './Home.css'
import {FaUserCircle} from 'react-icons/fa'
import HomePost from '../HomePost/HomePost'

export default function Home(){
    const {posts, push} = usePosts()

    const [inputValue, setInputValue]  = useState('')
    const inputChangeHandler = e => {
        setInputValue(e.target.value)
    }

    const createNewPost = () => {
        push(1, inputValue)
        setInputValue('')
    }

    return(
        <div className='home'>
            <div className='home--title'>Home</div>
            <div className='home--input'>
                <FaUserCircle />
                <input value={inputValue} onChange={inputChangeHandler} type="text" placeholder='What is happening?!' />
                <button onClick={createNewPost} className='home--tweet'>Tweet</button>
            </div>
            <HomePost />
        </div>
    )
}