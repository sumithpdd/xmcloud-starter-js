import type { Field, LinkField } from '@sitecore-content-sdk/nextjs';
import type { ComponentProps } from '@/lib/component-props';

/**
 * Model used for Sitecore Component integration
 */
export type SavingsAccountsTableProps = ComponentProps &
  SavingsAccountsTableFields & {
    isPageEditing?: boolean;
  };

export interface SavingsAccountsTableFields {
  fields: {
    data: {
      datasource?: {
        title: { jsonValue: Field<string> };
        description?: { jsonValue: Field<string> };
        children: {
          results: SavingsAccountItemProps[];
        };
      };
    };
  };
}

export type SavingsAccountItemProps = {
  accountName: {
    jsonValue: Field<string>;
  };
  aerRate: {
    jsonValue: Field<string>;
  };
  annualRate: {
    jsonValue: Field<string>;
  };
  monthlyRate: {
    jsonValue: Field<string>;
  };
  applicationMethods: {
    jsonValue: Field<string>; // e.g., "Online, Post" or "Online"
  };
  viewLink: {
    jsonValue: LinkField;
  };
};
