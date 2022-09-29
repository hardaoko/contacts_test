import { Card } from "@mui/material";
import { FC } from "react";
import { IContactCardProps } from '../../utils/types'
import DeleteIcon from '@mui/icons-material/Delete';
import './ContactCard.css'

export const ContactCard: FC<IContactCardProps> = (props) => {
  console.log(props)
  return (
    <div className="card_container" >
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <DeleteIcon/>
    </div>
  )
}

