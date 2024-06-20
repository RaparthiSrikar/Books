import {Component} from 'react'

import notFoundImage from '../../assets/notfoundimage.jpeg'
import Header from '../Header'

import './index.css'

class NotFound extends Component {
    render() {
        return(
            <>
            <Header/>
            <div className='not-found-container'>
                <div>
                    <img src={notFoundImage} alt="Not Found" className='not-found-image' />
                </div>
                <h1>Oops!!! Something went wrong!</h1>
            </div>
            </>
        )
    }
}

export default NotFound