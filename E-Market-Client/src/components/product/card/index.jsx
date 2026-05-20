import style from "./card.module.css";
import { FaHeart } from "react-icons/fa";
import { useState } from 'react';
import ProductOverviewModal from "../OverviewModal/index";

function ProductCard() {
    const [open, setOpen] = useState(false);
    let title = "Feijão Carioca Barbosa Tipo 1 | 1kg";
    let value = "7,49";
    let image = "https://d1pfez3jlrpp4u.cloudfront.net/imagem-ecommerce-barbosa/tiny-7bf39bb189f6abccfec278fd5053ac88-7896401100301.jpg";
    let description = "teste de descrição feijão teste de descrição feijão teste de descrição feijão teste de descrição feijão teste de descrição feijão teste de descrição feijão teste de descrição feijão teste de descrição feijão teste de descrição feijão teste de descrição feijão teste de descrição feijão teste de descrição feijão teste de descrição feijão teste de descrição feijão teste de descrição feijão teste de descrição feijão teste de descrição feijão teste de descrição feijão teste de descrição feijão teste de descrição feijão teste de descrição feijão teste de descrição feijão teste de descrição feijão teste de descrição feijão teste de descrição feijão teste de descrição feijão teste de descrição feijão teste de descrição feijão teste de descrição feijão teste de descrição feijão teste de descrição feijão teste de descrição feijão ";
    description += description;

    return (
        <div className={style.wrapper}>            
            <div className={style.heartIcon}>
                <FaHeart color="lightgrey" size="2em" />
            </div>
            <img className={style.image} src={image} onClick={() => setOpen(true)}></img>                           
            <h1 className={style.title} onClick={() => setOpen(true)}>{title}</h1>
            <h2 className={style.value}>{"R$ " + value}</h2>
            <button className={style.btn}>Comprar</button>
            <ProductOverviewModal isOpen={open} closeModal={() => setOpen(!open)} title={title} value={value} image={image} description={description} />
        </div>
    );
}

export default ProductCard;