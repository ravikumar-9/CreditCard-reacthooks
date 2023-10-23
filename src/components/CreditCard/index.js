// Write your code here

import {useState} from 'react'

import {
  MainContainer,
  CreditCardContainer,
  CreditCardHeading,
  CreditCards,
  CreditCardNumber,
  HolderNameHeading,
  CardHolderName,
  PaymentMainContainer,
  PaymentCard,
  PaymentMethodHeading,
  CardNumInputField,
  HolderNameField,
} from './styledComponents'

const CreditCard = () => {
  console.log('h')

  const [cardNumber, setCardNumber] = useState('')

  const [holderName, setHolderName] = useState('')

  const onChangeCardNumber = event => {
    setCardNumber(event.target.value)
  }

  const onChangeHolderName = event => {
    setHolderName(event.target.value)
  }

  return (
    <MainContainer>
      <CreditCardContainer>
        <CreditCardHeading> CREDIT CARD</CreditCardHeading>
        <CreditCards data-testid="creditCard">
          <CreditCardNumber>{cardNumber}</CreditCardNumber>
          <HolderNameHeading>CARDHOLDER NAME</HolderNameHeading>
          <CardHolderName>{holderName.toUpperCase()}</CardHolderName>
        </CreditCards>
      </CreditCardContainer>
      <PaymentMainContainer>
        <PaymentCard>
          <PaymentMethodHeading>Payment Method</PaymentMethodHeading>
          <CardNumInputField
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={onChangeCardNumber}
          />
          <HolderNameField
            type="text"
            placeholder="Cardholder Name"
            value={holderName}
            onChange={onChangeHolderName}
          />
        </PaymentCard>
      </PaymentMainContainer>
    </MainContainer>
  )
}

export default CreditCard
