import React from 'react';
import { Text } from '@sitecore-content-sdk/nextjs';
import { cn } from '@/lib/utils';
import {
  SavingsAccountsTableProps,
  SavingsAccountItemProps,
  SavingAccountsTableParams,
} from './saving-accounts-table.props';
import { SavingsAccountRow } from './SavingsAccountRow.dev';
import { NoDataFallback } from '@/utils/NoDataFallback';

export const SavingsAccountsTableDefault: React.FC<SavingsAccountsTableProps> = (props) => {
  const { fields, params } = props;

  const { title, description, children } = fields?.data?.datasource || {};
  const accountItems = children?.results ?? [];

  // Check if useDummyValue is set (defaults to true if not set or explicitly true)
  // This is a checkbox field from Sitecore, so it's a boolean
  const useDummyValue = (params as SavingAccountsTableParams)?.useDummyValue !== false;

  // Dummy data for demonstration
  const dummyData: SavingsAccountItemProps[] = [
    {
      accountName: {
        jsonValue: { value: '1 Year Fixed Rate Cash ISA' },
      },
      aerRate: {
        jsonValue: { value: '4.05%' },
      },
      annualRate: {
        jsonValue: { value: '4.05%' },
      },
      monthlyRate: {
        jsonValue: { value: '3.98%' },
      },
      applicationMethods: {
        jsonValue: { value: 'Online, Post' },
      },
      viewLink: {
        jsonValue: {
          value: {
            href: '/savings/1-year-fixed-isa',
            text: 'View ISA',
          },
        },
      },
    },
    {
      accountName: {
        jsonValue: { value: '15 Month Fixed Rate Cash ISA' },
      },
      aerRate: {
        jsonValue: { value: '3.95%' },
      },
      annualRate: {
        jsonValue: { value: '3.94%' },
      },
      monthlyRate: {
        jsonValue: { value: '3.88%' },
      },
      applicationMethods: {
        jsonValue: { value: 'Online, Post' },
      },
      viewLink: {
        jsonValue: {
          value: {
            href: '/savings/15-month-fixed-isa',
            text: 'View ISA',
          },
        },
      },
    },
    {
      accountName: {
        jsonValue: { value: '2 Year Fixed Rate Cash ISA' },
      },
      aerRate: {
        jsonValue: { value: '3.90%' },
      },
      annualRate: {
        jsonValue: { value: '3.90%' },
      },
      monthlyRate: {
        jsonValue: { value: '3.83%' },
      },
      applicationMethods: {
        jsonValue: { value: 'Online, Post' },
      },
      viewLink: {
        jsonValue: {
          value: {
            href: '/savings/2-year-fixed-isa',
            text: 'View ISA',
          },
        },
      },
    },
    {
      accountName: {
        jsonValue: { value: '3 Year Fixed Rate Cash ISA' },
      },
      aerRate: {
        jsonValue: { value: '3.90%' },
      },
      annualRate: {
        jsonValue: { value: '3.90%' },
      },
      monthlyRate: {
        jsonValue: { value: '3.83%' },
      },
      applicationMethods: {
        jsonValue: { value: 'Online, Post' },
      },
      viewLink: {
        jsonValue: {
          value: {
            href: '/savings/3-year-fixed-isa',
            text: 'View ISA',
          },
        },
      },
    },
    {
      accountName: {
        jsonValue: { value: '5 Year Fixed Rate Cash ISA' },
      },
      aerRate: {
        jsonValue: { value: '3.95%' },
      },
      annualRate: {
        jsonValue: { value: '3.95%' },
      },
      monthlyRate: {
        jsonValue: { value: '3.88%' },
      },
      applicationMethods: {
        jsonValue: { value: 'Online, Post' },
      },
      viewLink: {
        jsonValue: {
          value: {
            href: '/savings/5-year-fixed-isa',
            text: 'View ISA',
          },
        },
      },
    },
  ];

  // Use dummy data if useDummyValue is true, otherwise use Sitecore data
  const displayItems = useDummyValue ? dummyData : accountItems;

  if (fields || displayItems.length > 0) {
    return (
      <div
        data-component="SavingsAccountsTable"
        data-class-change
        className={cn('mx-auto my-8 max-w-screen-xl', props.params?.styles)}
      >
        {(title?.jsonValue || description?.jsonValue) && (
          <div className="mb-8">
            {title?.jsonValue && (
              <Text
                tag="h2"
                field={title.jsonValue}
                className="text-3xl font-bold text-gray-900 mb-4"
              />
            )}
            {description?.jsonValue && (
              <Text tag="p" field={description.jsonValue} className="text-lg text-gray-700" />
            )}
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="py-4 px-6 text-left font-semibold">Account Name</th>
                <th className="py-4 px-6 text-left font-semibold">AER/tax-free p.a. Fixed*</th>
                <th className="py-4 px-6 text-left font-semibold">Gross/tax-free p.a.**</th>
                <th className="py-4 px-6 text-left font-semibold">How to Apply</th>
                <th className="py-4 px-6 text-left font-semibold"></th>
              </tr>
            </thead>
            <tbody>
              {displayItems.map((item: SavingsAccountItemProps, index: number) => (
                <SavingsAccountRow key={index} item={item} />
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 text-sm text-gray-600">
          <p>* Fixed rate applies</p>
          <p>** Gross rates shown</p>
        </div>
      </div>
    );
  }

  return <NoDataFallback componentName="Savings Accounts Table" />;
};
