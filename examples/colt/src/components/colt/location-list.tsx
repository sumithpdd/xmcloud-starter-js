'use client';

import { Text } from '@sitecore-content-sdk/nextjs';
import LocationCard from './location-card';
import type { JSX } from 'react/jsx-runtime';
import type { ComponentProps } from '@/lib/component-props';
type Location = {
  id?: string;
  fields?: {
    image?: { value: { src: string; alt?: string } };
    city?: { value: string };
    country?: { value: string };
    region?: { value: string };
    capacity?: { value: string };
    status?: { value: string };
    features?: Array<{ value: string }>;
    link?: { value: { href: string } };
  };
};

type LocationListProps = ComponentProps & {
  fields: {
    heading?: { value: string };
    subheading?: { value: string };
    filterByRegion?: { value: string };
    locations: Location[];
  };
};

const LocationList = (props: LocationListProps): JSX.Element => {
  const { heading, subheading, filterByRegion, locations } = props.fields;

  // Default locations if no Sitecore data
  const defaultLocations = [
    {
      fields: {
        image: { value: { src: '/london-data-center.jpg', alt: 'London Data Centre' } },
        city: { value: 'London' },
        country: { value: 'United Kingdom' },
        region: { value: 'Europe' },
        capacity: { value: '50MW' },
        status: { value: 'Operational' },
        features: [
          { value: 'Tier III+ Certified' },
          { value: 'Carrier-neutral connectivity' },
          { value: '24/7 security and monitoring' },
        ],
        link: { value: { href: '/locations/london' } },
      },
    },
    {
      fields: {
        image: { value: { src: '/frankfurt-data-center.jpg', alt: 'Frankfurt Data Centre' } },
        city: { value: 'Frankfurt' },
        country: { value: 'Germany' },
        region: { value: 'Europe' },
        capacity: { value: '45MW' },
        status: { value: 'Operational' },
        features: [
          { value: "Germany's premier interconnection hub" },
          { value: 'Direct cloud connectivity' },
          { value: 'ISO 27001 certified' },
        ],
        link: { value: { href: '/locations/frankfurt' } },
      },
    },
    {
      fields: {
        image: { value: { src: '/paris-data-center.jpg', alt: 'Paris Data Centre' } },
        city: { value: 'Paris' },
        country: { value: 'France' },
        region: { value: 'Europe' },
        capacity: { value: '60MW' },
        status: { value: 'In Development' },
        features: [
          { value: 'Hyperscale capacity' },
          { value: '100% renewable energy' },
          { value: 'Advanced cooling systems' },
        ],
        link: { value: { href: '/locations/paris' } },
      },
    },
    {
      fields: {
        image: { value: { src: '/tokyo-data-center.jpg', alt: 'Tokyo Data Centre' } },
        city: { value: 'Tokyo' },
        country: { value: 'Japan' },
        region: { value: 'Asia-Pacific' },
        capacity: { value: '40MW' },
        status: { value: 'Operational' },
        features: [
          { value: 'Ultra-low latency' },
          { value: 'Seismic-resistant design' },
          { value: 'Multi-cloud connectivity' },
        ],
        link: { value: { href: '/locations/tokyo' } },
      },
    },
    {
      fields: {
        image: {
          value: { src: '/osaka-japan-cityscape-data-center.jpg', alt: 'Osaka Data Centre' },
        },
        city: { value: 'Osaka' },
        country: { value: 'Japan' },
        region: { value: 'Asia-Pacific' },
        capacity: { value: '130MW' },
        status: { value: 'In Development' },
        features: [
          { value: 'Joint venture with ESR' },
          { value: 'Hyperscale infrastructure' },
          { value: 'Strategic location' },
        ],
        link: { value: { href: '/locations/osaka' } },
      },
    },
    {
      fields: {
        image: { value: { src: '/mumbai-data-center.jpg', alt: 'Mumbai Data Centre' } },
        city: { value: 'Mumbai' },
        country: { value: 'India' },
        region: { value: 'Asia-Pacific' },
        capacity: { value: '35MW' },
        status: { value: 'Operational' },
        features: [
          { value: 'Gateway to Indian market' },
          { value: 'Tier III certified' },
          { value: 'Redundant power systems' },
        ],
        link: { value: { href: '/locations/mumbai' } },
      },
    },
  ];

  const displayLocations = locations?.length > 0 ? locations : defaultLocations;

  // Filter by region if specified
  const filteredLocations = filterByRegion?.value
    ? displayLocations.filter((loc) => {
        const locFields = loc.fields || {};
        return locFields.region?.value === filterByRegion.value;
      })
    : displayLocations;

  // Group locations by region
  const locationsByRegion = filteredLocations.reduce(
    (acc, location) => {
      const locFields = location.fields || {};
      const region = locFields.region?.value || 'Other';
      if (!acc[region]) {
        acc[region] = [];
      }
      acc[region].push(location);
      return acc;
    },
    {} as Record<string, Location[]>
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          {heading?.value && (
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <Text field={heading} />
            </h2>
          )}
          {subheading?.value && (
            <p className="text-xl text-gray-600">
              <Text field={subheading} />
            </p>
          )}
        </div>

        {/* Locations by Region */}
        {Object.entries(locationsByRegion).map(([region, regionLocations]) => (
          <div key={region} className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{region}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regionLocations.map((location, index) => (
                <LocationCard
                  {...props}
                  key={location.id || index}
                  fields={location.fields || {}}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LocationList;
