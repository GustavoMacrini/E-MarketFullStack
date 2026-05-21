import { useState } from 'react';
import ProductOverviewModal from '../OverviewModal/index';
import ProductCard from '../Card/index';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function ProductCarousel() {
    
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState(false);
    const [value, setValue] = useState(false);
    const [image, setImage] = useState(false);
    const [description, setDescription] = useState(false);

    function openOverViewModal({ title, value, image, description }) {     
        setOpen(true);
        setTitle(title);
        setValue(value);
        setImage(image);
        setDescription(description);
    }

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 7
        },
        desktop: {
            breakpoint: { max: 3000, min: 1550 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1550, min: 1000 },
            items: 3
        },
        largeMobile: {
            breakpoint: { max: 1000, min: 700 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 700, min: 0 },
            items: 1
        }
    };    


    return(<div>
         
        <Carousel responsive={responsive}
            infinite={true}            
            swipeable={false}
            draggable={false}>        

            <ProductCard openModal={(e) => { openOverViewModal(e) }} />
            <ProductCard openModal={(e) => { openOverViewModal(e) }} />
            <ProductCard openModal={(e) => { openOverViewModal(e) }} />
            <ProductCard openModal={(e) => { openOverViewModal(e) }} />
            <ProductCard openModal={(e) => { openOverViewModal(e) }} />
            <ProductCard openModal={(e) => { openOverViewModal(e) }} />
            <ProductCard openModal={(e) => { openOverViewModal(e) }} />
            <ProductCard openModal={(e) => { openOverViewModal(e) }} />
            <ProductCard openModal={(e) => { openOverViewModal(e) }} />
            <ProductCard openModal={(e) => { openOverViewModal(e) }} />
            <ProductCard openModal={(e) => { openOverViewModal(e) }} />
            <ProductCard openModal={(e) => { openOverViewModal(e) }} />

        </Carousel>
        <ProductOverviewModal isOpen={open} closeModal={() => setOpen(!open)} title={title} value={value} image={image} description={description} />
        </div>
    );
}

export default ProductCarousel;