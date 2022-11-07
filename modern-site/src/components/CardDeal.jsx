import { card } from "../assets";
import styles, {layout} from "../style";
import Button from "./Button";

const CardDeal = (props) => (
    <section className={layout.section}>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
                Find a better card deal <br className="sm:block hidden" />
                in few easy steps.
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Mollitia maiores vero cum nisi rem accusantium amet provident? 
                Voluptas repellendus, ut ea facere modi aliquid. Voluptates 
                nisi at molestias earum obcaecati.
            </p>
            <Button styles="mt-10" />
        </div>

        <div className={layout.sectionImg}>
            <img src={card} alt="Card" className="w-[100%] h-[100%]" />
        </div>
    </section>
)

export default CardDeal;