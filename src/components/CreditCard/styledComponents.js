// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  @media screen and (min-width: 576px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 100vh;
  }
  @media screen and (max-width: 575px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100vh;
  }
`

export const CreditCardContainer = styled.div`
  @media screen and (min-width: 576px) {
    width: 48%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 575px) {
    width: 100%;
    height: 48%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  background-color: #475569;
`

export const PaymentMainContainer = styled.div`
  @media screen and (min-width: 576px) {
    width: 48%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 575px) {
    width: 100%;
    height: 48%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const CreditCardHeading = styled.h1`
  font-weight: bold;
  font-size: 27px;
  font-family: 'Roboto';
  color: #ffffff;
  text-decoration: underline;
  text-decoration-color: #ffd773;
`

export const CreditCards = styled.div`
  border: none;
  border-radius: 9px;
  margin: auto;
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  height: 34vh;
  width: 86%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: start;
  align-self: center;
  padding: 7px;
`

export const CreditCardNumber = styled.p`
  font-weight: bold;
  font-size: 14px;
  font-family: 'Roboto';
  color: #ffffff;
  margin-top: 19px;
`

export const HolderNameHeading = styled.p`
  font-size: 12px;
  font-family: 'Roboto';
  color: #ffffff;
`

export const CardHolderName = styled.p`
  font-weight: bold;
  font-size: 14px;
  font-family: 'Roboto';
  color: #ffffff;
`

export const PaymentCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  width: 60%;

  border-radius: 7px;
  box-shadow: 19px 12px 14px #475569 yellow;
`

export const PaymentMethodHeading = styled.h1`
  font-weight: bold;
  font-size: 24px;
  font-family: 'Roboto';
  color: #3b4b69;
`

export const CardNumInputField = styled.input`
  background-color: #d3d9e0;
  border: none;
  outline: none;
  margin: 10px;
  height: 30px;
`
export const HolderNameField = styled.input`
  background-color: #d3d9e0;
  border: none;
  outline: none;
  height: 30px;
`
