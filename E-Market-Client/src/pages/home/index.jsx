import ProductCarousel from "../../components/product/Carousel/index";


function Home() {
    
    //const [title, setTitle] = useState();

  return (
      <div>
          <h1>Home</h1>
          
          <ProductCarousel />
          {/*<ProductOverviewModal isOpen={open} closeModal={() => setOpen(!open) } />*/}

      </div>
  );
}

export default Home;