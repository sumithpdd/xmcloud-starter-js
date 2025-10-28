"use client"

import { Image, Text } from "@sitecore-content-sdk/nextjs"
import type { JSX } from "react/jsx-runtime"
import type { ComponentProps } from "@/lib/component-props"
type LocationCardProps = ComponentProps & {
  fields: {
    image?: { value: { src: string; alt?: string } }
    city?: { value: string }
    country?: { value: string }
    capacity?: { value: string }
    status?: { value: string }
    features?: Array<{ value: string }>
    link?: { value: { href: string } }
  }
}

const LocationCard = (props: LocationCardProps): JSX.Element => {
  const { image, city, country, capacity, status, features, link } = props.fields

  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
      {/* Location Image */}
      <div className="relative h-56 overflow-hidden">
        {image?.value?.src ? (
          <Image
            field={image}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <img
            src="/modern-data-center-cityscape.jpg"
            alt="Data Centre Location"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        )}
        {status?.value && (
          <div className="absolute top-4 right-4">
            <span
              className={`px-3 py-1 rounded text-sm font-medium ${
                status.value === "Operational"
                  ? "bg-green-500 text-white"
                  : status.value === "In Development"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-500 text-white"
              }`}
            >
              <Text field={status} />
            </span>
          </div>
        )}
      </div>

      {/* Location Details */}
      <div className="p-6">
        {/* City and Country */}
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-gray-900 mb-1">{city?.value ? <Text field={city} /> : "City"}</h3>
          <p className="text-gray-600">{country?.value ? <Text field={country} /> : "Country"}</p>
        </div>

        {/* Capacity */}
        {capacity?.value && (
          <div className="mb-4 pb-4 border-b border-gray-200">
            <div className="flex items-center gap-2 text-gray-700">
              <svg className="w-5 h-5 text-[#00BFA5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="font-medium">
                <Text field={capacity} /> Capacity
              </span>
            </div>
          </div>
        )}

        {/* Features */}
        {features && features.length > 0 && (
          <div className="mb-4">
            <ul className="space-y-2">
              {features.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-[#00BFA5] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{feature.value}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* View Details Link */}
        <a
          href={link?.value?.href || "#"}
          className="inline-flex items-center text-[#00BFA5] font-medium hover:text-[#00A890] transition-colors"
        >
          View details
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default LocationCard
