import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import styles from './styles.module.css';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import NotFound from '../../assets/lotties/NotFound.lottie';

export const NoMatch = () => (
  <div className={styles.container}>
    <DotLottieReact src={NotFound} loop autoplay className={styles.lottie} />
    <div className={styles.text}>
      Упс... Страница не найдена, может перейдём на главную?
    </div>
  </div>
);
