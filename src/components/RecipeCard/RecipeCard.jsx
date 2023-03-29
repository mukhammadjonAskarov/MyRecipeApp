import { useNavigate } from 'react-router-dom'
import MainButton from '../MainButton/Button'
import styles from './Styles.module.scss'


export default function RecipeCard({title, description, id, src}) {
    const navigate = useNavigate()
    return (
        <div className={styles.card}>
            <div className={styles.img}>
            <img src={src} alt="food" />
            </div>
            <div className={styles.body}>
            <h3>{title}</h3>
            <p>{description}</p>
            </div>
            <MainButton
            fullWidth
            text="Read More"
            type="button"
            onClick={() => navigate(`/${id}`)}
            />
      </div>
    )
}