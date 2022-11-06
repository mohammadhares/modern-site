import { features } from "../constants";
import styles, {layout} from "../style";
import Button from "./Button";

const Business = (props) => (
    <section id='features' className={layout.section}>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>You do the business <br className="sm:block hidden"/> we'll handle the money.</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Unde ab dolores adipisci beatae cupiditate in, dolorem voluptas, 
                doloremque, nisi ratione iusto voluptatum aperiam non et esse 
                eligendi placeat? Assumenda, molestiae.
            </p>
            <Button styles="mt-10" />
        </div>
    </section>
) 

export default Business;