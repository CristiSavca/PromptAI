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
                                <div className={styles['titles-style']}>Prompt</div>
                                <div className={styles['titles-style']}>Sources</div>
                            </span>
                            <span className={styles['input-boxes-style']}>
                                <div className={styles['prompt-container']}>
                                    <textarea
                                        className={styles['prmpt-in-box']}
                                        placeholder={'Type your prompt here...'}
                                    />
                                </div>
                                <span className={styles['sources-container']}>
                                    <input
                                        className={styles['sources-input-boxes']}
                                        placeholder={'Title, Author...'}
                                    />
                                    <input
                                        className={styles['sources-input-boxes']}
                                        placeholder={'Title, Author...'}
                                    />
                                    <input
                                        className={styles['sources-input-boxes']}
                                        placeholder={'Title, Author...'}
                                    />
                                    <input
                                        className={styles['sources-input-boxes']}
                                        placeholder={'Title, Author...'}
                                    />
                                    <input
                                        className={styles['sources-input-boxes']}
                                        placeholder={'Title, Author...'}
                                    />
                                </span>
                            </span>
                            <span className={styles['essay-choice-container']}>
                                <select className={styles['essay-choice']}>
                                    <option className={styles['drop-down']}>Thesis</option>
                                    <option className={styles['drop-down']}>Research</option>
                                    <option className={styles['drop-down']}>Argumentative</option>
                                </select>
                            </span>
                            <span className={styles['pages-container']}>
                                <input
                                    type="number"
                                    min="1"
                                    className={styles['page-input']}
                                    placeholder={'# of pages'}
                                ></input>
                            </span>
                            <button className={`${styles['essay-choice']} ${styles.next}`}>
                                Next
                            </button>
                        </span>
                    </div>
                </div>
            </span>
        </div>
    );
};
