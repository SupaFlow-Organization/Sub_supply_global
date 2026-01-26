import { Service } from '../lib/types';

export const servicesContent: Service[] = [
  {
    _id: '1',
    title: 'Sourcing and Procurement',
    description: 'We identify and connect you with verified suppliers who meet your quality, compliance, and pricing requirements. No more hunting for exporters or managing multiple relationships.',
    icon: 'search',
    order: 1,
  },
  {
    _id: '2',
    title: 'Product Development and Supplier Alignment',
    description: 'We work directly with suppliers to align production with your specifications, coordinate product development, and ensure everything meets your standards before shipment.',
    icon: 'package',
    order: 2,
  },
  {
    _id: '3',
    title: 'Supply Chain and Container Execution',
    description: 'From booking containers to managing logistics, CHA, and freight partners — we handle the entire supply chain execution so you don\'t have to coordinate multiple vendors.',
    icon: 'box',
    order: 3,
  },
  {
    _id: '4',
    title: 'Lab Testing, Compliance, and Assessments',
    description: 'We oversee quality checks, lab testing, compliance verification, and assessments to ensure your products meet all regulatory requirements before they reach you.',
    icon: 'clipboard-check',
    order: 4,
  },
  {
    _id: '5',
    title: 'On-Ground Coordination',
    description: 'Our team operates directly in India and Dubai, providing on-ground coordination, real-time updates, and issue resolution — acting as your extended supply team.',
    icon: 'map-pin',
    order: 5,
  },
];
