import React from "react";
import styled from "styled-components";
import { PageHero } from "../../Components";
import StripeCheckout from "../../Components/StripeCheckout/StripeCheckout";
import { useCartContext } from "../../Context/CardContext/card_context";
import { Link } from "react-router-dom";
import Stripe from "stripe";

const CheckoutPage = () => {
  const { cart } = useCartContext();
  return (
    <main>
      <PageHero title={"checkout"} />
      <Wrapper className="page">
        {cart.length < 1 ? (
          <div className="empty">
            <h2>Your cart is empty</h2>
            <Link to="/products" className="btn">
              Fill it
            </Link>
          </div>
        ) : (
          <StripeCheckout></StripeCheckout>
        )}
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .empty {
    text-align: center;
  }
`;
export default CheckoutPage;
