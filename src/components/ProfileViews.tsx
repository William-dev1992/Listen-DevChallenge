import styles from '../styles/components/ProfileViews.module.css'

export function ProfileViews() {
  return(
    <div className={styles.container}>
      <h3>Profile Views</h3>
      <ul>
        <li>
          <a href="#">
            <div className={styles.profilePicture}>
              <img src="/assets/view1.jpg" alt="Profile view picture"/>
            </div>
            <div className={styles.profileNameAndTime}>
              <p>Jenny Villa</p>
              <span>1 day ago</span>
            </div>
            <span className={styles.albums}>4 albums</span>
          </a>
        </li>
        <li>
          <a href="#">
            <div className={styles.profilePicture}>
              <img src="/assets/view2.jpg" alt="Profile view picture"/>
            </div>
            <div className={styles.profileNameAndTime}>
              <p>Jenny Villa</p>
              <span>1 day ago</span>
            </div>
            <span className={styles.albums}>4 albums</span>
          </a>
        </li>
        <li>
          <a href="#">
            <div className={styles.profilePicture}>
              <img src="/assets/view3.jpg" alt="Profile view picture"/>
            </div>
            <div className={styles.profileNameAndTime}>
              <p>Jenny Villa</p>
              <span>1 day ago</span>
            </div>
            <span className={styles.albums}>4 albums</span>
          </a>
        </li>
      </ul>
    </div>
  )
}