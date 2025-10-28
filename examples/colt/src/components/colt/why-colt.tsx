import type { ImageField, Field } from "@sitecore-content-sdk/nextjs"
import type { ComponentProps } from "@/lib/component-props"
import type { JSX } from "react/jsx-runtime"

type Feature = {
  icon: ImageField
  title: Field<string>
  description: Field<string>
}

type WhyColtProps = ComponentProps & {
  fields?: {
    title?: Field<string>
    features?: Feature[]
  }
}

export const WhyColt = (props: WhyColtProps): JSX.Element => {
  const defaultFeatures = [
    {
      icon: {
        value: { src: "https://www.coltdatacentres.net/-/media/Images/icons/latest-grid-icons/excellence-icon.png" },
      },
      title: { value: "25 Years Experience" },
      description: { value: "First data centres were built in 1999 and Hyperscale operations started in 2016" },
    },
    {
      icon: {
        value: { src: "https://www.coltdatacentres.net/-/media/Images/icons/latest-grid-icons/location-icon.svg" },
      },
      title: { value: "Significant Global Footprint" },
      description: {
        value:
          "13 Operational data centres and 19 in Development across 11 cities in UK, France, Germany, Netherlands, India and Japan",
      },
    },
    {
      icon: {
        value: {
          src: "https://www.coltdatacentres.net/-/media/Images/icons/latest-grid-icons/icons-investment-350.png",
        },
      },
      title: { value: "Strong Growth Plan" },
      description: { value: "10 owned sites to develop from 190MW to 1GW in 10 years" },
    },
    {
      icon: {
        value: {
          src: "https://www.coltdatacentres.net/-/media/Images/icons/latest-grid-icons/sustainability-icon.png",
        },
      },
      title: { value: "Sustainability" },
      description: { value: "Net Zero emissions from our operations by 2045" },
    },
    {
      icon: { value: { src: "https://www.coltdatacentres.net/-/media/Images/icons/latest-grid-icons/icon-48.png" } },
      title: { value: "Customer Focus" },
      description: { value: "75 NPS Score, Advanced telemetry & portals, Local and global support" },
    },
    {
      icon: {
        value: {
          src: "https://www.coltdatacentres.net/-/media/Images/icons/latest-grid-icons/icon-scalable-capacity-54.png",
        },
      },
      title: { value: "Flexible and Scalable" },
      description: {
        value: "Adaptable design: air, hybrid and water cooling. Multi-hall and multi-building scalability",
      },
    },
  ]

  const features = props.fields?.features || defaultFeatures
  const title = props.fields?.title?.value || "Why Colt Data Centre Services?"

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full bg-[#00BFA5] flex items-center justify-center mb-6">
                <img
                  src={feature.icon.value?.src || "/placeholder.svg"}
                  alt={feature.title.value}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title.value}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyColt
