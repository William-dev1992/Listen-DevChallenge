import styles from '../styles/components/Searchbar.module.css'

import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Searchbar() {
  return(
    <div className={styles.container}>
      <FontAwesomeIcon className={styles.searchIcon} icon={faSearch}/>
      <input 
        type="text" 
        placeholder="Search artists, playlists or tracks..."
      />
    </div>
  )
}