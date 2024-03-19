import styles from "./Maincard.module.scss";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function MainCard(){
    return (
    <div className={styles['maincard-container']}>
            <img src="./title_card.jpg" />
            <div className={styles["Information-text"]}>
                <h1>Unlock Your Next Adventure:</h1>
                <h1>Dive into Captivating Reads beyond Anime!</h1>
                <p>
                Discover popular animes that have left you craving for more? Elevate your reading experience with our handpicked selection of captivating reads that go beyond the animated realm. Immerse yourself in thrilling stories, diverse genres, and intriguing narratives that will keep you hooked from the first page to the last.
                </p>
            <div className={styles["Discover"]}>
            <button>Discover</button>
            <p>See top manga <FaLongArrowAltRight /></p>
            </div>
            </div>
    </div>
        )
}
