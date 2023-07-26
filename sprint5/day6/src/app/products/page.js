

async function getProducts() {
  let res = await fetch("https://fakestoreapi.com/products");
  let data = await res.json();
  return data;
}

const Products = async () => {
  let products = await getProducts();
  return (
    <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)'}}>
      {products?.map((item,i) => {
        return (
          <div key={i}>
            <img style={{width:'50%'}} src={item.image}
               alt={item.title}
            />
            <h2>{item.title}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Products;


export function  generateMetadata(){
    {title:"Proudct Page"}
}