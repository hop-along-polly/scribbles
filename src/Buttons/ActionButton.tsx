import React from 'react';

interface IActionButtonProps {
  label: string;
  onClick: () => void;
}

const ActionButton = (props: IActionButtonProps) => (
  <button onClick={props.onClick}>{props.label}</button>
);

export default ActionButton;
