import './ProfileContent.css'
import {FaUserCircle} from 'react-icons/fa'
import ProfileContentInner from '../ProfileContentInner/ProfileContentInner'

export default function ProfileContent({ users }){
    return(
        <div style={{marginTop:'10px'}}>
            <div className='background'></div>
            <div className='content'>
                <div className='photo'>
                    <FaUserCircle />
                </div>
                <ProfileContentInner users={users} />
            </div>
            
        </div>
    )
}