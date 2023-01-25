import CartIcon from '../Cart/CartIcon';
import styled from 'styled-components';
import { useContext } from 'react';

import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button}`;

  return (
    <Button onClick={props.onClick}>
      <Icon>
        <CartIcon />
      </Icon>
      <span>Your Cart</span>
      <Badge>{numberOfCartItems}</Badge>
    </Button>
  );
};

export default HeaderCartButton;

const Button = styled.button`
  cursor: pointer;
  font: inherit;
  border: none;
  background-color: #4d1601;
  color: white;
  padding: 0.75rem 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 25px;
  font-weight: bold;

  &:hover,
  &:active {
    background-color: #2c0d00;
  }

  &:hover .badge,
  &:active .badge {
    background-color: #92320c;
  }
`;

const Icon = styled.span`
  width: 1.35rem;
  height: 1.35rem;
  margin-right: 0.5rem;
`;

const Badge = styled.span`
  background-color: #b94517;
  padding: 0.25rem 1rem;
  border-radius: 25px;
  margin-left: 1rem;
  font-weight: bold;
`;

/*

const Bump = styled.div`
   {
    animation: BumpAnimation 300ms ease-out;
  }
`;

const BumpAnimation = styled.keyframes`
  0% {
    transform: scale(1);
  }
  10% {
    transform: scale(0.9);
  }
  30% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
`;

*/
