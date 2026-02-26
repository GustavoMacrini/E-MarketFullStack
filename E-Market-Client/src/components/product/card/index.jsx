import style from "./card.module.css";
import { FaHeart } from "react-icons/fa";
function ProductCard({ openModal }) {

    let title = "Feijão Carioca Barbosa Tipo 1 | 1kg";
    let value = "7,49";
    let image = "https://d1pfez3jlrpp4u.cloudfront.net/imagem-ecommerce-barbosa/tiny-7bf39bb189f6abccfec278fd5053ac88-7896401100301.jpg";

    return (
        <div className={style.wrapper}>            
            <div className={style.heartIcon}>
                <FaHeart color="lightgrey" size="2em" />
            </div>
            <img className={style.image} src={image} onClick={() => openModal()}></img>                           
            <h1 className={style.title} onClick={() => openModal()}>{title}</h1>
            <h2 className={style.value}>{"R$ " + value}</h2>
            <button className={style.btn}>Comprar</button>
        </div>
    );
}

export default ProductCard;