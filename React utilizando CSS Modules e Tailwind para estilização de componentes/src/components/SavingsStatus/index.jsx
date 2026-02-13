import { IconSavings } from '../Icons'
import styles from './savingsstatus.module.css'

export const SavingStatus = ({ percent }) => {
    return (
        <div className={styles.container}>
            <p>
               <IconSavings /> Economizar
            </p>
        </div>
    )
}