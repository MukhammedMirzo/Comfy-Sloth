import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { PageHero } from "../../Components";
import CardContent from "../../Components/CardContent/CardContent";
import { useCartContext } from "../../Context/CardContext/card_context";

const CardPage = () => {
  const { cart } = useCartContext();
  if (cart.length < 1)
    return (
      <main>
        <PageHero title="cart" />
        <Wrapper className="page-100">
          <div className="empty">
            <h2>Your cart is empty</h2>
            <Link to="/products" className="btn">
              Fill it
            </Link>
          </div>
        </Wrapper>
      </main>
    );
  return (
    <main>
      <PageHero title="cart" />
      <Wrapper>
        <CardContent />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`;

export default CardPage;
