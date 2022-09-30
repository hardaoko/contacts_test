import './ModalOverlay.css';
import { FC } from 'react';
import { IModalOverlayProps } from '../../utils/types';

const ModalOverlay:FC<IModalOverlayProps> = ({onClose}) =>
  <div data-at="modal-overlay" onClick={onClose} className='overlay'></div>;


export default ModalOverlay