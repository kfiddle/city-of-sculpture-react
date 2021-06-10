import { Fragment, useState } from 'react';

import styles from './BikeRacks.module.css';
import PennyFarthing from './PennyFarthing';

const BikeRacks = props => {
    const [bikeRiding, setBikeRiding] = useState(true);

    setTimeout(()=> { setBikeRiding(false)}, 30000);

    return (
        <Fragment>
            {bikeRiding && <PennyFarthing />}
        </Fragment>
    ) 


};

export default BikeRacks;