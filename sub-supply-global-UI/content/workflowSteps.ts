import { WorkflowStep } from '../lib/types';

export const workflowStepsContent: WorkflowStep[] = [
  {
    _id: '1',
    title: 'Sourcing and Procurement',
    description: 'We source products through our own verified network of franchise owners and approved suppliers across India. Supplier identification based on your product, volume, and market needs. Negotiation and rate alignment handled by SubSupply. Options to buy full or partial containers. No dependency on unknown exporters or commission agents.',
    icon: 'package',
    order: 1,
  },
  {
    _id: '2',
    title: 'Product development',
    description: 'If you need custom grades, packaging, specifications, or private labeling, we manage the entire development process. Product standardization for your target market. Packaging, branding, and labeling coordination. Sampling, revisions, and final approvals managed centrally. Supplier alignment to ensure repeatable quality.',
    icon: 'boxes',
    order: 2,
  },
  {
    _id: '3',
    title: 'Supply chain management',
    description: 'We operate as your supply chain partner. Container planning and allocation. Live container status and updates. Coordination with logistics, CHA, and freight forwarders. Optimized timelines to avoid delays and surprises. You always know what\'s moving, what\'s arriving, and what\'s next.',
    icon: 'anchor',
    order: 3,
  },
  {
    _id: '4',
    title: 'Lab testing and compliance check',
    description: 'We ensure every shipment meets required standards before it reaches you. Lab testing and quality checks. Compliance with destination market requirements. Third-party assessments when required. Claim handling managed within our system. This reduces risk, rejections, and disputes.',
    icon: 'flask',
    order: 4,
  },
  {
    _id: '5',
    title: 'Work as a extended indian partner',
    description: 'SubSupply Global works as your extended arm on the ground in India and UAE. Supplier coordination without your daily involvement. On-ground issue resolution. Market intelligence and sourcing insights. Long-term supply planning instead of one-off trades. You gain reach, control, and local execution — without building your own team.',
    icon: 'users',
    order: 5,
  },
];
