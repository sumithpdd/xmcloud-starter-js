import type React from 'react';
import { useSitecore } from '@sitecore-content-sdk/nextjs';
import type { SavingsAccountsTableProps } from './saving-accounts-table.props';
import { SavingsAccountsTableDefault } from './SavingsAccountsTableDefault.dev';

// Default display of the component
export const Default: React.FC<SavingsAccountsTableProps> = (props) => {
  const { page } = useSitecore();
  const isPageEditing = page.mode.isEditing;

  return <SavingsAccountsTableDefault {...props} isPageEditing={isPageEditing} />;
};
