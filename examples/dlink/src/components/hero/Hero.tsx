import { useState, useEffect } from 'react';
import { Text, useSitecore } from '@sitecore-content-sdk/nextjs';
import { cva } from 'class-variance-authority';
import { Play, Pause } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NoDataFallback } from '@/utils/NoDataFallback';
import { EditableButton } from '@/components/button-component/ButtonComponent';
import { Default as AnimatedSection } from '@/components/animated-section/AnimatedSection.dev';
import { Button } from '@/components/ui/button';
import { Default as MediaSection } from '@/components/media-section/MediaSection.dev';
import { HeroProps } from './hero.props';

// Define heroVariants using class-variance-authority for styling
export const heroVariants = cva('hero @container py-24 relative w-full overflow-hidden', {
  variants: {
    colorScheme: {
      primary: 'bg-primary text-primary-foreground',
      secondary: 'bg-secondary text-primary',
      tertiary: 'bg-tertiary text-primary',
      dark: 'bg-dark text-primary',
      light: 'bg-light text-primary',
    },
  },
  defaultVariants: {
    colorScheme: 'light',
  },
});

export const Default: React.FC<HeroProps> = ({ fields, params }) => {
  // Destructure fields and params

  const {
    titleRequired,
    descriptionOptional,
    linkOptional,
    heroVideoOptional1,
    heroImageOptional1,
    heroVideoOptional2,
    heroImageOptional2,
    heroVideoOptional3,
    heroImageOptional3,
    heroVideoOptional4,
    heroImageOptional4,
  } = fields || {};

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const { page } = useSitecore();
  const isPageEditing = page.mode.isEditing;

  const { colorScheme } = params;
  // Use custom hook to match media queries
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    setIsPlaying(!mediaQuery.matches);
  }, []);

  if (fields) {
    return (
      <section className={cn(heroVariants({ colorScheme }), [params?.styles && params.styles])}>
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Video/Image */}
          <div className="absolute inset-0 z-0">
            <MediaSection
              video={heroVideoOptional1?.value?.href}
              image={heroImageOptional1}
              className="w-full h-full object-cover"
              pause={!isPlaying}
              reducedMotion={isPageEditing || prefersReducedMotion}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <AnimatedSection
              direction="up"
              className="space-y-8"
              isPageEditing={isPageEditing}
            >
              {(titleRequired?.value || isPageEditing) && (
                <Text
                  tag="h1"
                  field={titleRequired}
                  className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
                />
              )}
              
              {(descriptionOptional?.value || isPageEditing) && (
                <Text
                  tag="p"
                  className="font-body text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed"
                  field={descriptionOptional}
                />
              )}
              
              {linkOptional && (
                <div className="pt-4">
                  <EditableButton
                    buttonLink={linkOptional}
                    className="bg-primary hover:bg-primary-hover text-white px-8 py-4 text-lg font-semibold rounded-lg transition-colors duration-200 inline-block"
                    isPageEditing={isPageEditing}
                  />
                </div>
              )}
            </AnimatedSection>
          </div>
        </div>
        {/* Play/Pause button - A11y */}
        {!prefersReducedMotion && (
          <Button
            variant="link"
            size="icon"
            onClick={() => setIsPlaying((previousState) => !previousState)}
            className="absolute bottom-2 right-2"
            aria-label={isPlaying ? 'Pause Ambient Video' : 'Play Ambient'}
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
          </Button>
        )}
      </section>
    );
  }

  return <NoDataFallback componentName="Hero" />;
};
