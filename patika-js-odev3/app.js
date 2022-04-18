const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 14.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
  {
    id: 10,
    title: "lahmacun",
    category: "Turkish",
    price: 1.99,
    img:
      "https://iaftm.tmgrup.com.tr/be17ef/829/469/0/0/1272/720?u=https://iftm.tmgrup.com.tr/2020/09/29/yemek-tarifleri-lahmacun-nasil-yapilir-lahmacunun-yapilisi-ve-malzemeleri-neler-iste-detaylar-1601356400879.jpg",
    desc: `Lahmacun is often wrapped around vegetables, including pickles, tomatoes, peppers, onions, lettuce, parsley, and roasted eggplant.`,
  }
];

const sectionCenter = document.querySelector(".section-center")
const btnContainer = document.querySelector(".btn-container")




window.addEventListener("DOMContentLoaded", function(){
  // console.log("active")
  displayMenuItems(menu)
  displayMenuButtons()
  
})
function displayMenuItems(menuItems){
  let displayMenu = menuItems.map(function(item){
    return `
    <div class="menu-items col-lg-6 col-sm-12">
    <img src=${item.img} alt=${item.title} class="photo">
    <div class="menu-info">
    <div class="menu-title">
    <h4>${item.title}</h4>
    <h4 class="price">$${item.price}</h4>
    </div>
    <div class="menu-text">
    ${item.desc}
    </div>
    </div>
    </div>`
  })
  .join("")  
  sectionCenter.innerHTML = displayMenu;
}



function displayMenuButtons(){
  const categories = menu.reduce(function(values, item){
    if(!values.includes(item.category)){
      values.push(item.category);
    }
    return values;
  },["ALL"]
  );
  const categoryBtns = categories.map(function(category){
    return `
    <button class="btn btn-outline-dark btn-item" data-id=${category}>${category}</button>
    `
  })
  .join("")
  btnContainer.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll(".btn")
  filterBtns.forEach(function(btn){
  
    btn.addEventListener("click", function(e){
      // console.log(e.currentTarget.dataset.id)
      const category = e.currentTarget.dataset.id 
      const menuCategory = menu.filter(function(menuItem){
        // console.log(menuItem.category)
        if(menuItem.category === category){
          return menuItem
        }
      });
      if(category === "ALL"){
        displayMenuItems(menu)
      }
      else{
        displayMenuItems(menuCategory)
      }    
    });
  });
}