import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
<main>
  <div>Hello World</div>
  <Link href="/users">user</Link>
  <ProductCard/>
</main>
  );
}
