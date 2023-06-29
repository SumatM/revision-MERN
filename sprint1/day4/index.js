const display = document.getElementById("display");
const pagedisplay = document.getElementById("page");

let page = 1;
let limit = 5;
let totalPage = 0;
let cart = []

function fetchProducts(url) {
    console.log(page,limit)
  fetch(url)
    .then((res) => {
       totalPage =  res.headers.get('x-Total-Count')
      return res.json(); 
    })

    .then((data) => {
      console.log(data);
      append(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

fetchProducts(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`);

function append(products) {
  let items = products.map((item) => {
    return `<div class='item'>
        <div><h1>${item.title}</h1></div>
        <div><img src='https://ca.slack-edge.com/T05CPEL5MEF-U05DFAB7WGZ-3a903a34baf2-512' /></div>
        <div>
        <h4>Catagory:${item.body}
        </div>
        <div>
        <button data-product-id=${item.id} class="addbtn">Add</button>
        <button data-product-id=${item.id} class="deletebtn">Remove</button>
        </div>
    </div>`;
  });

  items = items.join(" ");

  display.innerHTML = items;
  pagination(totalPage)

  const addtoCart = document.querySelectorAll('.addbtn')
  const remove = document.querySelectorAll('.deletebtn')
  
    addtoCart.forEach((item)=>{
        item.addEventListener('click',()=>{
           let id = item.dataset.productId;
           cart.push(id);
           setLocal('cart',cart)
           alert('product added')
           console.log(cart);

        })
    })
   
    remove.forEach((removebtn)=>{
        removebtn.addEventListener('click',()=>{
            const id = removebtn.dataset.productId
            fetch(`https://jsonplaceholder.typicode.com/posts.${id}`,{
                method : 'delete'
            })
            .then((res)=> res.json())
            .then((data)=>{
                alert('prodct deleted')
                fetchProducts()
            })
            .catch((err)=>{
                console.log(err);
            })
        })
    })

}


function pagination(totalPage){
    let list = Math.ceil(totalPage/limit)
    let pageNum = new Array(list).fill(1)

    function handlePage(i){
        page=i;
        console.log(page);
        fetchProducts(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`)
    }

    let pageArray = pageNum.map((item,i)=>{
       return `
       <button data-hi-number=${i+1}>${i+1}</button>
       `
    })

   pageArray =  pageArray.join(' ');
    pagedisplay.innerHTML = pageArray

    let buttons = document.querySelectorAll('#page button');
    console.log(buttons);

    for (let btn of buttons){
        btn.addEventListener('click',(e)=>{
           let pageNum = (btn.dataset.hiNumber);

           handlePage(pageNum)
        })
    }
}






let order = document.getElementById("sorting");

order.addEventListener("change", () => {
  console.log(order.value);
  if (order.value == "") {
    fetchProducts(`https://jsonplaceholder.typicode.com/posts&_page=${page}&_limit=${limit}`);
    return;
  }
  fetchProducts(
    `https://jsonplaceholder.typicode.com/posts?_sort=title&_order=${order.value}&_page=${page}&_limit=${limit}`
  );
});


function setLocal(key,data){

 localStorage.setItem(key,JSON.stringify(data))

}