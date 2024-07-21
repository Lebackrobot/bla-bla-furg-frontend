import styles from './Avatar.module.css'

const Avatar = ({ avatar }) => {
    return <div styles={styles.avatarContainer} dangerouslySetInnerHTML={{ __html: avatar }} />

}

export default Avatar