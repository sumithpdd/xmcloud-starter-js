import { Image, type ImageField, type Field, Text } from "@sitecore-content-sdk/nextjs"
import type { ComponentProps } from "@/lib/component-props"
import type { JSX } from "react/jsx-runtime"


type ArticleHeroProps = ComponentProps & {
  fields: {
    title?: Field<string>
    category?: Field<string>
    date?: Field<string>
    image?: ImageField
  }
}

const ArticleHero = (props: ArticleHeroProps): JSX.Element => {
  return (
    <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        {props.fields?.image ? (
          <Image field={props.fields.image} className="w-full h-full object-cover" />
        ) : (
          <img
            src="/modern-office-workspace-technology.jpg"
            alt="Article hero"
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
        {props.fields?.category && (
          <div className="mb-4">
            <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm">
              <Text field={props.fields.category} />
            </span>
            {props.fields?.date && (
              <span className="ml-4 text-sm">
                <Text field={props.fields.date} />
              </span>
            )}
          </div>
        )}

        {props.fields?.title ? (
          <h1 className="text-4xl md:text-5xl font-bold">
            <Text field={props.fields.title} />
          </h1>
        ) : (
          <h1 className="text-4xl md:text-5xl font-bold">
            ESR and Colt DCS Announce Joint Venture on New Osaka Data Centre Development
          </h1>
        )}
      </div>
    </section>
  )
}

export default ArticleHero
