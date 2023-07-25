import Image from "next/image";

async function getDummydata() {
  let res = await fetch("https://dummyapi.online/api/pokemon");
  let data = await res.json();
  return data;
}

const page = async () => {
  const movies = await getDummydata();
  //console.log(movies, "----------->");
  return (
    <div>
      <h1>Pokemon</h1>
      {movies.map((item) => {
        return (
          <div>
            <h2>{item.pokemon}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default page;
