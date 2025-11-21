export type ContactField =
  | {
      id: string;
      label: string;
      name: string;
      placeholder: string;
      required?: boolean;
      type?: string;
      kind?: 'input';
    }
  | {
      id: string;
      label: string;
      name: string;
      placeholder: string;
      required?: boolean;
      rows?: number;
      kind: 'textarea';
    };

export const contactFields: ContactField[] = [
  {
    id: 'name',
    name: 'name',
    label: 'Name',
    placeholder: 'Your name',
    required: true,
    type: 'text'
  },
  {
    id: 'email',
    name: 'email',
    label: 'Email',
    placeholder: 'you@company.com',
    required: true,
    type: 'email'
  },
  {
    id: 'linkedin',
    name: 'linkedin',
    label: 'LinkedIn profile',
    placeholder: 'https://linkedin.com/in/you',
    type: 'url'
  },
  {
    id: 'needs',
    name: 'needs',
    label: 'What do you need?',
    placeholder: 'e.g., 6 LinkedIn posts a month focused on compliance buyers',
    rows: 4,
    kind: 'textarea'
  }
];
