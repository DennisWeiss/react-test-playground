import React from 'react'
import {configure, shallow, mount, render} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Calculator from "./Calculator";

configure({adapter: new Adapter()})

describe('Calculator', () => {
    let calculator

    beforeEach(() => {
        calculator = mount(
            <Calculator/>
        )
    })

    it('renders', () => {
        expect(calculator.find('div')).not.toEqual(0)
    })

    it('2+3=5', () => {
        calculator.setState({a: 2, b: 3, operation: '+'})
        expect(calculator.find('.c-value').text()).toEqual('5')
    })

    it('renderResult is called', () => {
        calculator.instance().renderResult = jest.fn()
        calculator.setState({a: 3, b: 3, operation: '*'})
        expect(calculator.instance().renderResult).toHaveBeenCalled()
    })

})