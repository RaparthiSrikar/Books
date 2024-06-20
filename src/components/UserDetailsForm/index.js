import { Component } from "react"
import './index.css'

class UserDetailsForm extends Component {
    render(){
        return (
            <>
            <div className="user-form">
                <h2>Delivery Address and Contact Info</h2>
                <form>
                    <label className="user-details-from-label">Name </label>
                    <br/>
                    <div className="grid-container">
                        <input className="user-details-form-name-input" type="text" required placeholder="First Name " />
                        <input className="user-details-form-name-input" type="text" required placeholder="Last Name " />
                    </div>
                    <label className="user-details-form-label">Email
                        <br/>
                        <input className="user-details-form-input" type="email" required placeholder="Email "/>
                    </label>
                    <br/>
                    <label className="user-details-form-label">Phone Number
                        <br/>
                        <input className="user-details-form-input" type="tel" required placeholder="Phone" pattern="[0-9]{10}"/>
                    </label>
                    <br/>
                    <label className="user-details-form-label">Address
                        <br/>
                        <input className="user-details-form-input" type="text" required placeholder="Address" />
                    </label>
                    <br/>
                    <label className="user-details-form-label">Country
                        <br/>
                        <input className="user-details-form-input" type="text" required/>
                    </label>
                    <br/>
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>
            </>
        )
    }
}

export default UserDetailsForm