import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import styles from './styles.module.css';

export const LoadingPage = () => (
  <div className={styles.container}>
    <DotLottieReact
      src="https://lottie.host/1c7c12e4-6da6-4ca6-92b8-84203b745ccf/qimYO044GM.lottie"
      loop
      autoplay
      className={styles.lottie}
    />
  </div>
);
