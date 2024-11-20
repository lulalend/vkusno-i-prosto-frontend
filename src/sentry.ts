import * as Sentry from '@sentry/react';

Sentry.init({
  // eslint-disable-next-line max-len
  dsn: 'https://f8cb364d54bfe63d8745d0d1d01e784a@o4508326124847104.ingest.de.sentry.io/4508326129958992',
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});
