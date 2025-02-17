import { ReactNode } from 'react';
import './LayoutModal.scss'

interface LayoutModal{
    title: string;
    children: ReactNode;
    onClose: () => void;
}
export const LayoutModal = ({children, onClose, title}: LayoutModal) => {
  return (
    <div className='modal-container'>
        <div className="modal-content">
            <div id="modal-header">
                <h2>{title}</h2>
                <button onClick={onClose}>X</button>
            </div>
            <div id="modal-props-content">
                {children}
            </div>
        </div>
    </div>
  )
}
