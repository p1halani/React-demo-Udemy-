import React, { Component } from 'react';

class ContactForm extends Component {

    addNewContact = (event) => {
        console.log("Adding a New Contact...");
        const name = this.refs.name.value;
        const email = this.refs.email.value;
        const phone = this.refs.phone.value;
        const picture = this.refs.picture.value;

        const p1 = {name,email,phone,picture};
        console.log(p1);

        this.refs.name.value = '';
        this.refs.email.value = '';
        this.refs.phone.value = '';
        this.refs.picture.value = '';

        event.preventDefault();
    }

    render() {
        return (
            <div>
            <h3>Add a New Contact</h3>
                <form className="form" onSubmit={this.addNewContact}>
                    <div className="form-group row">
                        <label htmlFor="" className="control-label col-md-4">
                            Name
                        </label>
                        <div className="col-md-8">
                            <input ref='name' type="" className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="" className="control-label col-md-4">
                            Email
                        </label>
                        <div className="col-md-8">
                            <input ref='email' type="" className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="" className="control-label col-md-4">
                            Phone
                        </label>
                        <div className="col-md-8">
                            <input ref='phone' type="" className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="" className="control-label col-md-4">
                            Picture
                        </label>
                        <div className="col-md-8">
                            <input ref='picture' type="" className="form-control"/>
                        </div>
                    </div>
                    <button className="btn btn-primary">Add</button>
                </form>
            </div>
        );
    }
}

export default ContactForm;