export interface NavItem {
  label: string;
  icon: string;
  showOnMobile: boolean;
  showOnTablet: boolean;
  showOnDesktop: boolean;
  disabled?: boolean;
  route?: string;
  children?: NavItem[];
}
