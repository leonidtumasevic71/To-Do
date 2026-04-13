import './AddTaskModal.css';

function AddTaskModal({isOpen, onClose, children})
{
    if (!isOpen) return null;

    return (
        <div className='modal-overlay' onClick={onClose}>
            <div className='modal-content' onClick={(e) => e.stopPropagation()}>
                <div className='bottom-modal'>
                    <button className='close-btn' onClick={onClose}>canel</button>
                    <button className='add-btn'>add</button>
                </div>
                {children}
            </div>
        </div>
        );
}

export default AddTaskModal