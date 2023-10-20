import {render, screen,cleanup} from '@testing-library/react'
import NotFound from '../components/NotFound'

test('should render component',() => {
    render(<NotFound/>);
    const countriesElement = screen.getByTestId('notFound-1');
    expect(countriesElement).toBeInTheDocument();
})