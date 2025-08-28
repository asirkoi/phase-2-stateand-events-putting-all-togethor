import React from "react";

const CategoryFilter = ({
  categories,
  selectedCategory,
  onSelectedCategory,
}) => {
  return (
    <div className="categories">
      <h4>Category Filters</h4>
      {/* map through categorys and rener a category component for each  */}
      {categories.map((category) => (
        <button
          key={category}
          className={category === selectedCategory ? "selected" : ""}
          onClick={() => onSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;