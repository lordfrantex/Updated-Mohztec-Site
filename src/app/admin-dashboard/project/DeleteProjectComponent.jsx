"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

const DeleteProjectComponent = ({ id }) => {
    const router = useRouter()
    //Modal State
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDeleteClick = () => {
        // Set isModalOpen to true when the delete button is clicked
        setIsModalOpen(true);
    };

    const handleDeleteConfirm = async (id) => {
        // Perform the delete operation here

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/project/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            toast.success("Project Deleted Successfully.")
        } catch (error) {
            console.log(error);
        }

        router.refresh()
        // Close the modal after deletion
        setIsModalOpen(false);
    };

    const handleModalClose = () => {
        // Close the modal when the cancel button or overlay is clicked
        setIsModalOpen(false);
    };

    return (
        <>    <button className="btn  btn-primary btn-sm me-2" onClick={handleDeleteClick}>Delete</button>
            <DeleteConfirmationModal
                isOpen={isModalOpen}
                onClose={handleModalClose}
                onDelete={handleDeleteConfirm}
                id={id}
            />
        </>

    )
}

export default DeleteProjectComponent


const DeleteConfirmationModal = ({ isOpen, onClose, onDelete, id }) => {

    return (
        <>
            {isOpen && (
                <div className="modal-overlay">

                    <p>Are you sure you want to delete this Project?</p>
                    <div className="modal-buttons">
                        <div className="modals">
                            <button onClick={onClose}>Cancel</button>
                            <button className="delete" onClick={() => onDelete(id)}>Delete</button>
                        </div>
                    </div>
                </div >
            )}
        </>
    );
}


