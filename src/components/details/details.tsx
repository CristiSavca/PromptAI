import styles from './details.module.scss';

export interface DetailsProps {
    className?: string;
}

export const Details = ({ className }: DetailsProps) => {
    return <div className={`${styles.root} ${className}`}>
        <div className={styles['order-details']} />
    </div>;
};
