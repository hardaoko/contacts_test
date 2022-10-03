import { FC, useState } from "react";
import { IContactCardProps } from "../../utils/types";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import "./ContactCard.css";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';

export const ContactCard: FC<IContactCardProps> = ({
  contact,
  editModal,
  deleteContact,
}) => {
  const [openConfirm, setOpenConfirm] = useState(false);

  const handleOpenConfirm = () => {
    setOpenConfirm(true);
  };

  const handleCloseConfirm = () => {
    setOpenConfirm(false);
  };

  return (
    <Card
      sx={{ width: '210px',
      height: '120px',
      padding: '10px 10px 20px 30px'
      }}
      >
      <div className="info_wrapper">
        <h3 className="text">{contact.name}</h3>
        <p className="text">{contact.description}</p>
      </div>
      <CardActions sx={{justifyContent: 'flex-end'}}>
        <Button size="small" onClick={editModal} sx={{minWidth:'0'}}>
          <EditIcon/>
        </Button>
        <Button size="small" onClick={handleOpenConfirm} sx={{minWidth:'0'}}>
          <DeleteIcon/>
        </Button>
      </CardActions>

      <Dialog
        open={openConfirm}
        onClose={handleCloseConfirm}
        aria-labelledby="alert-dialog-title"
      >
        <DialogTitle id="alert-dialog-title" sx={{ margin: "10px 30px 0px" }}>
          {"Delete this contact?"}
        </DialogTitle>
        <DialogActions sx={{ display: "flex", flexDirection: "flex-start" }}>
          <Button onClick={handleCloseConfirm}>No</Button>
          <Button
            onClick={() => {
              deleteContact();
              handleCloseConfirm();
            }}
            autoFocus
            sx={{ margin: "0px 30px" }}
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};
