import React, { Component } from 'react';

class ContactForm extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
        picture: '',
        formErrors: {
            name: 'Name is Requiered',
            email: 'Email is Requiered',
            phone: 'Phone is Requiered'
        },
        errorMssg: null
    };

    // addNewContact = (event) => {
    //     console.log("Adding a New Contact...");
    //     const name = this.refs.name.value;
    //     const email = this.refs.email.value;
    //     const phone = this.refs.phone.value;
    //     const picture = this.refs.picture.value;

    //     const p1 = {name,email,phone,picture};
    //     console.log(p1);

    //     this.refs.name.value = '';
    //     this.refs.email.value = '';
    //     this.refs.phone.value = '';
    //     this.refs.picture.value = '';

    //     event.preventDefault();
    // }

    tfHandler = (evt) => {

        let name = evt.target.name;
        let value = evt.target.value;
        let {formErrors} = this.state;
        // // console.log(name, value);
        // let modified = {};
        // modified[name] = value;
        // this.setState(modified);
        // console.log(modified);

        switch(name) {
            case 'name':
                if(!value || value.length === 0) {
                    formErrors.name = 'Name is Required';
                }
                else if(value.length < 3 || value.length > 20) {
                    formErrors.name = 'Name must be 3 to 20 letters';
                }
                else {
                    formErrors.name = '';
                }
                break;
            case 'email':
                if(!value || value.length === 0) {
                    formErrors.email = 'Email is Required';
                }
                else if(!value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
                    formErrors.email = 'Not a valid Email';
                }
                else {
                    formErrors.email = '';
                }
                break;
            case 'phone':
                if(!value || value.length === 0) {
                    formErrors.phone = 'Phone is Required';
                }
                else if(!value.match(/^\d{10,12}$/)) {
                    formErrors.phone = 'Not a valid Phone';
                }
                else {
                    formErrors.phone = '';
                }
                break;
            default:
                break;
        }

        this.setState({[name]: value, formErrors});
    }

    validateForm = (formErrors) => {
        let valid = true;
        Object.values(formErrors).forEach(err => valid = valid && err.length === 0);
        return valid;
    }

    submitHandler = (evt) => {

        let {formErrors} = this.state;

        if(this.validateForm(formErrors)) {
            alert('All is Well');
        }

        let errorMssg = Object.values(formErrors).map((err,idx) => err.length===0? null: <li key={idx}>{err}</li>);
        this.setState({errorMssg});

        evt.preventDefault();
    }

    render() {
        return (
            <div className="row">
                <div className="col">
                    <div>
                        <h3>Add a New Contact</h3>
                        <form className="form" onSubmit={this.submitHandler}>
                            <div className="form-group row">
                                <label htmlFor="" className="control-label col-md-4">
                                    Name
                                </label>
                                <div className="col-md-8">
                                    <input value={this.state.name} onChange={this.tfHandler} name='name' type="" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="" className="control-label col-md-4">
                                    Email
                                </label>
                                <div className="col-md-8">
                                    <input value={this.state.email} onChange={this.tfHandler} name='email' type="" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="" className="control-label col-md-4">
                                    Phone
                                </label>
                                <div className="col-md-8">
                                    <input value={this.state.phone} onChange={this.tfHandler} name='phone' type="" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="" className="control-label col-md-4">
                                    Picture
                                </label>
                                <div className="col-md-8">
                                    <input value={this.state.picture} onChange={this.tfHandler} name='picture' type="" className="form-control"/>
                                </div>
                            </div>
                            <button className="btn btn-primary">Add</button>
                        </form>
                        <ul>
                            {this.state.errorMssg}
                        </ul>
                    </div>
                </div>
                <div className="col">
                    <h3>Current State</h3>
                    <pre>
                    {JSON.stringify(this.state, null, 3)}
                    </pre>
                </div>
            </div>
        );
    }
}

export default ContactForm;