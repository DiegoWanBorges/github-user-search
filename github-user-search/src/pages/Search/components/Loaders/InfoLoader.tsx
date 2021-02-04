import ContentLoader from "react-content-loader"
import './styles.scss'
const InfoLoader = () => (
  <ContentLoader 
    className="load-container-info"
    speed={2}
    width={870}
    height={260}
    viewBox="0 0 870 260"
    backgroundColor="#dedede"
    foregroundColor="#f5f5f5"
  >
    <rect x="0" y="0" rx="2" ry="2" width="870" height="260" />
  </ContentLoader>
)

export default InfoLoader