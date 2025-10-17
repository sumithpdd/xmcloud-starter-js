// Below are built-in components that are available in the app, it's recommended to keep them as is
import { BYOCWrapper, NextjsContentSdkComponent, FEaaSWrapper } from '@sitecore-content-sdk/nextjs';
import { Form } from '@sitecore-content-sdk/nextjs';
// end of built-in components

// Components imported from the app itself
import * as Header from 'src/components/Header';
import * as Footer from 'src/components/Footer';
import * as VideoPlayerdev from 'src/components/video/VideoPlayer.dev';
import * as VideoModaldev from 'src/components/video/VideoModal.dev';
import * as Video from 'src/components/video/Video';
import * as videoprops from 'src/components/video/video-props';
import * as VerticalImageAccordion from 'src/components/vertical-image-accordion/VerticalImageAccordion';
import * as verticalimageaccordionprops from 'src/components/vertical-image-accordion/vertical-image-accordion.props';
import * as tooltip from 'src/components/ui/tooltip';
import * as toggle from 'src/components/ui/toggle';
import * as togglegroup from 'src/components/ui/toggle-group';
import * as toaster from 'src/components/ui/toaster';
import * as toast from 'src/components/ui/toast';
import * as textarea from 'src/components/ui/textarea';
import * as tabs from 'src/components/ui/tabs';
import * as table from 'src/components/ui/table';
import * as sonner from 'src/components/ui/sonner';
import * as slider from 'src/components/ui/slider';
import * as skeleton from 'src/components/ui/skeleton';
import * as sidebar from 'src/components/ui/sidebar';
import * as sheet from 'src/components/ui/sheet';
import * as separator from 'src/components/ui/separator';
import * as select from 'src/components/ui/select';
import * as scrollarea from 'src/components/ui/scroll-area';
import * as resizable from 'src/components/ui/resizable';
import * as radiogroup from 'src/components/ui/radio-group';
import * as progress from 'src/components/ui/progress';
import * as popover from 'src/components/ui/popover';
import * as pagination from 'src/components/ui/pagination';
import * as navigationmenu from 'src/components/ui/navigation-menu';
import * as menubar from 'src/components/ui/menubar';
import * as label from 'src/components/ui/label';
import * as input from 'src/components/ui/input';
import * as inputotp from 'src/components/ui/input-otp';
import * as hovercard from 'src/components/ui/hover-card';
import * as form from 'src/components/ui/form';
import * as dropdownmenu from 'src/components/ui/dropdown-menu';
import * as drawer from 'src/components/ui/drawer';
import * as dialog from 'src/components/ui/dialog';
import * as contextmenu from 'src/components/ui/context-menu';
import * as command from 'src/components/ui/command';
import * as collapsible from 'src/components/ui/collapsible';
import * as checkbox from 'src/components/ui/checkbox';
import * as chart from 'src/components/ui/chart';
import * as carousel from 'src/components/ui/carousel';
import * as card from 'src/components/ui/card';
import * as calendar from 'src/components/ui/calendar';
import * as button from 'src/components/ui/button';
import * as breadcrumb from 'src/components/ui/breadcrumb';
import * as badge from 'src/components/ui/badge';
import * as avatar from 'src/components/ui/avatar';
import * as aspectratio from 'src/components/ui/aspect-ratio';
import * as alert from 'src/components/ui/alert';
import * as alertdialog from 'src/components/ui/alert-dialog';
import * as accordion from 'src/components/ui/accordion';
import * as TopicListing from 'src/components/topic-listing/TopicListing';
import * as TopicItemdev from 'src/components/topic-listing/TopicItem.dev';
import * as topiclistingprops from 'src/components/topic-listing/topic-listing.props';
import * as themeproviderdev from 'src/components/theme-provider/theme-provider.dev';
import * as TextBannerDefaultdev from 'src/components/text-banner/TextBannerDefault.dev';
import * as TextBanner02dev from 'src/components/text-banner/TextBanner02.dev';
import * as TextBanner01dev from 'src/components/text-banner/TextBanner01.dev';
import * as TextBanner from 'src/components/text-banner/TextBanner';
import * as textbannerprops from 'src/components/text-banner/text-banner.props';
import * as TestimonialCarouselItem from 'src/components/testimonial-carousel/TestimonialCarouselItem';
import * as TestimonialCarousel from 'src/components/testimonial-carousel/TestimonialCarousel';
import * as testimonialcarouselprops from 'src/components/testimonial-carousel/testimonial-carousel.props';
import * as Title from 'src/components/sxa/Title';
import * as RowSplitter from 'src/components/sxa/RowSplitter';
import * as RichText from 'src/components/sxa/RichText';
import * as Promo from 'src/components/sxa/Promo';
import * as PartialDesignDynamicPlaceholder from 'src/components/sxa/PartialDesignDynamicPlaceholder';
import * as PageContent from 'src/components/sxa/PageContent';
import * as Navigation from 'src/components/sxa/Navigation';
import * as LinkList from 'src/components/sxa/LinkList';
import * as Image from 'src/components/sxa/Image';
import * as ContentBlock from 'src/components/sxa/ContentBlock';
import * as Container from 'src/components/sxa/Container';
import * as ColumnSplitter from 'src/components/sxa/ColumnSplitter';
import * as SubscriptionBanner from 'src/components/subscription-banner/SubscriptionBanner';
import * as subscriptionbannerprops from 'src/components/subscription-banner/subscription-banner.props';
import * as subscriptionbannerdictionary from 'src/components/subscription-banner/subscription-banner.dictionary';
import * as SiteMetadata from 'src/components/site-metadata/SiteMetadata';
import * as sitemetadataprops from 'src/components/site-metadata/site-metadata.props';
import * as SecondaryNavigation from 'src/components/secondary-navigation/SecondaryNavigation';
import * as secondarynavigationprops from 'src/components/secondary-navigation/secondary-navigation.props';
import * as RichTextBlock from 'src/components/rich-text-block/RichTextBlock';
import * as richtextblockprops from 'src/components/rich-text-block/rich-text-block.props';
import * as PromoBlock from 'src/components/promo-block/PromoBlock';
import * as promoblockprops from 'src/components/promo-block/promo-block.props';
import * as PromoAnimatedImageRightdev from 'src/components/promo-animated/PromoAnimatedImageRight.dev';
import * as PromoAnimatedDefaultdev from 'src/components/promo-animated/PromoAnimatedDefault.dev';
import * as PromoAnimated from 'src/components/promo-animated/PromoAnimated';
import * as promoanimatedutil from 'src/components/promo-animated/promo-animated.util';
import * as promoanimatedprops from 'src/components/promo-animated/promo-animated.props';
import * as portaldev from 'src/components/portal/portal.dev';
import * as PageHeader from 'src/components/page-header/PageHeader';
import * as pageheaderprops from 'src/components/page-header/page-header.props';
import * as MultiPromoTabs from 'src/components/multi-promo-tabs/MultiPromoTabs';
import * as MultiPromoTabdev from 'src/components/multi-promo-tabs/MultiPromoTab.dev';
import * as multipromotabsprops from 'src/components/multi-promo-tabs/multi-promo-tabs.props';
import * as MultiPromoItemdev from 'src/components/multi-promo/MultiPromoItem.dev';
import * as MultiPromo from 'src/components/multi-promo/MultiPromo';
import * as multipromoprops from 'src/components/multi-promo/multi-promo.props';
import * as modetoggledev from 'src/components/mode-toggle/mode-toggle.dev';
import * as MediaSectiondev from 'src/components/media-section/MediaSection.dev';
import * as mediasectionprops from 'src/components/media-section/media-section.props';
import * as meteors from 'src/components/magicui/meteors';
import * as LogoTabs from 'src/components/logo-tabs/LogoTabs';
import * as LogoItem from 'src/components/logo-tabs/LogoItem';
import * as logotabsprops from 'src/components/logo-tabs/logo-tabs.props';
import * as logoprops from 'src/components/logo/logo.props';
import * as Logodev from 'src/components/logo/Logo.dev';
import * as nextImageSrcdev from 'src/components/image/nextImageSrc.dev';
import * as ImageWrapperdev from 'src/components/image/ImageWrapper.dev';
import * as ImageBlock from 'src/components/image/ImageBlock';
import * as imageprops from 'src/components/image/image.props';
import * as imageoptimizationcontext from 'src/components/image/image-optimization.context';
import * as Icon from 'src/components/icon/Icon';
import * as YoutubeIcondev from 'src/components/icon/svg/YoutubeIcon.dev';
import * as TwitterIcondev from 'src/components/icon/svg/TwitterIcon.dev';
import * as signaldev from 'src/components/icon/svg/signal.dev';
import * as playdev from 'src/components/icon/svg/play.dev';
import * as LinkedInIcondev from 'src/components/icon/svg/LinkedInIcon.dev';
import * as InternalIcondev from 'src/components/icon/svg/InternalIcon.dev';
import * as InstagramIcondev from 'src/components/icon/svg/InstagramIcon.dev';
import * as FileIcondev from 'src/components/icon/svg/FileIcon.dev';
import * as FacebookIcondev from 'src/components/icon/svg/FacebookIcon.dev';
import * as ExternalIcondev from 'src/components/icon/svg/ExternalIcon.dev';
import * as EmailIcondev from 'src/components/icon/svg/EmailIcon.dev';
import * as diversitydev from 'src/components/icon/svg/diversity.dev';
import * as crossarrowsdev from 'src/components/icon/svg/cross-arrows.dev';
import * as communitiesdev from 'src/components/icon/svg/communities.dev';
import * as arrowuprightdev from 'src/components/icon/svg/arrow-up-right.dev';
import * as arrowrightdev from 'src/components/icon/svg/arrow-right.dev';
import * as arrowleftdev from 'src/components/icon/svg/arrow-left.dev';
import * as HeroST from 'src/components/hero/HeroST';
import * as Hero from 'src/components/hero/Hero';
import * as heroprops from 'src/components/hero/hero.props';
import * as GlobalHeader from 'src/components/global-header/GlobalHeader';
import * as globalheaderprops from 'src/components/global-header/global-header.props';
import * as GlobalFooter from 'src/components/global-footer/GlobalFooter';
import * as globalfooterprops from 'src/components/global-footer/global-footer.props';
import * as FooterNavigationColumn from 'src/components/global-footer/FooterNavigationColumn';
import * as FooterNavigationCalloutdev from 'src/components/footer-navigation-callout/FooterNavigationCallout.dev';
import * as floatingdockdev from 'src/components/floating-dock/floating-dock.dev';
import * as Flexdev from 'src/components/flex/Flex.dev';
import * as CtaBanner from 'src/components/cta-banner/CtaBanner';
import * as containerutil from 'src/components/container/container.util';
import * as ContainerFullWidth from 'src/components/container/container-full-width/ContainerFullWidth';
import * as ContainerFullBleed from 'src/components/container/container-full-bleed/ContainerFullBleed';
import * as Container7030 from 'src/components/container/container-7030/Container7030';
import * as Container70 from 'src/components/container/container-70/Container70';
import * as Container6321 from 'src/components/container/container-6321/Container6321';
import * as Container6040 from 'src/components/container/container-6040/Container6040';
import * as Container5050 from 'src/components/container/container-5050/Container5050';
import * as Container4060 from 'src/components/container/container-4060/Container4060';
import * as Container3070 from 'src/components/container/container-3070/Container3070';
import * as Container303030 from 'src/components/container/container-303030/Container303030';
import * as Container25252525 from 'src/components/container/container-25252525/Container25252525';
import * as Carddev from 'src/components/card/Card.dev';
import * as ButtonComponent from 'src/components/button-component/ButtonComponent';
import * as Breadcrumbs from 'src/components/breadcrumbs/Breadcrumbs';
import * as BackgroundThumbnaildev from 'src/components/background-thumbnail/BackgroundThumbnail.dev';
import * as ArticleListing from 'src/components/article-listing/ArticleListing';
import * as ArticleHeader from 'src/components/article-header/ArticleHeader';
import * as articleheaderdictionary from 'src/components/article-header/article-header.dictionary';
import * as AnimatedSectiondev from 'src/components/animated-section/AnimatedSection.dev';
import * as AlertBannerdev from 'src/components/alert-banner/AlertBanner.dev';
import * as AccordionBlockItemdev from 'src/components/accordion-block/AccordionBlockItem.dev';
import * as AccordionBlockDefaultdev from 'src/components/accordion-block/AccordionBlockDefault.dev';
import * as AccordionBlock from 'src/components/accordion-block/AccordionBlock';
import * as accordionblockprops from 'src/components/accordion-block/accordion-block.props';


