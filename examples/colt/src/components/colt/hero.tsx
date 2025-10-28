import {
  Text,
  RichText,
  Image,
  type ImageField,
  type Field,
} from "@sitecore-content-sdk/nextjs"
import type { ComponentProps } from "@/lib/component-props"
import type { JSX as ReactJSX } from "react/jsx-runtime"

type HeroProps = ComponentProps & {
  fields: {
    title?: Field<string>
    subtitle?: Field<string>
    backgroundImage?: ImageField
  }
}

const Hero = (props: HeroProps): ReactJSX.Element => {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        {props.fields?.backgroundImage ? (
          <Image field={props.fields.backgroundImage} className="w-full h-full object-cover" />
        ) : (
          <img src="/modern-data-center-cityscape.jpg" alt="Hero background" className="w-full h-full object-cover" />
        )}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
        {props.fields?.title ? (
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <Text field={props.fields.title} />
          </h1>
        ) : (
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Welcome to Colt Data Centre Services</h1>
        )}

        {props.fields?.subtitle ? (
          <div className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            <RichText field={props.fields.subtitle} />
          </div>
        ) : (
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Secure, resilient, well-connected infrastructure for global hyperscalers and large enterprises
          </p>
        )}
      </div>
    </section>
  )
}

export default Hero
