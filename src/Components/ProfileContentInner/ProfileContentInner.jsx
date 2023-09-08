import './ProfileContentInner.css'
import {BsCalendarDate} from 'react-icons/bs'

export default function ProfileContentInner({ users }){
    return(
        <div style={{marginTop:'20px'}}>
            <p className='username'>{users[0].userName} {users[0].userSurname}</p>
            <p className='nickname'>{users[0].nickname}</p>
            <div className='date' style={{}}>
                <BsCalendarDate /> 
                <span>Joined</span>
                {users[0].joinedDate}
            </div>
            <div className='follow' style={{}}>
                <span> <span style={{fontWeight:'700'}}>{users[0].following}</span>  following</span>
                <span> <span style={{fontWeight:'700'}}>{users[0].followers}</span> followers</span>
            </div>
        </div>
    )
}