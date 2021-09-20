import '../styles/main.scss';
import { wrapper } from '../store';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
