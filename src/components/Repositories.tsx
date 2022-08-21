import { useSelector } from 'react-redux';
import '../componentstylesheets/RepoNUser.scss'
function Repositories() {
  console.log("repos");
  const repos:any = useSelector((state)=>state)
  const repoList = repos?.allRepos?.repos || []
  console.log(repoList,"repos");
  
 return (
   <div className='grid-view'>
     {repoList.map((user:any) =>(
       <div className="card" key={user?.id}>
       <div className="card__cover">
         <img className='card__cover__img' src={user?.owner?.avatar_url} alt={user?.full_name}/>
       </div>
       <div className="card__body">
         <div className="card__title">{user?.full_name}</div>
       </div>
     </div>
     ))}
   </div>
 )
}

export default Repositories