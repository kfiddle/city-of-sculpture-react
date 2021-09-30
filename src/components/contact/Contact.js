
import SlidingBox from "../slidingBox/SlidingBox";

import styles from './Contact.module.css';

const Contact = props => {

    return (
        <SlidingBox>
        <div className={styles.innerContentContainer}>
        
        <form method="post">

                            <div className={styles.accountRowOne}>
                                <div className={styles.firstName}>
                                    <input type="text" placeholder="First Name"
                                           className={styles.formControl}
                                           required minlength="1" maxlength="20" />
                                </div>

                                <div className={styles.lastName}>
                                    <input type="text" placeholder="Last Name" 
                                          className={styles.formControl}
                                           required minlength="1" maxlength="20" />
                                </div>
                            </div>

                            <div className={styles.accountRowTwo}>
                                <div className={styles.email}>
                                        <input type="email" placeholder="Email" 
                                               className={styles.formControl} required />
                                </div>
                                </div>

                      <div className={styles.description}>
                                    <input type="text area" name="description" className={styles.formControl} />
                                </div>
                          

                            <div className={styles.buttonContainer}>
                                <button type="submit" className={styles.signUpButton}>Sign Up</button>
                        
                            </div>
                         

                    </form>
    
        </div>
      </SlidingBox>
      );
};

export default Contact;