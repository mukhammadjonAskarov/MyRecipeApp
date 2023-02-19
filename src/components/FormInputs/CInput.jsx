import styles from './input.module.scss'

export default function CInput({
  size,
  withBorder = false,
  fullWidth = false,
  type = 'text',
  className = '',
  labelText = '',
  ...restProps
}) {
  return (
    <>
      <label className={styles.labelText}>{labelText}</label>
      <input
        autoComplete='none'
        type={type}
        className={`${styles.input} ${styles[size]} ${
          styles[withBorder ? 'border' : 'no-border']
        } ${styles[fullWidth ? 'fullWidth' : '']} ${className}`}
        {...restProps}
      />
    </>
  )
}
