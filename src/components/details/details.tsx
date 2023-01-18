import styles from './details.module.scss';

export interface DetailsProps {
    className?: string;
}

export const Details = ({ className }: DetailsProps) => {
    return (
        <div className={`${styles.root} ${className}`}>
            <span className={styles.root}>
                <div className={styles['progress-bar']}>
                    <span className={styles.steps}>
                        <div className={`${styles['steps-style']} ${styles.step1}`}>
                            Paper Details
                        </div>
                        <div
                            className={`${styles['steps-style']} ${styles.arrow} ${styles.right}`}
                        ></div>
                        <div className={`${styles['steps-style']} ${styles.step2}`}>Payment</div>
                    </span>
                </div>
                <div className={styles['det-container']}>
                    <div className={styles['details-box']}>
                        <span className={styles.details}>
                            <span className={styles.titles}>
                                <div>Prompt</div>
                                <div>Sources</div>
                            </span>
                            <span>text</span>
                            Text
                            <div>
                                <input type="number" />
                            </div>
                            <span>
                                <button>Button</button>
                                <button>Button</button>text
                            </span>
                        </span>
                    </div>
                </div>
            </span>
        </div>
    );
};
