import React from 'react'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Hello from "./Hello";

configure({adapter: new Adapter()})

describe('Hello', () => {
    let hello

    beforeEach(() => {
        hello = shallow(<Hello a={2} b={3}/>)
    })

    it('2+3=5', () => {
        expect(hello.find('.result').text()).toEqual('5')
    })
})