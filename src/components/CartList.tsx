import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { AppContext } from "@/ContextProvider";

export default function CartList() {
  const { cart } = React.useContext(AppContext);

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 500,
        bgcolor: "background.paper",
        margin: "auto",
        border: "1px solid black",
        borderRadius: "5px",
      }}
    >
      {cart.map((el, index) => (
        <div key={index}>
          <ListItem>
            <ListItemAvatar>
              <Avatar src={el.product.thumbnail} />
            </ListItemAvatar>
            <ListItemText
              primary={el.product.title}
              secondary={`Quantità: ${el.quantity}`}
            />
          </ListItem>
          <ListItemText
            primary={`Prezzo totale: ${(el.product.price * el.quantity).toFixed(2)} €`}
            secondary={`Prezzo unitario: ${el.product.price.toFixed(2)} €`}
            style={{
              paddingLeft: "25px",
              borderBottom: index === cart.length - 1 ? "" : "1px solid black",
              paddingBottom: index === cart.length - 1 ? "" : "15px"
            }}
          />
        </div>
      ))}
    </List>
  );
}
