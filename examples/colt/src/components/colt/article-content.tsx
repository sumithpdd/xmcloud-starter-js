import {
  Text,
  RichText,
  Image,
  type ImageField,
  type Field,
} from "@sitecore-content-sdk/nextjs"
import type { ComponentProps } from "@/lib/component-props"
type ArticleContentProps = ComponentProps & {
  fields: {
    content: Field<string>
    authorImage: ImageField
    authorName: Field<string>
    authorTitle: Field<string>
    authorQuote: Field<string>
  }
}

const ArticleContent = (props: ArticleContentProps): JSX.Element => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        {/* Main Content */}
        {props.fields?.content ? (
          <div className="prose prose-lg max-w-none mb-12">
            <RichText field={props.fields.content} />
          </div>
        ) : (
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg leading-relaxed text-gray-700">
              ESR, an Asia-Pacific ("APAC") focused real asset owner and manager, and Colt Data Centre Services ("Colt
              DCS"), a global provider of hyperscale, AI and large enterprise data centre solutions, have entered into a
              joint venture to develop the first phase of a 130 MW hyperscale data centre site in Minoh City, Osaka,
              Japan.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mt-4">
              The first phase, comprising 65 MW, will be designed and built by the ESR–Colt DCS joint venture and
              operated by Colt DCS. Strategically located in APAC's second largest data centre market, the campus will
              support Japan's accelerating public cloud adoption, digital transformation, and artificial intelligence
              ("AI") solutions.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mt-4">
              Site preparation work is already underway, with initial data centre building construction scheduled to
              begin in 2027 and expected to be ready for service in late 2029.
            </p>
          </div>
        )}

        {/* Author Quote Section */}
        {(props.fields?.authorImage || props.fields?.authorName) && (
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="flex gap-6 items-start">
              {props.fields?.authorImage ? (
                <Image field={props.fields.authorImage} className="w-24 h-24 rounded-lg object-cover flex-shrink-0" />
              ) : (
                <img
                  src="/professional-headshot.png"
                  alt="Author"
                  className="w-24 h-24 rounded-lg object-cover flex-shrink-0"
                />
              )}

              <div>
                {props.fields?.authorQuote ? (
                  <blockquote className="text-lg text-gray-700 mb-4 italic">
                    <RichText field={props.fields.authorQuote} />
                  </blockquote>
                ) : (
                  <blockquote className="text-lg text-gray-700 mb-4 italic">
                    "Colt DCS has built a strong track record of delivering world-class data centres for our hyperscale
                    customers in Japan. The joint venture with ESR will allow us to accelerate our expansion in Japan,
                    enabling us to support the expansion plans for our global cloud customers and the emerging AI
                    sector."
                  </blockquote>
                )}

                {props.fields?.authorName && (
                  <div className="font-bold text-gray-900">
                    <Text field={props.fields.authorName} />
                  </div>
                )}

                {props.fields?.authorTitle && (
                  <div className="text-gray-600">
                    <Text field={props.fields.authorTitle} />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default ArticleContent
