const loadCategories = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url);
    const data = await res.json();
    displayCategories(data.data.news_category);
  };
  
  const displayCategories = (categories) => {
    const categoriesContainer = document.getElementById("categories-container");
  
    categoriesContainer.style.display = 'flex';
  
    categories.forEach((category) => {
        // console.log(category);
      const categoriesDiv = document.createElement('div');
      categoriesDiv.style.flexGrow = 'auto'; // Adjust the flex properties as desired
      categoriesDiv.style.flexShrink = '0';
      categoriesDiv.style.marginBottom = '20px'; // Add spacing between categories
      categoriesDiv.style.flexWrap = 'wrap';
      categoriesDiv.innerHTML = `<button onclick="loadCategoryItems(${category.category_id})" class="border-0 bg-white">${category.category_name}</button>`;
      categoriesContainer.appendChild(categoriesDiv);
    });
  };
  const loadCategoryItems = async (category_id) => {
    // console.log(category_id);
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    const res = await fetch(url);
    const data = await res.json();
    displayCategoryItems(data);
  };
  const displayCategoryItems = (items) => {
    console.log(items);
  }
  loadCategories();
  
  
