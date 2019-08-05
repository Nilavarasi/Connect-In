import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Select, Checkbox, Message } from 'semantic-ui-react';
import { register } from 'store/connectIn/actions';
import { getUserError } from 'store/connectIn/selectors';

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

class RegisterForm extends Component {
	
	state = {
		firstname: '',
		lastname: '',
		professional: '',
		gender: '',
		email: '',
		password: '',
		password2: '',
	}

	handleSubmit = () =>{
		console.log("im in")
		window.location.reload()
		this.setState({ firstname: '',lastname: '', professional: '', gender: '', email: '', password: '', password2: '', })
	}

	  render() {
		const { error } = this.props;
		return (
		<Form size='large' onSubmit={this.handleSubmit}>
			{
				error ?
					<Message size='mini' negative>
						{console.log("error in mesg", error)}
						{error}
					</Message>

				: ''
      }
			<Form.Group widths='equal'>
				<Form.Input type='text' label='First name' placeholder='First name' onChange={(e) =>  this.setState({'firstname': e.target.value})}/>
				<Form.Input type='text' label='Last name' placeholder='Last name' onChange={(e) => this.setState({'lastname': e.target.value})} />
			</Form.Group>
			<Form.Group widths='equal'>
				<Form.Input type='text' label='Professional' placeholder='Professional' onChange={(e) => this.setState({'professional': e.target.value})} />
				<Form.Field type='text' control={Select} label='Gender' options={options} placeholder='Gender' onChange={(e, { value })  => this.setState({'gender': value})} />
			</Form.Group>
			<Form.Group widths='equal'>
				<Form.Input type='text' label='Email' placeholder='Email' onChange={(e) => this.setState({'email': e.target.value})}/>
			</Form.Group>
			<Form.Group widths='equal'>
				<Form.Input type='password' label='Password' placeholder='Password' onChange={(e) => this.setState({'password': e.target.value})} />
				<Form.Input type='password' label='Retype Password' placeholder='Retype Password' onChange={(e) => this.setState({'password2': e.target.value})} />
			</Form.Group>
			<Form.Field control={Checkbox} label='I agree to the Terms and Conditions' />
			<Button
        fluid
        color='teal'
        size='large'
        onClick={() => this.props.register(this.state.firstname, this.state.lastname, this.state.professional, this.state.gender, this.state.email, this.state.password)}
      >
        Submit
      </Button>
		</Form>
		);
	}
}

const mapStateToProps = state => ({
  error: getUserError(state),
});


const mapDispatchToProps = {
	register,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
