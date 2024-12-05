import React from 'react';
import {render,screen} from '@testing-library/react';
import Grocery from '../Grocery';

it(' should render without crashing',()=>{
    render(<Grocery businessName="Testing Grocery"/>);
})

