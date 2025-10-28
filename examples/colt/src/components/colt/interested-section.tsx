import type {  TextField, LinkField } from "@sitecore-content-sdk/nextjs"
import type { JSX } from "react/jsx-runtime"
import type { ComponentProps } from "@/lib/component-props"
type InterestedSectionProps = ComponentProps & {
  fields?: {
    title?: TextField
    description?: TextField
    buttonText?: TextField
    buttonLink?: LinkField
  }
}

export const InterestedSection = (props: InterestedSectionProps): JSX.Element => {
  const title = props.fields?.title?.value || "Interested to know more about our data centres?"
  const description = props.fields?.description?.value || "Get in touch with our team to discuss your requirements"
  const buttonText = props.fields?.buttonText?.value || "Contact us"
  const buttonLink = props.fields?.buttonLink?.value?.href || "/contact"

  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">{title}</h2>
        <p className="text-lg text-gray-600 mb-8">{description}</p>
        <a
          href={buttonLink}
          className="inline-block bg-[#00BFA5] hover:bg-[#00A890] text-white font-semibold px-8 py-3 rounded transition-colors"
        >
          {buttonText}
        </a>
      </div>
    </section>
  )
}

export default InterestedSection
