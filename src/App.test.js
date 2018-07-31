import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Calculator from "./Calculator";

configure({adapter: new Adapter()})


describe('App', () => {
    let app

    beforeEach(() => {
        app = shallow(<App/>)
    })

    it('renders without crashing', () => {
        expect(app.find('.App').length).toEqual(1)
    })

    it('matches snapshot', () => {
        expect(app).toMatchSnapshot()
    })

    it('renders Calculator', () => {
        expect(app.containsMatchingElement(<Calculator/>)).toEqual(true)
    })
})

