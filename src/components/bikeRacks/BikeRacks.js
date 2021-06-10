import { Fragment, useState } from 'react';
import TileGallery from '../tileGallery/TileGallery';

import styles from './BikeRacks.module.css';
import PennyFarthing from './PennyFarthing';

const BikeRacks = props => {
    const [bikeRiding, setBikeRiding] = useState(true);

    setTimeout(()=> { setBikeRiding(false)}, 30000);

    return (
        <Fragment>
            <TileGallery className={'bikeGalleryDiv'}/>
            {bikeRiding && <PennyFarthing />}
        </Fragment>
    ) 


};

export default BikeRacks;