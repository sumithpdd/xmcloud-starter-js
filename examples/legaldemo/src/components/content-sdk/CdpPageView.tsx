import { CdpHelper, useSitecore } from '@sitecore-content-sdk/nextjs';
import { useEffect } from 'react';
import config from 'sitecore.config';
import { JSX } from 'react';

/**
 * This is the CDP page view component.
 * It uses the Sitecore Cloud SDK to enable page view events on the client-side.
 * See Sitecore Cloud SDK documentation for details.
 * https://www.npmjs.com/package/@sitecore-cloudsdk/events
 */
const CdpPageView = (): JSX.Element => {
  const {
    page: { layout, siteName, mode },
  } = useSitecore();
  const { route, context } = layout.sitecore;

  /**
   * Determines if the page view events should be turned off.
   * IMPORTANT: You should implement based on your cookie consent management solution of choice.
   * By default it is disabled in development mode
   */
  const disabled = () => {
    return process.env.NODE_ENV === 'development';
  };

  useEffect(() => {
    // Do not create events in editing or preview mode or if missing route data
    if (!mode.isNormal || !route?.itemId) {
      return;
    }
    // Do not create events if disabled (e.g. we don't have consent)
    if (disabled()) {
      return;
    }

    // Store route values to ensure type narrowing works inside async function
    const itemId = route.itemId;
    if (!itemId) {
      return;
    }
    const routeName = route.name || '';
    const routeLanguage = route.itemLanguage || config.defaultLanguage;

    // Dynamically import pageView after CloudSDK is initialized
    // This ensures CloudSDK().addEvents().initialize() has been called first
    const sendPageView = async () => {
      try {
        // Dynamic import to ensure CloudSDK is initialized first
        const { pageView } = await import('@sitecore-cloudsdk/events/browser');

        // Ensure variantId is a string
        const variantId: string = typeof context.variantId === 'string' ? context.variantId : '';
        // Scope can be undefined, so we pass it as-is (getPageVariantId accepts string | undefined)
        const scope: string | undefined =
          config.personalize?.scope && typeof config.personalize.scope === 'string'
            ? config.personalize.scope
            : undefined;

        const pageVariantId = CdpHelper.getPageVariantId(itemId, routeLanguage, variantId, scope);

        // there can be cases where Events are not initialized which are expected to reject
        pageView({
          channel: 'WEB',
          currency: 'USD',
          page: routeName,
          pageVariantId,
          language: routeLanguage,
        }).catch((e) => console.debug(e));
      } catch (error) {
        // Silently handle errors if CloudSDK is not initialized
        console.debug('CloudSDK Events not available:', error);
      }
    };

    // Add a small delay to ensure CloudSDK initialization completes
    const timer = setTimeout(() => {
      sendPageView();
    }, 200);

    return () => clearTimeout(timer);
  }, [mode, route, context.variantId, siteName]);

  return <></>;
};

export default CdpPageView;
