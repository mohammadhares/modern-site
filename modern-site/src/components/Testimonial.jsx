import { feedback } from '../constants';
import styles from '../style';
import FeedBackCard from './FeedBackCard';


const Testimonial = (props) => (
    <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
        <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
            <h1 className={styles.heading2}>
                What people are <br /> 
                saying about us 
            </h1>
            <p className={`${styles.paragraph} text-left max-w-[450px]`}>
                odio rem! Porro ex eius laudantium eaque veritatis blanditiis architecto at? 
                Aliquam error repudiandae voluptate soluta ipsa earum. Voluptatibus, odio perspiciatis.
            </p>
        </div>

        <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>
            {feedback.map((card) => (
                <FeedBackCard key={card.id} {...card} />
            ))}
        </div>
    </section>
)

export default Testimonial;