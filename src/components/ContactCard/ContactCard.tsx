import { FC, useState } from "react";
import { IContactCardProps,  } from '../../utils/types'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import './ContactCard.css'
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

export const ContactCard: FC<IContactCardProps> = ({contact, editModal, deleteContact}) => {
  const [openConfirm, setOpenConfirm] = useState(false);

  const handleOpenConfirm = () => {
    setOpenConfirm(true);
  };

  const handleCloseConfirm = () => {
    setOpenConfirm(false);
  };

  return (
    <div className="card_container" >
      <div className="info_wrapper">
        <h3 className="text">{contact.name}</h3>
        <p className="text">{contact.description}</p>
      </div>
      <div className="edit_wrapper" onClick={editModal}>
        <EditIcon color="disabled"/>
      </div>
      <div className="delete_wrapper" onClick={handleOpenConfirm}>
        <DeleteIcon color="disabled"/>
      </div>

      <Dialog
        open={openConfirm}
        onClose={handleCloseConfirm}
        aria-labelledby="alert-dialog-title"

      >
        <DialogTitle id="alert-dialog-title">
          {"Delete contact?"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleCloseConfirm}>No</Button>
          <Button onClick={()=>{deleteContact(); handleCloseConfirm()}} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

