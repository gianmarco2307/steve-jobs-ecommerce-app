import { AppContext } from "@/ContextProvider";
import ProductCard from "@/components/ProductCard";
import RecipeReviewCard from "@/components/ProductCard";
import { useContext } from "react";

export default function Home() {
  const { products } = useContext(AppContext);

  return (<>
  <h1>Home</h1>
  <div>
    {products?.map((product) => (
      <ProductCard key={product.id} product={product}/>
    ))}
    </div>
  </>);
}
