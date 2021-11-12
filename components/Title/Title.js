import styles from './Title.module.css'


const Title = () => {

    return(
        <section className={styles.titleContainer}>
          {/* slide 1 */}
          <div className={styles.titleDiv}>
            <h1>STIR IT UP!</h1>

            <div className={styles.underline}>_____________________</div>
            <p> Mongolian BBQ Restaurant!</p>
          </div>
        </section>
    )
}

export default Title