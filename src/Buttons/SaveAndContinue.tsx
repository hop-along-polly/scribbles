import React from 'react';

interface ISaveAndContinueProps {
  label: string;
}

const SaveAndContinueButton = (props: ISaveAndContinueProps) => ( <button>{props.label}</button>);

export default SaveAndContinueButton;
