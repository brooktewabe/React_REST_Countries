import {render, screen,cleanup} from '@testing-library/react'
import AllCountries from '../components/Countries'

//const {AllCountries}= require('../components/Countries')
// it ('should await', ()=>{
//     const apiData =  AllCountries()
//     expect(apiData).toBe(250);
// });
 test('should render component',() => {
    render(<AllCountries/>);
    const countriesElement = screen.getByTestId('allCountries-1');
    expect(countriesElement).toBeInTheDocument();
})