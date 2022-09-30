import { FC } from "react";
import { IContactCardProps } from '../../utils/types'
import DeleteIcon from '@mui/icons-material/Delete';
import './ContactCard.css'

export const ContactCard: FC<IContactCardProps> = (props) => {

  return (
    <div className="card_container" >
      <div className="info_wrapper">
        <h3 className="text">{props.name}</h3>
        <p className="text">{props.description}</p>
      </div>
      <div className="icon_wrapper">
        <DeleteIcon/>
      </div>

    </div>
  )
}

