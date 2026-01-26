
export type NavigationId = 'home' | 'about' | 'services' | 'network' | 'contact';

export interface NavItem {
  id: NavigationId;
  label: string;
}

export interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface HubItem {
  region: string;
  city: string;
  color: string;
}
