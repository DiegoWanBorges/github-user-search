import Button from '../../core/components/Button'
import './styles.scss'
import {  useState } from 'react';
import InformationGit from './components/InformationGit';
import MakeRequest from '../../core/utils/request';
import { UserGit } from '../../core/types/UserGit';
import SearchLoaders from './components/Loaders';

const Search = () => {
    const[userGit,setUserGit]=useState<UserGit>();
    const[name, setName]=useState('');
    const[isLoading, setIsLoading] = useState(false);
    const[view, setView] = useState(false);
     
    const find =()=>{
        setIsLoading(true)
        MakeRequest({ url: `/users/${name}` })
            .then(response => {
                setUserGit(response.data)
                console.log(userGit)
                setView(true)
                setIsLoading(false)

            })
            .catch(error =>{
                setView(false)
                setIsLoading(false)
            })
        }

    return (
        <div className="search-container">
            <div className="search-container-box">
                <h1 className="search-container-title">Encontre um perfil Github</h1>
                <input 
                    type="text" 
                    placeholder="Usuário GitHub" 
                    className="search-container-text" 
                    onChange={e => setName(e.target.value)}
                    value={name}
                />
                
                
                <div onClick={find} className="search-container-btn-find">
                    <Button  name="Encontrar" />
                </div>
            </div>
            
            
            {
                isLoading ? <SearchLoaders/> :(
                    view ? <InformationGit UserGit={userGit} /> :(
                        <>
                        
                        </>
                    )
                )
            }
            
            
            
        </div>
    )
}



export default Search;