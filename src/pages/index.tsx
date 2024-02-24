import { AppContext } from "@/ContextProvider";
import Loading from "@/components/Loading";
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
  const { products, loading } = useContext(AppContext);

  if (loading)
    return (
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}
      >
        <Loading />
      </div>
    );

  return (
    <>
      <h1>Home</h1>
      <CardDiv>
        {products?.map((product) => (
          <ProductCard key={product.id} product={product.id} />
        ))}
      </CardDiv>
    </>
  );
}
