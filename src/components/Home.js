import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
  return (
    <Container>
       <Section
           title="Model S"
           discription= "Order Online for Touchless Delivery"
           backgroundImg="model-s.jpg"
           leftBtnText="Custom order"
           rightBtnText="Existing inventory"
       />

       <Section
           title="Model Y"
           discription= "Order Online for Touchless Delivery"
           backgroundImg="model-y.jpg"
           leftBtnText="Custom order"
           rightBtnText="Existing inventory"
       />

       <Section
           title="Model 3"
           discription= "Order Online for Touchless Delivery"
           backgroundImg="model-3.jpg"
           leftBtnText="Custom order"
           rightBtnText="Existing inventory" 
       />
       <Section
           title="Model X"
           discription= "Order Online for Touchless Delivery"
           backgroundImg="model-x.jpg"
           leftBtnText="Custom order"
           rightBtnText="Existing inventory"
       />

       <Section
           title="Lowest Cost solar Panels in America"
           discription="Money-Back guarantee"
           backgroundImg="solar-panel.jpg"
           leftBtnText="Order Now"
           rightBtnText="learn More"
       />
         <Section
           title="Solar for New Roofs"
           discription="Solar Roof Costs Less Than a New Roof plus solar planels"
           backgroundImg="solar-roof.jpg"
           leftBtnText="Order Now"
           rightBtnText="learn More"
       />
         <Section
           title="Accessories"
           discription=""
           backgroundImg="accessories.jpg"
           leftBtnText="Shop Now"
           rightBtnText="learn More"
       />
    </Container>
    
    
  )
}

export default Home

const Container = styled.div`
height:100vh;
`

