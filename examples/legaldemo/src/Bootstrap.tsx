import { useEffect, JSX } from 'react';
import { CloudSDK } from '@sitecore-cloudsdk/core/browser';
import { SitecorePageProps } from '@sitecore-content-sdk/nextjs';
import config from 'sitecore.config';

/**
 * The Bootstrap component is the entry point for performing any initialization logic
 * that needs to happen early in the application's lifecycle.
 */
const Bootstrap = (props: SitecorePageProps): JSX.Element | null => {
  const { page } = props;

  // Browser ClientSDK init allows for page view events to be tracked

  useEffect(() => {
    if (!page) {
      return;
    }

    const mode = page.mode;
    if (process.env.NODE_ENV === 'development') {
      console.debug('Browser Events SDK is not initialized in development environment');
      return;
    }
    if (!mode.isNormal) {
      console.debug('Browser Events SDK is not initialized in edit and preview modes');
      return;
    }

    if (config.api.edge?.clientContextId) {
      // Import events package and initialize CloudSDK in the correct order
      // Order: 1. Import CloudSDK (already done), 2. Import events, 3. Initialize
      import('@sitecore-cloudsdk/events/browser')
        .then(() => {
          CloudSDK({
            sitecoreEdgeUrl: config.api.edge.edgeUrl,
            sitecoreEdgeContextId: config.api.edge.clientContextId,
            siteName: page.siteName || config.defaultSite,
            enableBrowserCookie: true,
            // Replace with the top level cookie domain of the website that is being integrated e.g ".example.com" and not "www.example.com"
            cookieDomain: window.location.hostname.replace(/^www\./, ''),
          })
            .addEvents()
            .initialize();
        })
        .catch((error) => {
          console.error('Failed to initialize CloudSDK Events:', error);
        });
    } else {
      console.error('Client Edge API settings missing from configuration');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page?.siteName]);

  return null;
};

export default Bootstrap;
