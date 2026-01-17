import { ErrorBoundary } from 'app/providers/errorBoundary';
import { ThemeProvider } from 'app/providers/themeProvider';
import 'app/styles/index.scss';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { PageError } from 'widgets/pageError';
import App from './app/App';
import './shared/config/i18n/i18n';

render(
  <BrowserRouter>
    <ErrorBoundary fallback={<PageError />}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById('root')
);
