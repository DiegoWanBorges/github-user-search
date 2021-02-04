import './styles.scss'


import Button from '../../../../core/components/Button';
import { UserGit } from '../../../../core/types/UserGit';

type Props = {
    UserGit?: UserGit
}


const InformationGit = ({ UserGit }: Props) => {

    const openUrl = () =>{
        
        window.location.href= UserGit?.html_url ===undefined ? '' :(
            UserGit?.html_url
        ) 
    }
    return (
        <>
            <div className="seach-container-info">
                <div className="seach-container-info-left">
                    <div >
                        <img src={UserGit?.avatar_url} alt="" className="search-container-info-left-img"/>
                    </div>
                    <div className="search-container-info-left-perfil-btn">
                        <div onClick={openUrl}>
                            <Button  name="Ver Perfil" />
                        </div>
                        
                    </div>
                </div>

                <div className="seach-container-info-right">
                    <div className="seach-container-info-right-top">
                        <h6 className="seach-container-info-right-top-items-text">Repositórios públicos: {UserGit?.public_repos}</h6>
                        <h6 className="seach-container-info-right-top-items-text">Seguidores: {UserGit?.followers}</h6>
                        <h6 className="seach-container-info-right-top-items-text">Seguindo: {UserGit?.following}</h6>
                    </div>

                    <div className="seach-container-info-right-information">
                        <h5 className="seach-container-info-right-information-title" >Informações</h5>

                        <div className="seach-container-info-right-information-group">
                            <h4 className="seach-container-info-right-information-details" >Empresa:  </h4>
                            <h4 className="seach-container-info-right-information-details-result">
                                {UserGit?.company}
                            </h4>
                        </div>
                        <div className="seach-container-info-right-information-group">
                            <h4 className="seach-container-info-right-information-details">Website/Blog: </h4>
                            <h4 className="seach-container-info-right-information-details-result">
                                {UserGit?.blog}
                            </h4>
                        </div>
                        <div className="seach-container-info-right-information-group">
                            <h4 className="seach-container-info-right-information-details">Localidade: </h4>
                            <h4 className="seach-container-info-right-information-details-result">
                                {UserGit?.location}
                            </h4>
                        </div>
                        <div className="seach-container-info-right-information-group">
                            <h4 className="seach-container-info-right-information-details">Membro desde: </h4>
                            <h4 className="seach-container-info-right-information-details-result">
                                {UserGit?.created_at}
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InformationGit;