// Components must be registered within the map to match the string key with component name in Sitecore
export const componentMap = new Map<string, NextjsContentSdkComponent>([
  ['BYOCWrapper', BYOCWrapper],
  ['FEaaSWrapper', FEaaSWrapper],
  ['Form', Form],
  ['Header', Header],
  ['Footer', Footer],
  ['VideoPlayerdev', VideoPlayerdev],
  ['VideoModaldev', VideoModaldev],
  ['Video', Video],
  ['videoprops', videoprops],
  ['VerticalImageAccordion', VerticalImageAccordion],
  ['verticalimageaccordionprops', verticalimageaccordionprops],
  ['tooltip', tooltip],
  ['toggle', toggle],
  ['togglegroup', togglegroup],
  ['toaster', toaster],
  ['toast', toast],
  ['textarea', textarea],
  ['tabs', tabs],
  ['table', table],
  ['sonner', sonner],
  ['slider', slider],
  ['skeleton', skeleton],
  ['sidebar', sidebar],
  ['sheet', sheet],
  ['separator', separator],
  ['select', select],
  ['scrollarea', scrollarea],
  ['resizable', resizable],
  ['radiogroup', radiogroup],
  ['progress', progress],
  ['popover', popover],
  ['pagination', pagination],
  ['navigationmenu', navigationmenu],
  ['menubar', menubar],
  ['label', label],
  ['input', input],
  ['inputotp', inputotp],
  ['hovercard', hovercard],
  ['form', form],
  ['dropdownmenu', dropdownmenu],
  ['drawer', drawer],
  ['dialog', dialog],
  ['contextmenu', contextmenu],
  ['command', command],
  ['collapsible', collapsible],
  ['checkbox', checkbox],
  ['chart', chart],
  ['carousel', carousel],
  ['card', card],
  ['calendar', calendar],
  ['button', button],
  ['breadcrumb', breadcrumb],
  ['badge', badge],
  ['avatar', avatar],
  ['aspectratio', aspectratio],
  ['alert', alert],
  ['alertdialog', alertdialog],
  ['accordion', accordion],
  ['TopicListing', TopicListing],
  ['TopicItemdev', TopicItemdev],
  ['topiclistingprops', topiclistingprops],
  ['themeproviderdev', themeproviderdev],
  ['TextBannerDefaultdev', TextBannerDefaultdev],
  ['TextBanner02dev', TextBanner02dev],
  ['TextBanner01dev', TextBanner01dev],
  ['TextBanner', TextBanner],
  ['textbannerprops', textbannerprops],
  ['TestimonialCarouselItem', TestimonialCarouselItem],
  ['TestimonialCarousel', TestimonialCarousel],
  ['testimonialcarouselprops', testimonialcarouselprops],
  ['Title', Title],
  ['RowSplitter', RowSplitter],
  ['RichText', RichText],
  ['Promo', Promo],
  ['PartialDesignDynamicPlaceholder', PartialDesignDynamicPlaceholder],
  ['PageContent', PageContent],
  ['Navigation', Navigation],
  ['LinkList', LinkList],
  ['Image', Image],
  ['ContentBlock', ContentBlock],
  ['Container', Container],
  ['ColumnSplitter', ColumnSplitter],
  ['SubscriptionBanner', SubscriptionBanner],
  ['subscriptionbannerprops', subscriptionbannerprops],
  ['subscriptionbannerdictionary', subscriptionbannerdictionary],
  ['SiteMetadata', SiteMetadata],
  ['sitemetadataprops', sitemetadataprops],
  ['SecondaryNavigation', SecondaryNavigation],
  ['secondarynavigationprops', secondarynavigationprops],
  ['RichTextBlock', RichTextBlock],
  ['richtextblockprops', richtextblockprops],
  ['PromoBlock', PromoBlock],
  ['promoblockprops', promoblockprops],
  ['PromoAnimatedImageRightdev', PromoAnimatedImageRightdev],
  ['PromoAnimatedDefaultdev', PromoAnimatedDefaultdev],
  ['PromoAnimated', PromoAnimated],
  ['promoanimatedutil', promoanimatedutil],
  ['promoanimatedprops', promoanimatedprops],
  ['portaldev', portaldev],
  ['PageHeader', PageHeader],
  ['pageheaderprops', pageheaderprops],
  ['MultiPromoTabs', MultiPromoTabs],
  ['MultiPromoTabdev', MultiPromoTabdev],
  ['multipromotabsprops', multipromotabsprops],
  ['MultiPromoItemdev', MultiPromoItemdev],
  ['MultiPromo', MultiPromo],
  ['multipromoprops', multipromoprops],
  ['modetoggledev', modetoggledev],
  ['MediaSectiondev', MediaSectiondev],
  ['mediasectionprops', mediasectionprops],
  ['meteors', meteors],
  ['LogoTabs', LogoTabs],
  ['LogoItem', LogoItem],
  ['logotabsprops', logotabsprops],
  ['logoprops', logoprops],
  ['Logodev', Logodev],
  ['nextImageSrcdev', nextImageSrcdev],
  ['ImageWrapperdev', ImageWrapperdev],
  ['ImageBlock', ImageBlock],
  ['imageprops', imageprops],
  ['imageoptimizationcontext', imageoptimizationcontext],
  ['Icon', Icon],
  ['YoutubeIcondev', YoutubeIcondev],
  ['TwitterIcondev', TwitterIcondev],
  ['signaldev', signaldev],
  ['playdev', playdev],
  ['LinkedInIcondev', LinkedInIcondev],
  ['InternalIcondev', InternalIcondev],
  ['InstagramIcondev', InstagramIcondev],
  ['FileIcondev', FileIcondev],
  ['FacebookIcondev', FacebookIcondev],
  ['ExternalIcondev', ExternalIcondev],
  ['EmailIcondev', EmailIcondev],
  ['diversitydev', diversitydev],
  ['crossarrowsdev', crossarrowsdev],
  ['communitiesdev', communitiesdev],
  ['arrowuprightdev', arrowuprightdev],
  ['arrowrightdev', arrowrightdev],
  ['arrowleftdev', arrowleftdev],
  ['HeroST', HeroST],
  ['Hero', Hero],
  ['heroprops', heroprops],
  ['GlobalHeader', GlobalHeader],
  ['globalheaderprops', globalheaderprops],
  ['GlobalFooter', GlobalFooter],
  ['globalfooterprops', globalfooterprops],
  ['FooterNavigationColumn', FooterNavigationColumn],
  ['FooterNavigationCalloutdev', FooterNavigationCalloutdev],
  ['floatingdockdev', floatingdockdev],
  ['Flexdev', Flexdev],
  ['CtaBanner', CtaBanner],
  ['containerutil', containerutil],
  ['ContainerFullWidth', ContainerFullWidth],
  ['ContainerFullBleed', ContainerFullBleed],
  ['Container7030', Container7030],
  ['Container70', Container70],
  ['Container6321', Container6321],
  ['Container6040', Container6040],
  ['Container5050', Container5050],
  ['Container4060', Container4060],
  ['Container3070', Container3070],
  ['Container303030', Container303030],
  ['Container25252525', Container25252525],
  ['Carddev', Carddev],
  ['ButtonComponent', ButtonComponent],
  ['Breadcrumbs', Breadcrumbs],
  ['BackgroundThumbnaildev', BackgroundThumbnaildev],
  ['ArticleListing', ArticleListing],
  ['ArticleHeader', ArticleHeader],
  ['articleheaderdictionary', articleheaderdictionary],
  ['AnimatedSectiondev', AnimatedSectiondev],
  ['AlertBannerdev', AlertBannerdev],
  ['AccordionBlockItemdev', AccordionBlockItemdev],
  ['AccordionBlockDefaultdev', AccordionBlockDefaultdev],
  ['AccordionBlock', AccordionBlock],
  ['accordionblockprops', accordionblockprops],
]);

export default componentMap;
