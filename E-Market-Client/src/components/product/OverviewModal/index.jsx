
import { FaHeart } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import style from './Overview.module.css';
import { useEffect, useRef, useState } from 'react';

function Description() {   
    let description = "teste de descrição feijão teste de descrição feijão teste de descrição feijão teste de descrição feijão teste de descrição feijão teste de descrição feijão teste de descrição feijão teste de descrição feijão teste de descrição feijão teste de descrição feijão teste de descrição feijão teste de descrição feijão teste de descrição feijão teste de descrição feijão teste de descrição feijão teste de descrição feijão teste de descrição feijão teste de descrição feijão teste de descrição feijão teste de descrição feijão teste de descrição feijão teste de descrição feijão teste de descrição feijão teste de descrição feijão teste de descrição feijão teste de descrição feijão teste de descrição feijão teste de descrição feijão teste de descrição feijão teste de descrição feijão teste de descrição feijão teste de descrição feijão ";
    const [open, setOpen] = useState(true);

    return (
        <div className={style.descriptionWrapper}>
            <div className={style.arrowWrapper }>
                <h1 className={style.descriptionTitle} onClick={() => { setOpen(!open) }}>Informações adicionais</h1>
                {open ? <IoIosArrowUp size="1.3em" className={style.arrow} onClick={() => { setOpen(!open) }} /> :
                        <IoIosArrowDown size="1.3em" className={style.arrow} onClick={() => { setOpen(!open) }} />}
                
            </div>

            <div className={style.description}>{open ? description : null}</div>
        </div>        
    );
}

function ProductOverviewModal({ isOpen, closeModal }) {

    let title = "Feijão Carioca Barbosa Tipo 1 | 1kg";
    let value = "7,49";
    let image = "https://d1pfez3jlrpp4u.cloudfront.net/imagem-ecommerce-barbosa/tiny-7bf39bb189f6abccfec278fd5053ac88-7896401100301.jpg";


    // Hook para detectar cliques fora do modal
    const useOutsideClick = (ref, callback) => {
        useEffect(() => {
            const handleClick = (e) => {
                if (ref.current && !ref.current.contains(e.target)) {
                    callback();
                }
            };
            document.addEventListener('mousedown', handleClick);
            return () => document.removeEventListener('mousedown', handleClick);
        }, [ref, callback]);
    };

    const modalRef = useRef(null);
    useOutsideClick(modalRef, closeModal);

    if (isOpen != true) {
        return null;
    }
    
    return (
        <div className={style.background}> 
            <div className={style.modal}>
                <div ref={modalRef} className={style.wrapper}>
                    <div className={style.product}>                            
                        <div className={style.imageWrapper}>
                            <img className={style.image} src={image}></img>
                        </div>


                        <div className={style.detailDescriptionWrapper}>
                            
                            <div className={style.closeButtonWrapper}>
                                <div className={style.closeButton}>
                                    <IoMdClose size="2em" className={style.closeButtonIcon} onClick={() => closeModal()} />
                                </div>
                                <div className={style.detailWrapper}>

                                    <div className={style.detail}>
                                        <h1 className={style.title}>{title}</h1>
                                        <h2 className={style.value}>{"R$ " + value}</h2>
                                        <button className={style.btn}>Comprar</button>
                                    </div>

                                    <FaHeart color="lightgrey" size="2em" className={style.heartIcon} />

                                </div>
                            </div>
                            
                            <Description />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
    
    
}

export default ProductOverviewModal;