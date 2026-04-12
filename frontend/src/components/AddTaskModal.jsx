import './AddTaskModal.css';

function AddTaskModal({isOpen, onClose, title, children})
{
    if (!isOpen) return null;

    return (
            <div className="modal-overlay" onClick={onClose}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <div className="modal-header">
                        <h2>{title}</h2>
                        <button className="modal-close" onClick={onClose}>
                            ✕
                        </button>
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                    <div className="modal-footer">
                        <button onClick={onClose}>Отмена</button>
                        <button onClick={onClose}>Подтвердить</button>
                    </div>
                </div>
            </div>
        )
}

export default AddTaskModal