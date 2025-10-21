import type React from 'react';
import { Text, Image, Link, type Field, type ImageField, type LinkField } from '@sitecore-content-sdk/nextjs';
import { ComponentProps } from '@/lib/component-props';

interface ProductDetailHeaderProps {
  fields?: {
    badge: Field<string>;
    title: Field<string>;
    model: Field<string>;
    productStatus: Field<string>;
    features: Field<string>[];
    image: ImageField;
    datasheetLink: LinkField;
  };
}

type ProductDetailHeaderComponentProps = ComponentProps & ProductDetailHeaderProps;

export const Default: React.FC<ProductDetailHeaderComponentProps> = (props) => {
  const { fields } = props;

  // Dummy data fallback
  const headerData = {
    badge: { value: "New" },
    title: { value: "5G NR AX1800　Wi-Fi 6 Mobile Hotspot" },
    model: { value: "F518" },
    productStatus: { value: "Live" },
    features: [
      { value: "5G Connectivity: Built-in 5G/4G modem for high-speed Internet and seamless network access anywhere" },
      {
        value:
          "Dual Band Wi-Fi 6 Technology: Supports both 5 GHz and 2.4 GHz Wi-Fi bands for flexible and reliable connections",
      },
      {
        value:
          "Ease of Use: Features an easy SIM card slot for plug-and-play Internet access and shares the mobile network",
      },
      {
        value:
          "All-day Battery: High-capacity 8000mAh battery provides extended usage up to 16 hours and supports reverse charging",
      },
      { value: "Connect Up to 16 Devices: Shares a single mobile broadband connection with up to 16 devices" },
      { value: "On-the-Go Power: More than a hotspot, also a power bank equipped with PD 3.0 for rapid charging" },
      { value: "Advanced Security: Supports the latest Wi-Fi security protocols and cybersecurity certification" },
      { value: "Clear Signal Indicators: Different colors and blinking patterns convey clear information" },
      {
        value:
          "User-Friendly Design: Compact and portable design, easy to carry, perfect for travelers and digital nomads",
      },
    ],
    image: { value: { src: "/f518-5g-mobile-hotspot-device.jpg", alt: "F518 5G Mobile Hotspot" } },
    datasheetLink: { value: { href: "/datasheets/f518.pdf", text: "Download the datasheet" } },
  };

  // Use Sitecore data if available, otherwise use dummy data
  const data = fields || headerData;
    return (
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column - Product Info */}
            <div>
              {data.badge && (
                <Text field={data.badge} tag="span" className="inline-block bg-primary text-white text-xs font-semibold px-3 py-1 rounded mb-4" />
              )}

              {data.title && (
                <Text field={data.title} tag="h1" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" />
              )}

              {data.model && (
                <Text field={data.model} tag="h2" className="text-2xl md:text-3xl font-semibold text-primary mb-6" />
              )}

              {data.productStatus && (
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-sm text-gray-600">Product Status:</span>
                  <span className="inline-flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <Text field={data.productStatus} tag="span" className="text-sm font-medium text-gray-900" />
                  </span>
                </div>
              )}

              {data.features && data.features.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {data.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <Text field={feature} tag="span" className="text-gray-700" />
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {data.datasheetLink && (
                <Link
                  field={data.datasheetLink}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-hover font-medium transition-colors"
                />
              )}
            </div>

            {/* Right Column - Product Image */}
            <div className="flex items-center justify-center">
              {data.image && (
                <Image
                  field={data.image}
                  className="w-full h-auto max-w-md"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
};