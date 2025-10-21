import type React from 'react';
import { type Field } from '@sitecore-content-sdk/nextjs';
import { NoDataFallback } from '@/utils/NoDataFallback';
import { ComponentProps } from '@/lib/component-props';

interface SpecRow {
  fields: {
    label: Field<string>;
    value: Field<string>;
  };
}

interface SpecCategory {
  fields: {
    categoryTitle: Field<string>;
    rows: SpecRow[];
  };
}

interface SpecificationsSectionProps {
  fields?: {
    sectionTitle: Field<string>;
    categories: SpecCategory[];
  };
}

type SpecificationsSectionComponentProps = ComponentProps & SpecificationsSectionProps;

export const Default: React.FC<SpecificationsSectionComponentProps> = (props) => {
  const { fields } = props;

  // Dummy data fallback
  const specificationsData = {
    sectionTitle: { value: "Specification" },
    categories: [
      {
        fields: {
          categoryTitle: { value: "Hardware" },
          rows: [
            { fields: { label: { value: "Chipset" }, value: { value: "Qualcomm SDX62" } } },
            { fields: { label: { value: "Battery" }, value: { value: "8000mAh" } } },
            { fields: { label: { value: "Battery Life" }, value: { value: "Up to 16 hours" } } },
            { fields: { label: { value: "Charging Port" }, value: { value: "USB Type-C with PD 3.0" } } },
            { fields: { label: { value: "SIM Card Slot" }, value: { value: "Nano SIM" } } },
            { fields: { label: { value: "Display" }, value: { value: "LED indicators" } } },
          ],
        },
      },
      {
        fields: {
          categoryTitle: { value: "Wireless" },
          rows: [
            { fields: { label: { value: "Wi-Fi Standard" }, value: { value: "802.11ax (Wi-Fi 6)" } } },
            { fields: { label: { value: "Frequency Bands" }, value: { value: "2.4 GHz and 5 GHz" } } },
            {
              fields: {
                label: { value: "Wi-Fi Speed" },
                value: { value: "5 GHz: up to 1201 Mbps, 2.4 GHz: up to 574 Mbps" },
              },
            },
            { fields: { label: { value: "Max Connected Devices" }, value: { value: "16" } } },
            { fields: { label: { value: "Security" }, value: { value: "WPA3, WPA2" } } },
          ],
        },
      },
      {
        fields: {
          categoryTitle: { value: "Cellular" },
          rows: [
            {
              fields: { label: { value: "5G Bands" }, value: { value: "n1/n3/n5/n7/n8/n20/n28/n38/n40/n41/n77/n78" } },
            },
            {
              fields: { label: { value: "4G LTE Bands" }, value: { value: "B1/B3/B5/B7/B8/B20/B28/B32/B38/B40/B41" } },
            },
            { fields: { label: { value: "Max 5G Speed" }, value: { value: "Up to 1.6 Gbps download" } } },
            { fields: { label: { value: "Max 4G Speed" }, value: { value: "Up to 300 Mbps download" } } },
          ],
        },
      },
      {
        fields: {
          categoryTitle: { value: "Physical" },
          rows: [
            { fields: { label: { value: "Dimensions" }, value: { value: "108 x 68 x 18 mm" } } },
            { fields: { label: { value: "Weight" }, value: { value: "220g" } } },
            { fields: { label: { value: "Operating Temperature" }, value: { value: "0°C to 35°C" } } },
          ],
        },
      },
    ],
  };

  // Use Sitecore data if available, otherwise use dummy data
  const data = fields || specificationsData;
  const categories = data.categories || [];
  
  // Helper function to get field value (handles both Sitecore and dummy data)
  const getFieldValue = (field: any) => {
    if (!field) return '';
    return field.value || field;
  };

  if (categories.length === 0) {
    return <NoDataFallback componentName="Specifications Section" />;
  }

  return (
    <section id="specification" className="bg-gray-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          {getFieldValue(data.sectionTitle) || "Specification"}
        </h2>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {categories.map((category, catIndex) => {
            const rows = category.fields.rows || [];

            return (
              <div key={catIndex} className={catIndex > 0 ? "border-t border-gray-200" : ""}>
                <div className="bg-gray-100 px-6 py-4">
                  <h3 className="text-lg font-bold text-gray-900">
                    {getFieldValue(category.fields.categoryTitle)}
                  </h3>
                </div>

                <div className="divide-y divide-gray-200">
                  {rows.map((row, rowIndex) => (
                    <div
                      key={rowIndex}
                      className="grid md:grid-cols-3 gap-4 px-6 py-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="font-medium text-gray-900">
                        {getFieldValue(row.fields.label)}
                      </div>
                      <div className="md:col-span-2 text-gray-700">
                        {getFieldValue(row.fields.value)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
