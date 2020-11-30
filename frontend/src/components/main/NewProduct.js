import React from 'react'
import { Redirect } from 'react-router-dom'

class NewProduct extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      p_name: '',
      p_description: '',
      p_category: '',
      p_quantity: '',
      p_price: '',
      redirect: null,
      errMessage: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleInputChange(event) {
    let name = event.target.name
    let value = event.target.value
    let err
    console.log(name, value)
    if (name === 'p_quantity') {
      if (value !== '' && !Number(value)) {
        err = <strong>Quantity must be a number</strong>
      }
    }
    console.log(this.state)
    this.setState({ [name]: value })
    // this.setState({
    //   [event.target.name]: event.target.value,
    // })
  }

  handleSubmit(event) {
    const { name, description, category, quantity, price } = this.state
    event.preventDefault()
    alert(`
      ____Your Details____\n
      ${name}
      ${description}
      ${category}
      ${quantity}
      ${price}
    `)
    this.setState({ redirect: '/' })
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return (
      <div className='w-full max-w-full'>
        <form
          onSubmit={this.handleSubmit}
          className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
        >
          <div className='mb-4'>
            <label htmlFor='p-image' className='block text-gray-700 text-base mb-2'>
              Product Image
            </label>
            <input
              type='file'
              name='p-image'
              ref={this.fileInput}
              className='shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='p_name' className='block text-gray-700 text-base mb-2'>
              Product Name
            </label>
            <input
              type='text'
              name='p_name'
              value={this.state.p_name}
              onChange={this.handleInputChange}
              className='shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='p_description' className='block text-gray-700 text-base mb-2'>
              Product Description
            </label>
            <textarea
              name='p_description'
              id=''
              cols='30'
              rows='10'
              value={this.state.p_description}
              onChange={this.handleInputChange}
              className='shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline'
            ></textarea>
          </div>
          <div className='mb-4'>
            <label htmlFor='p_category' className='block text-gray-700 text-base mb-2'>
              Product Category
            </label>
            <select
              name='p_category'
              value={this.state.p_category}
              onChange={this.handleInputChange}
              className='shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline'
            >
              <option value='grapefruit'>Grapefruit</option>
              <option value='lime'>Lime</option>
              <option value='coconut'>Coconut</option>
              <option value='mango'>Mango</option>
            </select>
          </div>
          <div className='mb-4'>
            <label htmlFor='p_quantity' className='block text-gray-700 text-base mb-2'>
              Product Quantity
            </label>
            <input
              type='text'
              name='p_quantity'
              id=''
              value={this.state.p_quantity}
              onChange={this.handleInputChange}
              className='shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline'
            />
            {this.state.errMessage}
          </div>
          <div className='mb-4'>
            <label htmlFor='p_price' className='block text-gray-700 text-base mb-2'>
              Product Price
            </label>
            <input
              type='number'
              name='p_price'
              id=''
              value={this.state.p_price}
              onChange={this.handleInputChange}
              className='shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline'
            />
          </div>
          <div className='mb-4'>
            <input
              type='submit'
              className='shadow appearance-none border rounded float-right w-16'
              value='Submit'
            />
          </div>
        </form>
      </div>
    )
  }
}
export default NewProduct
