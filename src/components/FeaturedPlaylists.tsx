import styles from '../styles/components/FeaturedPlaylists.module.css'

export function FeaturedPlaylists() {
  return(
    <div className={styles.container}>

      <h2>Featured Playlists</h2>

      <div className={styles.playlistsContainer}>
        <div>
          <a href="#">
            <div className={styles.imageContainer}>
              <img src="/assets/playlist1.jpg" alt="Playlist cover image"/>
            </div>
            <h3>Only STARDUST</h3>
            <span>24 tracks</span>
          </a>
        </div>

        <div>
          <a href="#">
            <div className={styles.imageContainer}>
              <img src="/assets/playlist2.jpg" alt="Playlist cover image"/>
            </div>
            <h3>Mike Vella</h3>
            <span>12 tracks</span>
          </a>
        </div>

        <div>
          <a href="#">
            <div className={styles.imageContainer}>
              <img src="/assets/playlist3.jpg" alt="Playlist cover image"/>
            </div>
            <h3>the best singles s2</h3>
            <span>163 tracks</span>
          </a>
        </div>
        
        <div>
          <a href="#">
            <div className={styles.imageContainer}>
              <img src="/assets/playlist4.jpg" alt="Playlist cover image"/>
            </div>
            <h3>Indies</h3>
            <span>134 tracks</span>
          </a>
        </div>
      </div>
    </div>
  )
}