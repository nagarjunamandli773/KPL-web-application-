import React from 'react';
import { ProductCategoryCard } from './ProductCategoryCard';

export const ProductCategoryGrid = ({ categories, onCategoryClick, activeCategoryId }) => {
  return (
    <div
      className="portfolio-category-grid"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '18px',
        width: '100%',
        margin: '0 auto',
      }}
    >
      {categories.map((category) => {
        const catId = category.id?.toString() || '';
        const activeId = activeCategoryId?.toString() || '';
        const isMatched = activeId !== 'all' && (
          activeId === catId ||
          category.name?.toLowerCase().includes(activeId.toLowerCase()) ||
          category.title?.toLowerCase().includes(activeId.toLowerCase())
        );

        return (
          <ProductCategoryCard
            key={category.id}
            category={category}
            onClick={onCategoryClick}
            isActive={isMatched}
          />
        );
      })}
    </div>
  );
};
