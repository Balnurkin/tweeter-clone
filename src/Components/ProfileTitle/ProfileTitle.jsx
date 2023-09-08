import {BiArrowBack} from 'react-icons/bi'
import './ProfileTitle.css'

export default function ProfileTitle({ users }){
    return(
        <div className='profile--title'>
            <BiArrowBack/>
            <div>
                <span>{users[0].userName} {users[0].userSurname}</span>
                <p> {users[0].tweets} tweets</p>
            </div>
        </div>
    )
}