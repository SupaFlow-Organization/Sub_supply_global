import { ContactInfo } from '../lib/types';

export const contactContent: ContactInfo = {
  title: 'Get in Touch',
  subtitle: 'Ready to streamline your supply chain? Let\'s discuss how we can help.',
  phone: '+971-5800755',
  email: 'Reach@subsupplyglobal.com',
  serviceOptions: [
    { value: 'sourcing-procurement', label: 'Sourcing and Procurement' },
    { value: 'product-development', label: 'Product Development and Supplier Alignment' },
    { value: 'supply-chain-execution', label: 'Supply Chain and Container Execution' },
    { value: 'lab-testing-compliance', label: 'Lab Testing, Compliance, and Assessments' },
    { value: 'on-ground-coordination', label: 'On-Ground Coordination' },
    { value: 'other', label: 'Other' },
  ],
};
