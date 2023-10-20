import {render, screen,cleanup} from '@testing-library/react'
import Search from '../components/Search'

test('should render component',() => {
    render(<Search/>);
    const countriesElement = screen.getByTestId('search-1');
    expect(countriesElement).toBeInTheDocument();
})