import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FeaturedCard from './FeaturedCard';

const featureData = {
  id : 'irh49dm8n',
  data: {
      title: 'test Title',
      desc: 'test Description',
      imgURL: '../../assets/img/home_page/dining_party_430x430.jpg',
      linkName: 'test name',
      linkURL: ''
  }
}


describe('FeaturedCard', ()=> {
  test('Render feature category default style', () => {

    const {getAllByTestId, getByTestId} = render (
      <FeaturedCard 
        featureData={featureData}
        featureStyle='default'
      />
    )

    const title = getByTestId('title');
    expect(title).toBeInTheDocument();
    expect(getByTestId('description')).toBeInTheDocument();
    expect(getByTestId('shop-button')).toBeInTheDocument();
  })
})