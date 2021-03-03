import styles from '../styles/components/Tracks.module.css'

export function Tracks() {
  return(
    <div className={styles.container}>
      <h3>Tracks</h3>
      <div className={styles.tracksContainer}>
        <div>
          <a href="#">
            <img src="/assets/track1.jpg" alt="Playlist cover image"/>
            <h3>Mahara Bon</h3>
            <span>Sexy in Paris</span>
          </a>
        </div>

        <div>
          <a href="#">
            <img src="/assets/track2.jpg" alt="Playlist cover image"/>
            <h3>Donna</h3>
            <span>Pseudo-Life</span>
          </a>
        </div>

        <div>
          <a href="#">
            <img src="/assets/track3.jpg" alt="Playlist cover image"/>
            <h3>Avven</h3>
            <span>Magic</span>
          </a>
        </div>
        
        <div>
          <a href="#">
            <img src="/assets/track4.jpg" alt="Playlist cover image"/>
            <h3>Conny</h3>
            <span>Living</span>
          </a>
        </div>

        <div>
          <a href="#">
            <img src="/assets/track5.jpg" alt="Playlist cover image"/>
            <h3>Conny</h3>
            <span>Living</span>
          </a>
        </div>

        <div>
          <a href="#">
            <img src="/assets/track6.jpg" alt="Playlist cover image"/>
            <h3>Conny</h3>
            <span>Living</span>
          </a>
        </div>

        <div>
          <a href="#">
            <img src="/assets/track7.jpg" alt="Playlist cover image"/>
            <h3>Conny</h3>
            <span>Living</span>
          </a>
        </div>
      </div>
    </div>
  )
}