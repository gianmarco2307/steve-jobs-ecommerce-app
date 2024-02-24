import { AppContext } from "@/ContextProvider";
import ProductCard from "@/components/ProductCard";
import { styled } from "@mui/material";
import { useContext } from "react";

const CardDiv = styled("div")({
  display: "flex",
  flexFlow: "row wrap",
  justifyContent: "space-around",
  "& > *": {
    marginBottom: "20px",
  },
});

export default function Home() {
  const { products } = useContext(AppContext);

  return (<>
  <h1>Home</h1>
  <CardDiv>
    {products?.map((product) => (
      <ProductCard key={product.id} product={product.id}/>
    ))}
    </CardDiv>
  </>);
}
