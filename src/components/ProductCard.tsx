import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Product } from "@/declarations";
import { Button, TextField } from "@mui/material";
import { ShoppingCartRounded } from "@mui/icons-material";
import { AppContext } from "@/ContextProvider";

export default function ProductCard({ product }: { product: Product["id"] }) {
  const [quantity, setQuantity] = React.useState<number | null>(null);

  const { products, addToCart } = React.useContext(AppContext);
  const productToShow: Product | undefined = products?.find(
    (el) => el.id === product
  );

  const onChangeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(parseInt(e.target.value));
  };

  if (!productToShow) {
    return null;
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={<Avatar src={productToShow?.thumbnail} />}
        title={productToShow?.title}
        subheader={`Disponibili: ${productToShow?.qty}`}
      />
      <CardMedia
        component="img"
        height="194"
        image={productToShow?.image}
        alt="Image of the product"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {productToShow?.description}
        </Typography>
        <br />
        <Typography gutterBottom variant="h6" component="div">
          {productToShow?.price.toFixed(2)} €
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <TextField
          id="standard-number"
          label="Quantità"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
          inputProps={{ min: 0, max: productToShow?.qty }}
          value={quantity}
          onChange={onChangeQuantity}
        />
        <Button
          variant="outlined"
          startIcon={<ShoppingCartRounded />}
          disabled={!quantity}
          onClick={() => addToCart(productToShow)}
        >
          Add item
        </Button>
      </CardActions>
    </Card>
  );
}
