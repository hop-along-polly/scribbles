import React from 'react';
import ActionButton from '../../src/Buttons/ActionButton';

export default {
  title: "Buttons/ActionButton",
  component: ActionButton
}

export const Primary = () => (
  <ActionButton
    onClick={() => { alert('Action Button Clicked') }}
    label={"Save & Continue"}
  />
);
