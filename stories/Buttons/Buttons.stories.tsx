import React from 'react';
import SaveAndContinueButton from '../../src/Buttons/SaveAndContinue';

export default {
  title: "Buttons/SaveAndContinue",
  component: SaveAndContinueButton
}

export const Primary = () => (<SaveAndContinueButton onClick={() => { console.log('Clicked') }} label={"Save & Continue"} />);
