const loadCategories = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url);
    const data = await res.json();
    displayCategories(data.data.news_category);
  };
  
  const displayCategories = (categories) => {
    const categoriesContainer = document.getElementById("categories-container");
    categoriesContainer.style.display = 'grid';
    categoriesContainer.style.gridTemplateColumns = 'repeat(auto-fit, minmax(20%, 2fr))'; // Adjust the column width as desired
    categoriesContainer.style.gridGap = '10px'; // Add spacing between categories
  
    categories.forEach((category) => {
      const categoriesDiv = document.createElement('div');
      categoriesDiv.innerHTML = `<p>${category.category_name}</p>`;
      categoriesContainer.appendChild(categoriesDiv);
    });
  };
  
  loadCategories();
