import React from 'react';

class PersonalInformation extends React.Component {

    userData;

    constructor(props) {
        super(props);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangePersonalNumber = this.onChangePersonalNumber.bind(this);
        this.onChangeAdress = this.onChangeAdress.bind(this);
        this.onChangePostort = this.onChangePostort.bind(this);
        this.onChangePostNumber = this.onChangePostNumber.bind(this);
        this.onChangeTelephoneNumber = this.onChangeTelephoneNumber.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            firstname: '',
            lastname: '',
            personalnumber: '',
            adress: '',
            postort: '',
            postnumber: '',
            telephonenumber: '',
            email: ''
        }
    }

    onChangeFirstName = (e) => {
        this.setState({
            firstname : e.target.value
        })
    }
    onChangeLastName = (e) => {
        this.setState({
            lastname : e.target.value
        })
    }
    onChangePersonalNumber = (e) => {
        this.setState({
            personalnumber : e.target.value
        })
    }

    onChangeAdress = (e) => {
        this.setState({
            adress: e.target.value
        })
    }

    onChangePostort = (e) => {
        this.setState({
            postort: e.target.value
        })
    }

    onChangePostNumber = (e) => {
        this.setState({
            postnumber: e.target.value
        })
    }

    onChangeTelephoneNumber = (e) => {
        this.setState({
            telephonenumber: e.target.value
        })
    }

    onChangeEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
    }

    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));

        if (localStorage.getItem('user')) {
            this.setState({
                firstname: this.userData.firstname,
                lastname: this.userData.lastname,
                personalnumber: this.userData.personalnumber,
                adress: this.userData.adress,
                postort: this.userData.postort,
                postnumber: this.userData.postnumber,
                email: this.userData.email
            })
        } else {
            this.setState({
                firstname: '',
                lastname: '',
                personalnumber: '',
                adress: '',
                postort: '',
                postnumber: '',
                email: ''
            })
        }

    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(nextState));
        
    }

    getData() {

        let data = localStorage.getItem('user');
        data= JSON.parse(data);
        console.log(data.firstname, data.lastname, data.personalnumber, data.adress, data.postort, data.postnumber, data.telephonenumber, data.email);
    }


    render() {

        return (
            <div>
                
                <form onSubmit={this.onSubmit} >
                
                    <div>
                        <label>First Name</label>
                        <input type="text" value={this.state.firstname} onChange={this.onChangeFirstName}></input>
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input type="text" value={this.state.laststname} onChange={this.onChangeLastName}></input>
                    </div>
                    <div>
                        <label>Personal Number</label>
                        <input type="text" value={this.state.personalnumber} onChange={this.onChangePersonalNumber}></input>
                    </div>

                    <div>
                        <label>Adress</label>
                        <input type="text" value={this.state.adress} onChange={this.onChangeAdress}></input>
                    </div>

                    <div>
                        <label>Postort</label>
                        <input type="text" value={this.state.postort} onChange={this.onChangePostort}></input>
                    </div>

                    <div>
                        <label>Postnummer</label>
                        <input type="text" value={this.state.postnumber} onChange={this.onChangePostNumber}></input>
                    </div>

                    <div>
                        <label>Telefonnummer</label>
                        <input type="text" value={this.state.telephonenumber} onChange={this.onChangeTelephoneNumber}></input>
                    </div>

                    <div>
                        <label>Email</label>
                        <input type="text" value={this.state.email} onChange={this.onChangeEmail}></input>
                    </div>

                </form>

                <div>
                    <button type="submit">Save Data</button>
                </div>                    
            
            </div>
        );
    }
}
export default PersonalInformation;