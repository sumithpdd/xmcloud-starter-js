import type React from 'react';
import { Text, Image, type Field, type ImageField } from '@sitecore-content-sdk/nextjs';
import { NoDataFallback } from '@/utils/NoDataFallback';
import { ComponentProps } from '@/lib/component-props';

interface OverviewBlock {
  fields: {
    title: Field<string>;
    description: Field<string>;
    image: ImageField;
    imagePosition: Field<string>;
  };
}

interface ProductOverviewSectionProps {
  fields?: {
    sectionTitle: Field<string>;
    blocks: OverviewBlock[];
  };
}

type ProductOverviewSectionComponentProps = ComponentProps & ProductOverviewSectionProps;

export const Default: React.FC<ProductOverviewSectionComponentProps> = (props) => {
  const { fields } = props;

  // Dummy data fallback
  const overviewData = {
    sectionTitle: { value: "Overview" },
    blocks: [
      {
        fields: {
          title: { value: "Experience Next-Generation 5G Connectivity" },
          description: {
            value:
              "5G features unparalleled broadband speeds, low latency, increased bandwidth, and support for more connected devices compared to 4G networks, delivering instant high-speed connectivity anytime, anywhere.",
          },
          image: { value: { src: "/5g-network-connectivity-illustration.jpg", alt: "5G Connectivity" } },
          imagePosition: { value: "right" },
        },
      },
      {
        fields: {
          title: { value: "Your Pocket-Sized Network,　Go Where You Want" },
          description: {
            value:
              "Stay connected wherever you go with the F518 5G NR AX1800 Wi-Fi 6 Mobile Hotspot, designed for life on the move. Powered by built-in 5G connectivity and dual-band Wi-Fi 6, it delivers ultra-fast, reliable Internet and connects multiple devices, anywhere, without the need for fixed-line Internet.",
          },
          image: { value: { src: "/portable-mobile-hotspot-in-pocket.jpg", alt: "Portable Hotspot" } },
          imagePosition: { value: "left" },
        },
      },
      {
        fields: {
          title: { value: "Hassle-Free Connectivity" },
          description: {
            value:
              "No setup, no hassle, just insert a Nano SIM card and you're ready to go. A user-friendly SIM card slot enables instant, plug-and-play Internet access without the need for fixed broadband.",
          },
          image: { value: { src: "/sim-card-insertion-illustration.jpg", alt: "Easy SIM Card Setup" } },
          imagePosition: { value: "right" },
        },
      },
      {
        fields: {
          title: { value: "Rapid-Charge Battery That Lasts All Day" },
          description: {
            value:
              "Equipped with a high-capacity 8000mAh battery, you can stay connected for up to 16 hours. It features rapid charging and reverse charging support, so you can power up your other devices quickly when you need it most.",
          },
          image: { value: { src: "/8000mah-battery-illustration.jpg", alt: "Long Battery Life" } },
          imagePosition: { value: "left" },
        },
      },
      {
        fields: {
          title: { value: "Connect Up to 16 Devices" },
          description: {
            value:
              "Easily share your Wi-Fi hotspot with up to 16 devices. The F518 keeps everyone connected through a single mobile broadband connection, perfect for friends, family, or remote teamwork on the go.",
          },
          image: { value: { src: "/placeholder.svg?height=400&width=600", alt: "Multiple Device Connectivity" } },
          imagePosition: { value: "right" },
        },
      },
      {
        fields: {
          title: { value: "Hotspot and Power Bank　　　in One" },
          description: {
            value:
              "More than just a hotspot, the F518 also functions as a power bank, equipped with PD 3.0 fast charging to keep your devices powered on the move. No outlets? No problem. Its power bank capability simplifies charging wherever you go.",
          },
          image: { value: { src: "/placeholder.svg?height=400&width=600", alt: "Power Bank Feature" } },
          imagePosition: { value: "left" },
        },
      },
      {
        fields: {
          title: { value: "Advanced Security" },
          description: {
            value:
              "The F518 supports the latest Wi-Fi security protocols and cybersecurity certification to keep your data and network more secure. With advanced encryption, you'll enjoy peace of mind while experiencing fast and reliable 5G speeds.",
          },
          image: { value: { src: "/placeholder.svg?height=400&width=600", alt: "Advanced Security" } },
          imagePosition: { value: "right" },
        },
      },
      {
        fields: {
          title: { value: "Experience Dual Band Wi-Fi 6 Technology" },
          description: {
            value:
              "With dual-band Wi-Fi 6 support for both 5 GHz (up to 1201 Mbps) and 2.4 GHz (up to 574 Mbps), it allows multiple devices to connect with reduced interference and optimal speeds.",
          },
          image: { value: { src: "/placeholder.svg?height=400&width=600", alt: "Wi-Fi 6 Technology" } },
          imagePosition: { value: "left" },
        },
      },
    ],
  };

  // Use Sitecore data if available, otherwise use dummy data
  const data = fields || overviewData;
  const blocks = data.blocks || [];

  if (blocks.length === 0) {
    return <NoDataFallback componentName="Product Overview Section" />;
  }

  return (
    <section id="overview" className="bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {data.sectionTitle && (
          <Text field={data.sectionTitle} tag="h2" className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12" />
        )}

        <div className="space-y-16">
          {blocks.map((block, index) => {
            const imagePosition = block.fields.imagePosition?.value || "right";
            const isImageLeft = imagePosition === "left";

            return (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                  isImageLeft ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={isImageLeft ? "md:order-2" : ""}>
                  {block.fields.title && (
                    <Text field={block.fields.title} tag="h3" className="text-2xl md:text-3xl font-bold text-gray-900 mb-4" />
                  )}
                  {block.fields.description && (
                    <Text field={block.fields.description} tag="p" className="text-gray-700 leading-relaxed whitespace-pre-line" />
                  )}
                </div>

                <div className={isImageLeft ? "md:order-1" : ""}>
                  {block.fields.image && (
                    <Image field={block.fields.image} className="w-full h-auto rounded-lg" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
