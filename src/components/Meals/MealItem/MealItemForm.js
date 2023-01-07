import styled from 'styled-components';

const MealItemForm = (props) => {
  return (
    <Form>
      <input />
      <button>+ Add0</button>
    </Form>
  );
};

export default MealItemForm;

const Form = styled.form`
  text-align: right;

  & button {
    font: inherit;
    cursor: pointer;
    background-color: #8a2b06;
    border: 1px solid #8a2b06;
    color: white;
    padding: 0.25rem 2rem;
    border-radius: 20px;
    font-weight: bold;
  }

  & button:hover,
  & button:active {
    background-color: #641e03;
    border-color: #641e03;
  }
`;
