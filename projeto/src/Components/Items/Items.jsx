import { useEffect } from 'react'
import {
    ContainerItems,
    ContainerValueAndButton,
    InfoItems,
    ImgButton,
    ButtonClearAll,
    InputQuantity,
    DecreaseAndIncreaseButton,
    TweaksContainer,
    ImgControll,
    WarningParagraph,
    ButtonDeleteItem,
    SummaryContainer,
} from './ItemsStyle';

function Items({
    amount,
    setAmount,
    cart,
    setCart,
    removeCart,
    sumCart,
    removeItemCart,
    clearCart,
    quantityItems,
    setQuantityItems,
}) {
const calculateTotalPrice = () => {
    let totalPrice = 0;
    for (const item of cart) {
        const itemPrice = parseFloat(item[1]);
            totalPrice += itemPrice;
        }

    return totalPrice.toFixed(2);
};

const calculateTotalItems = () => {
    let totalElement = 0;
    for (const item of cart) {
        const itemElement = parseFloat(item[2]);
        totalElement += itemElement;
        }
    return totalElement;
    };

    useEffect(() => {
        setAmount(calculateTotalPrice());
        setQuantityItems(calculateTotalItems());
    }, [amount, cart]);

    const listCart = cart.map((item, index) => (
        <InfoItems key={index}>
            <h3>{item[0]}</h3>
            <TweaksContainer>
                <DecreaseAndIncreaseButton
                    onClick={() => {
                        removeCart(item, index);
                    }}
                >
                    {console.log(item)}
                    <ImgControll />
                </DecreaseAndIncreaseButton>
                <InputQuantity value={item[2]} />
                <DecreaseAndIncreaseButton
                    onClick={() => {
                        sumCart(item, index);
                    }}
                >
                    <ImgControll />
                </DecreaseAndIncreaseButton>
            </TweaksContainer>
            <p>Preço: R${item[1].toFixed(2)}</p>
                <ButtonDeleteItem
                onClick={() => {
                    removeItemCart(item, index);
                }}
            >
                Excluir Item
                </ButtonDeleteItem>
        </InfoItems>
    ));

  return (
    <ContainerItems>
            <h2>Carrinho</h2>
            <SummaryContainer>
                <h3>Resumo da Compra:</h3>
                {quantityItems === 0 ? '' : <p>Itens: {quantityItems}</p>}
                {amount == 0 ? (
                    <WarningParagraph>
                        Seu carrinho está vazio!
                    </WarningParagraph>
                ) : (
                    <ContainerValueAndButton>
                        <p>Total: R$ {amount}</p>
                        <ButtonClearAll
                            onClick={(event) => {
                                clearCart(event);
                            }}
                        >
                            <ImgButton/> 
                        </ButtonClearAll>
                    </ContainerValueAndButton>
                )}
            </SummaryContainer>
            {listCart}
    </ContainerItems>
  )
}

export default Items