import {
  Text,
  RichText,
  Link,
  Image,
  type ImageField,
  type Field,
  type LinkField, 
} from "@sitecore-content-sdk/nextjs"
import type { ComponentProps } from "@/lib/component-props"
type LocationDetailsProps = ComponentProps & {
  fields: {
    title: Field<string>
    description: Field<string>
    mainImage: ImageField
    detailImage: ImageField
    content: Field<string>
    ctaText: Field<string>
    ctaLink: LinkField
  }
}

const LocationDetails = (props: LocationDetailsProps): JSX.Element => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title and Description */}
        <div className="mb-12">
          {props.fields?.title ? (
            <h2 className="text-4xl font-bold mb-4">
              <Text field={props.fields.title} />
            </h2>
          ) : (
            <h2 className="text-4xl font-bold mb-4">Data Centre with 35MW IT power</h2>
          )}

          {props.fields?.description && (
            <div className="text-lg text-gray-600">
              <RichText field={props.fields.description} />
            </div>
          )}
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Left Column - Content */}
          <div>
            {props.fields?.content ? (
              <div className="prose prose-lg">
                <RichText field={props.fields.content} />
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-gray-700">
                  Colt London North Data Centre, located in Welwyn Garden City, supports both large enterprise and cloud
                  customers and is designed to a Colt tier 3 specification.
                </p>
                <p className="text-gray-700">
                  Supplying 35MW of IT power, this site has a gross technical area of 21,339 m².
                </p>
                <p className="text-gray-700">
                  Originally designed for demanding large enterprise and financial service institutions, Colt London
                  North Data Centre has been further developed and is now home to cloud service providers and
                  organisations that require scalable capacity.
                </p>
              </div>
            )}

            {props.fields?.ctaText && props.fields?.ctaLink ? (
              <Link
                field={props.fields.ctaLink}
                className="inline-block mt-8 bg-[#00BFA5] hover:bg-[#00A890] text-white px-8 py-3 rounded transition-colors"
              >
                <Text field={props.fields.ctaText} />
              </Link>
            ) : (
              <button className="mt-8 bg-[#00BFA5] hover:bg-[#00A890] text-white px-8 py-3 rounded transition-colors">
                Book a tour
              </button>
            )}
          </div>

          {/* Right Column - Image */}
          <div>
            {props.fields?.detailImage ? (
              <Image field={props.fields.detailImage} className="w-full rounded-lg shadow-lg" />
            ) : (
              <img
                src="/specification-sheet-document-preview.jpg"
                alt="Data centre"
                className="w-full rounded-lg shadow-lg"
              />
            )}
          </div>
        </div>

        {/* Specification Sheet */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">Colt London North Data Centre Specification Sheet</h3>
              <p className="text-gray-600">
                Download the Colt London North Data Centre specification sheet for more information, as we explore the
                features and benefits of selecting this data centre.
              </p>
            </div>

            <div className="flex-shrink-0">
              <img
                src="/specification-sheet-document-preview.jpg"
                alt="Specification sheet"
                className="w-40 rounded shadow-md"
              />
            </div>
          </div>

          <button className="mt-6 bg-[#00BFA5] hover:bg-[#00A890] text-white px-8 py-3 rounded transition-colors">
            Download now
          </button>
        </div>
      </div>
    </section>
  )
}

export default LocationDetails
