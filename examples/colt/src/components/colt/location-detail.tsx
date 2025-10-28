'use client';

import {
  Image,
  Text,
  RichText,
} from '@sitecore-content-sdk/nextjs';
import type { JSX } from 'react/jsx-runtime';
import type { ComponentProps } from '@/lib/component-props';
type LocationDetailProps = ComponentProps & {
  fields: {
    heroImage?: { value: { src: string; alt?: string } };
    city?: { value: string };
    country?: { value: string };
    address?: { value: string };
    capacity?: { value: string };
    status?: { value: string };
    description?: { value: string };
    specifications?: Array<{
      label?: { value: string };
      value?: { value: string };
    }>;
    features?: Array<{
      icon?: { value: string };
      title?: { value: string };
      description?: { value: string };
    }>;
    certifications?: Array<{ value: string }>;
    contactEmail?: { value: string };
    contactPhone?: { value: string };
  };
};

const LocationDetail = (props: LocationDetailProps): JSX.Element => {
  const {
    heroImage,
    city,
    country,
    address,
    capacity,
    status,
    description,
    specifications,
    features,
    certifications,
    contactEmail,
    contactPhone,
  } = props.fields;

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px] w-full">
        {heroImage?.value?.src ? (
          <Image field={heroImage} className="w-full h-full object-cover" />
        ) : (
          <img
            src="/modern-data-center-cityscape.jpg"
            alt="Data Centre"
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

        {/* Location Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between">
              <div className="text-white">
                <h1 className="text-5xl font-bold mb-2">
                  {city?.value ? <Text field={city} /> : 'City'}
                  {country?.value && (
                    <span className="text-3xl font-normal ml-4">
                      <Text field={country} />
                    </span>
                  )}
                </h1>
                {address?.value && (
                  <p className="text-lg opacity-90">
                    <Text field={address} />
                  </p>
                )}
              </div>
              {status?.value && (
                <span
                  className={`px-4 py-2 rounded text-sm font-medium ${
                    status.value === 'Operational'
                      ? 'bg-green-500 text-white'
                      : status.value === 'In Development'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-500 text-white'
                  }`}
                >
                  <Text field={status} />
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Description */}
            {description?.value && (
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Overview</h2>
                <div className="prose prose-lg max-w-none text-gray-600">
                  <RichText field={description} />
                </div>
              </div>
            )}

            {/* Features */}
            {features && features.length > 0 && (
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-[#00BFA5]/10 flex items-center justify-center">
                          <svg
                            className="w-6 h-6 text-[#00BFA5]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                      </div>
                      <div>
                        {feature.title?.value && (
                          <h3 className="font-bold text-gray-900 mb-2">
                            <Text field={feature.title} />
                          </h3>
                        )}
                        {feature.description?.value && (
                          <p className="text-gray-600">
                            <Text field={feature.description} />
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Specifications */}
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Specifications</h3>
              <dl className="space-y-4">
                {capacity?.value && (
                  <div>
                    <dt className="text-sm text-gray-600 mb-1">Total Capacity</dt>
                    <dd className="text-lg font-semibold text-gray-900">
                      <Text field={capacity} />
                    </dd>
                  </div>
                )}
                {specifications &&
                  specifications.map((spec, index) => (
                    <div key={index}>
                      {spec.label?.value && (
                        <dt className="text-sm text-gray-600 mb-1">
                          <Text field={spec.label} />
                        </dt>
                      )}
                      {spec.value?.value && (
                        <dd className="text-lg font-semibold text-gray-900">
                          <Text field={spec.value} />
                        </dd>
                      )}
                    </div>
                  ))}
              </dl>
            </div>

            {/* Certifications */}
            {certifications && certifications.length > 0 && (
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Certifications</h3>
                <ul className="space-y-2">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-700">
                      <svg
                        className="w-5 h-5 text-[#00BFA5]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{cert.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Contact */}
            <div className="bg-[#00BFA5] text-white rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
              <p className="mb-4">
                Interested in this location? Contact our team for more information.
              </p>
              <div className="space-y-3">
                {contactEmail?.value && (
                  <a
                    href={`mailto:${contactEmail.value}`}
                    className="flex items-center gap-2 hover:underline"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <Text field={contactEmail} />
                  </a>
                )}
                {contactPhone?.value && (
                  <a
                    href={`tel:${contactPhone.value}`}
                    className="flex items-center gap-2 hover:underline"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <Text field={contactPhone} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationDetail;
