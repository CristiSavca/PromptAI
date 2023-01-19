import styles from './header.module.scss';
import App_module from '../../App.module.scss';

export interface HeaderProps {
    className?: string;
}

export const Header = ({ className }: HeaderProps) => {
    return (
        <header className={`${styles['App-header']} ${App_module['header-menu']}`}>
            <span className={styles['header-menu']}>
                <div className={styles['home-logo']}>
                    <h1 className={`${styles['home-logo']} ${styles['header-buttons-style']}`}>
                        PROMPTAI
                    </h1>
                </div>
                <button className={`${styles['header-buttons']} ${styles['header-buttons-style']}`}>
                    Home
                </button>
                <button className={`${styles['header-buttons']} ${styles['header-buttons-style']}`}>
                    Order
                </button>
                <button className={`${styles['header-buttons']} ${styles['header-buttons-style']}`}>
                    Samples
                </button>
                <button className={`${styles['header-buttons']} ${styles['header-buttons-style']}`}>
                    About Us
                </button>
                <button className={`${styles['header-buttons-style']} ${styles['sign-in']}`}>
                    Sign In
                </button>
            </span>
        </header>
    );
};
