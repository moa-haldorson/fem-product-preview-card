import styles from "./App.module.scss";
import ProductCard from "./components/ProductCard";
import productData from "./data/productData.json";

const App = () => {
  return (
    <div className={styles.cardContainer}>
      <ProductCard {...productData} />
    </div>
  );
};

export default App;
