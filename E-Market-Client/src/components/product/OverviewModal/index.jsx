
import { FaHeart } from "react-icons/fa";
import style from './Overview.module.css';

function Description() {
    let description = "teste de descrição feijão";
    return (
        <div className={style.descriptionWrapper}>
            <h1 className={style.descriptionTitle}>Informações adicionais</h1>
            <div className={style.description}>{description}</div>
        </div>        
    );
}

function ProductOverviewModal({ isOpen, closeModal }) {

    let title = "Feijão Carioca Barbosa Tipo 1 | 1kg";
    let value = "7,49";
    let image = "https://d1pfez3jlrpp4u.cloudfront.net/imagem-ecommerce-barbosa/tiny-7bf39bb189f6abccfec278fd5053ac88-7896401100301.jpg";
    
    if (isOpen == true) {
        return (
            <div className={style.background}>
                <div className={style.modal}>

                    <div className={style.wrapper}>
                        <div className={style.product}>
                            <div className={style.imageWrapper}>
                                <img className={style.image} src={image}></img>
                            </div>


                            <div className={style.detailDescriptionWrapper}>
                                <div className={style.detailWrapper}>
                                    <div className={style.detail}>
                                        <h1 className={style.title}>{title}</h1>
                                        <h2 className={style.value}>{"R$ " + value}</h2>
                                        <button onClick={() => closeModal()} className={style.btn}>Comprar</button>
                                    </div>

                                    <FaHeart color="lightgrey" size="2em" className={style.heartIcon} />

                                </div>
                                <Description />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default ProductOverviewModal;