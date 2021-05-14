import React from 'react'
import { render } from '../testUtils'
import { Home } from '../../pages/index'

describe('Home page', () => {
  it('matches snapshot', () => {
    const { container } = render(<Home />, {})
    expect(container).toMatchSnapshot()
  })
})
