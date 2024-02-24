import { styled } from "@mui/material";
import Link from "next/link";

const MyNav = styled("nav")({
    display: "flex",
    justifyContent: "space-evenly",
    backgroundColor: "lightgray",
    height: "60px",
    lineHeight: "60px",
    fontSize: "20px",
});

export default function NavBar() {
  return (
    <MyNav>
      <Link href="/" style={{textDecoration: "none", color: "currentcolor"}}>Home</Link>
      <Link href="/cart" style={{textDecoration: "none", color: "currentcolor"}}>Cart</Link>
    </MyNav>
  );
}
