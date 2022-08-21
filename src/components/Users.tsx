import { useSelector } from 'react-redux'
import '../componentstylesheets/RepoNUser.scss'

function Users() {
  console.log("users");
   const users:any = useSelector((state)=>state)
   const usersList = users?.allUsers?.users
  return (
    <div className='grid-view'>
      {usersList.map((user:any) =>(
        <div className="card" key={user?.id}>
        <div className="card__cover">
          <img className='card__cover__img' src={user?.avatar_url} alt={user?.login}/>
        </div>
        <div className="card__body">
          <div className="card__title">{user?.login}</div>
        </div>
      </div>
      ))}
    </div>
  )
}

export default Users