import React from 'react'
import { withKnobs, text } from '@storybook/addon-knobs';
import FormInput from '../components/input';


export default {
    title: 'FormInput',
    decorators: [withKnobs],
  };

  export const withPlaceholder: React.FC = () => (
      <div style={{ width: '100px' }}>
        <FormInput
          placeholder={text('Search', 'Search')}
        />
      </div>
  );
  
  export const withLabel: React.FC = () => (
    <div>
      <div style={{ width: '100px' }}>
        <FormInput label="Username" />
      </div>
    </div>
  );
  
  export const withValue: React.FC = () => (
    <div>
      <div style={{ width: '100px' }}>
        <FormInput value="Jane Doe" />
      </div>
    </div>
  );
  
  export const withError: React.FC = () => (
      <div style={{ width: '100px' }}>
        <FormInput
          error="invalid input!"
        />
      </div>
  );
  
  export const withOnChange: React.FC = () => (
      <div style={{ width: '100px' }}>
        <FormInput
          onChange={(e) => {alert(`changed value: ${e.target.value}`)}}
        />
      </div>
  );
  