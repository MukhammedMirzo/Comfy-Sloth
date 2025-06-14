import React from "react";
import styled from "styled-components";
import { useCartContext } from "../../Context/CardContext/card_context";
import { useUserContext } from "../../Context/UserContext/user_context";
import { formatPrice } from "../../Utils/helpers";
import { Link } from "react-router-dom";

const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext();
  // const { myUser, loginWithRedirect } = useUserContext();

  return (
    <Wrapper>
      <div className="">
        <article>
          <h5>
            Subtotal: <span>{formatPrice(total_amount)}</span>
          </h5>
          <p>
            Shipping fee: <span>{formatPrice(shipping_fee)}</span>
          </p>
          <hr />
          <h4>
            Order total: {""}
            <span>{formatPrice(total_amount + shipping_fee)}</span>
          </h4>
          <button type="button" className="btn">
            Login
          </button>
          <Link to="/checkout" className="btn">
            Proceed to checkout
          </Link>
        </article>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
`;
export default CartTotals;
