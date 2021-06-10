import styles from './TileGallery.module.css';

const TileGallery = props => {

    
    return <div className={styles[props.className]} style={{transform: props.position}}>{props.children}</div>
};
export default TileGallery;