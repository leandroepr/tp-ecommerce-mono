import React from 'react';
import { ClipLoader } from 'react-spinners';

/**
 * @color can be hexcolor or rgba
 * @size spinner size (px)
 * @speedMultiplier animation speed (1 is default)
 */

export interface SpinnerProps {
  color: string;
  size: number;
  speedMultiplier: number;
}
const Spinner: React.FC<SpinnerProps> = ({ color, size, speedMultiplier }) => {
  return (
    <ClipLoader color={color} size={size} speedMultiplier={speedMultiplier} />
  );
};

export default Spinner;
