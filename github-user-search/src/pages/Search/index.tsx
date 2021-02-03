import Button from '../../core/components/Button'
import './styles.scss'

import { ReactComponent as ImgProfile } from '../../core/images/imgProfile.svg'


const Search = () => {
    return (
        <div className="search-container">
            <div className="search-container-box">
                <h1 className="search-container-title">Encontre um perfil Github</h1>
                <input type="text" placeholder="Usuário GitHub" className="search-container-text" />
                <div className="search-container-btn-find">
                    <Button name="Encontrar" />
                </div>
            </div>
            <div className="seach-container-info">
                <div className="seach-container-info-left">
                    <div className="search-container-info-left-img">
                        <ImgProfile />
                    </div>
                    <div className="search-container-info-left-perfil-btn">
                        <Button name="Ver Perfil" />
                    </div>
                </div>
                <div className="seach-container-info-right">
                    <div className="seach-container-info-right-top">
                        <h6 className="seach-container-info-right-top-items-text">Repositórios públicos: 62</h6>
                        <h6 className="seach-container-info-right-top-items-text">Seguidores: 127</h6>
                        <h6 className="seach-container-info-right-top-items-text">Seguindo: 416</h6>
                    </div>

                    <div className="seach-container-info-right-information">
                        <h5 className="seach-container-info-right-information-title" >Informações</h5>

                        <div className="seach-container-info-right-information-group">
                            <h4 className="seach-container-info-right-information-details" >Empresa:  </h4>
                            <h4 className="seach-container-info-right-information-details-result">
                                Teste de tela para fonte
                            </h4>
                        </div>
                        <div className="seach-container-info-right-information-group">
                            <h4 className="seach-container-info-right-information-details">Website/Blog: </h4>
                            <h4 className="seach-container-info-right-information-details-result">
                                Teste de tela para fonte
                            </h4>
                        </div>
                        <div className="seach-container-info-right-information-group">
                            <h4 className="seach-container-info-right-information-details">Localidade: </h4>
                            <h4 className="seach-container-info-right-information-details-result">
                                Teste de tela para fonte
                            </h4>
                        </div>
                        <div className="seach-container-info-right-information-group">
                            <h4 className="seach-container-info-right-information-details">Membro desde: </h4>
                            <h4 className="seach-container-info-right-information-details-result">
                                Teste de tela para fonte
                            </h4>
                        </div>
                        
                        
                        
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Search;