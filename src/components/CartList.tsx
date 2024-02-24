import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { AppContext } from "@/ContextProvider";
import { Button } from "@mui/material";
import { Delete } from "@mui/icons-material";

export default function CartList() {
  const { cart, removeFromCart } = React.useContext(AppContext);

  return (
    <>
      {cart.length === 0 ? (
        <h2>Il carrello è vuoto</h2>
      ) : (
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
              <ListItem
                style={{
                  borderBottom:
                    index === cart.length - 1 ? "" : "1px solid black",
                  paddingBottom: index === cart.length - 1 ? "" : "15px",
                }}
              >
                <ListItemText
                  primary={`Prezzo totale: ${(el.product.price * el.quantity).toFixed(2)} €`}
                  secondary={`Prezzo unitario: ${el.product.price.toFixed(2)} €`}
                  style={{
                    paddingLeft: "25px",
                  }}
                />
                <Button
                  variant="outlined"
                  startIcon={<Delete />}
                  onClick={() => removeFromCart(el.product)}
                  style={{ marginLeft: "25px" }}
                >
                  Rimuovi uno
                </Button>
              </ListItem>
            </div>
          ))}
        </List>
      )}
    </>
  );
}
