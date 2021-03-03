import styles from '../styles/components/Sidebar.module.css'

import { faUser, faMusic, faNewspaper, faBell, faComment, faSatelliteDish, faSlidersH, faRecordVinyl, faWrench } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Sidebar(){
  return(
    <div className={styles.container}>
      <div className={styles.profile}>
        <img src="/assets/profile.jpg" alt="Profile picture"/>
        <div>
          <h3>Dany Schudler</h3>
          <span><a href="#">Edit profile</a><FontAwesomeIcon icon={faWrench}/></span>
        </div>
      </div>
      <div className={styles.sidebarOptions}>
        <ul>
          <li><FontAwesomeIcon icon={faRecordVinyl}/><a href="#">Overview</a></li>
          <li><FontAwesomeIcon icon={faNewspaper}/><a href="#">News</a></li>
          <li><FontAwesomeIcon icon={faMusic}/><a href="#">Playlist</a></li>
          <li><FontAwesomeIcon icon={faSatelliteDish}/><a href="#">Discover</a></li>
        </ul>
      </div>
      <div className={styles.sidebarOptions}>
        <ul>
          <li><FontAwesomeIcon icon={faSlidersH}/><a href="#">Dashboard</a></li>
          <li><FontAwesomeIcon icon={faComment}/><a href="#">Messages</a></li>
          <li><FontAwesomeIcon icon={faBell}/><a href="#">Notifications</a></li>
          <li><FontAwesomeIcon icon={faUser}/><a href="#">Account</a></li>
        </ul>
      </div>
    </div>
  )
}