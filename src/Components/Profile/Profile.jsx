import { useEffect } from 'react'
import { useUsers } from '../../store/useUsers'
import ProfileTitle from '../ProfileTitle/ProfileTitle'
import ProfileContent from '../ProfileContent/ProfileContent'

export default function Profile(){
    const { users } = useUsers()
    useEffect(() => {
        console.log(users)
    }, [users])

    return(
        <div className='profile'>
            <ProfileTitle users={users} />
            <ProfileContent users={users} />
        </div>
    )
}