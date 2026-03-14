import React from 'react'
import AddToCart from './AddToCart'
import styles from './ProductCard.module.css'

const ProductCard = () => {
  return (
    <div className={styles.cards}>
      <AddToCart/>
    </div>
  )
}

export default ProductCard
