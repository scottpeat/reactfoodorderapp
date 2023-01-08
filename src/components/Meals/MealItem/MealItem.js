import MealItemForm from './MealItemForm';
import styled from 'styled-components';

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <MealStyle>
      <div>
        <h3>{props.name}</h3>
        <Description>{props.description}</Description>
        <Price>{price}</Price>
      </div>
      <div>
        <MealItemForm id={props.id} />
      </div>
    </MealStyle>
  );
};

export default MealItem;

const MealStyle = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;

  & h3 {
    margin: 0 0 0.25rem 0;
  }
`;

const Description = styled.div`
  font-style: italic;
`;

const Price = styled.div`
  margin-top: 0.25rem;
  font-weight: bold;
  color: #ad5502;
  font-size: 1.25rem;
`;
