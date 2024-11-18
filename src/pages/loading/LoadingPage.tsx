import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import styles from './styles.module.css';
import { loadingUrl } from '../../constants/lotties.ts';

export const LoadingPage = () => (
  <DotLottieReact src={loadingUrl} loop autoplay className={styles.lottie} />
);
