import React from 'react';

interface ISaveAndContinueProps {
  label: string;
  onClick: () => void;
}

const SaveAndContinueButton = (props: ISaveAndContinueProps) => ( <button onClick={props.onClick}>{props.label}</button>);

export default SaveAndContinueButton;
