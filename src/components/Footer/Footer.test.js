import React from 'react';
// render -> create virtual DOM 
import {render, fireEvent, getAllByAltText} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from './Footer';

// descibe which test that we will test
describe('Footer', () => {
    test('Render Footer', () => {
        const {getByTestId, getAllByTestId} = render(<Footer />);

        const footerTitle = getAllByTestId('footer-title');
        
        expect(footerTitle.length).toBe(4); 
    })
})