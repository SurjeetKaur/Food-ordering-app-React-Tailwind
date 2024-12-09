import React from 'react';
import {render,screen} from '@testing-library/react';
import Grocery from '../Grocery';
import "@testing-library/jest-dom";

describe("grocery page test cases",()=>{
    it(' should render without crashing',()=>{
        render(<Grocery businessName="Testing Grocery"/>);
    })

    // it ('should  display the business name',()=>{
    //     render(<Grocery businessName="Testing Grocery page"/>);
    //     const businessName=screen.getByText();
    //     expected(businessName).toBeInTheDocument();

    // })

})


