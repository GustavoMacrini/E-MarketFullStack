import { useState } from 'react';
import ProductCard from "../../components/product/Card/index";
import ProductOverviewModal from "../../components/product/OverviewModal/index";


function Home() {
  const [open, setOpen] = useState(false);

  return (
      <div>
          <h1>Home</h1>
          <ProductCard openModal={() => {setOpen(!open) } } />
          <ProductOverviewModal isOpen={open} closeModal={() => setOpen(!open)} />

      </div>
  );
}

export default Home;