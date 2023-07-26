import Image from "next/image";

async function getProducts() {
  let res = await fetch("https://fakestoreapi.com/products");
  let data = await res.json();

  return data;
}

const Products = async () => {
  let products = await getProducts();
  return (
    <div>
      {products?.map((item) => {
        return (
          <div>
            <Image src={item.image}
                height={400}
                width={400}
            />
            <img src="https://ca.slack-edge.com/T05CPEL5MEF-U05DFAB7WGZ-3a903a34baf2-512"/>
            <h2>{item.title}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
