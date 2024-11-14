import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

export const initSentry = () => {
    console.log("cwrvfwrfr")
  Sentry.init({
    dsn:'https://fa0735f831571cc31a92e5192eda6ebb@o4508290254438400.ingest.us.sentry.io/4508294794182656', 
    release: '0.1.0',
    integrations: [
        Sentry.browserTracingIntegration(),
        Sentry.replayIntegration(),
    ],
    tracesSampleRate: 1.0, 
    environment: 'development', 
  });
};