 // active class addition in tabs
 const tabsListItems = document.querySelectorAll(".tabs-div-ul-li ");

 tabsListItems.forEach(tabsItem =>{
     tabsItem.addEventListener("click", () => {
         tabsListItems.forEach(item => item.classList.remove("active-tabs"));
         tabsItem.classList.add("active-tabs");
     })});