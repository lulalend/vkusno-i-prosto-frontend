import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import styles from './styles.module.css';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import Loading from '../../assets/lotties/loading.lottie';

export const LoadingPage = () => (
  <div className={styles.container}>
    <DotLottieReact src={Loading} loop autoplay className={styles.lottie} />
  </div>
);
