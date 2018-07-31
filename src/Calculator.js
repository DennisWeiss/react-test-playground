import React from 'react'
import {InputNumber, Select} from 'antd'


class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            a: 0,
            b: 0,
            operation: '+'
        }
    }


    handleAValueChange = value => {
        this.setState({
            a: value
        })
    }

    handleBValueChange = value => {
        this.setState({
            b: value
        })
    }

    handleOperationChange = value => {
        this.setState({
            operation: value
        })
    }

    renderResult = (a, b, operation) => {
        switch (operation) {
            case '+':
                return a + b
            case '-':
                return a - b
            case '*':
                return a * b
            case '/':
                return a / b
        }
    }

    render() {
        return (
            <div>
                <InputNumber className='a-value-input' value={this.state.a} onChange={this.handleAValueChange}/>
                <Select className='operation-select' value={this.state.operation} onChange={this.handleOperationChange}>
                    <Select.Option value='+'>+</Select.Option>
                    <Select.Option value='-'>-</Select.Option>
                    <Select.Option value='*'>*</Select.Option>
                    <Select.Option value='/'>/</Select.Option>
                </Select>
                <InputNumber className='b-value-input' value={this.state.b} onChange={this.handleBValueChange}/>
                <div className='c-value'>{this.renderResult(this.state.a, this.state.b, this.state.operation)}</div>
            </div>
        )
    }
}


export default Calculator