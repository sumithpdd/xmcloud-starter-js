import React from 'react';
import { Text, Link } from '@sitecore-content-sdk/nextjs';
import type { SavingsAccountItemProps } from './saving-accounts-table.props';
import { Button } from '@/components/ui/button';

export interface SavingsAccountRowProps {
  item: SavingsAccountItemProps;
}

export const SavingsAccountRow: React.FC<SavingsAccountRowProps> = ({ item }) => {
  const { accountName, aerRate, annualRate, monthlyRate, applicationMethods, viewLink } = item;

  return (
    <tr className="border-b border-gray-200 bg-white">
      <td className="py-4 px-6 text-gray-900">
        {accountName?.jsonValue && <Text field={accountName.jsonValue} />}
      </td>
      <td className="py-4 px-6 text-gray-900 font-medium">
        {aerRate?.jsonValue && <Text field={aerRate.jsonValue} />}
      </td>
      <td className="py-4 px-6 text-gray-900">
        <div className="space-y-1">
          {annualRate?.jsonValue && (
            <div>
              Annually: <strong>{annualRate.jsonValue.value}</strong>
            </div>
          )}
          {monthlyRate?.jsonValue && (
            <div>
              Monthly: <strong>{monthlyRate.jsonValue.value}</strong>
            </div>
          )}
        </div>
      </td>
      <td className="py-4 px-6 text-gray-900">
        {applicationMethods?.jsonValue && (
          <div className="space-y-1">
            {applicationMethods.jsonValue.value.split(',').map((method, idx) => (
              <div key={idx}>{method.trim()}</div>
            ))}
          </div>
        )}
      </td>
      <td className="py-4 px-6">
        {viewLink?.jsonValue && (
          <Button
            asChild
            className="bg-green-500 hover:bg-green-600 text-white rounded-lg px-6 py-2 font-medium"
          >
            <Link field={viewLink.jsonValue}>View Account</Link>
          </Button>
        )}
      </td>
    </tr>
  );
};
