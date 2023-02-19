import styles from './button.module.scss'

function MainButton({handleClick, text, type, ...rest}) {
    return <button
        className={styles.btn}
        type={type}
        onClick={handleClick} {...rest}>
        {text}
    </button>;
}

export default MainButton;
