
import './styles.scss'

type Props = {
    name: string;
}

const Button = ({ name }: Props) => (
    <button className="btn-container">
        {name}
    </button>
)

export default Button;
