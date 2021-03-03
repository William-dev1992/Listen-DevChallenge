import Head from 'next/head'
import { FeaturedPlaylists } from '../components/FeaturedPlaylists'
import { ProfileViews } from '../components/ProfileViews'
import { Searchbar } from '../components/Searchbar'
import { Sidebar } from '../components/Sidebar'
import { Tracks } from '../components/Tracks'
import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Listen</title>
      </Head>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <section>
        <Searchbar />
        <div className={styles.featuredPlaylists}>
          <FeaturedPlaylists />
        </div>
        <div className={styles.profileAndTracks}>
          <ProfileViews />
          <Tracks />
        </div>
      </section>
    </div>
  )
}
