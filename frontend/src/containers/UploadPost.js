import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Icon, Modal, Form, TextArea } from 'semantic-ui-react';
import { addNewPost } from 'store/connectIn/actions';
import { getUserState } from 'store/connectIn/selectors';
import '../index.css';

class UploadPost extends Component {
	
	constructor(props) {
    super(props);
    this.state = {
			file: '',
			name: '',
			comment: '',
			modalOpen: false,
    };
	}
	
	handleOpen = () => this.setState({ modalOpen: true })

	handleClose = () => {
		this.setState({ modalOpen: false }) 
		this.submitPost()
	}

	submitPost = () => {
		if (this.state.file) {
			let reader = new FileReader();
			reader.readAsDataURL(this.state.file);
			const scope = this;
			reader.onload = function(e) {
				const	readVal = reader.result;
				scope.setState({'file': readVal, 'name': scope.state.file.name});
				scope.props.addNewPost(scope.state.file, scope.state.name, scope.state.comment, scope.props.user.object[0].id);
			};
		} else {
			this.props.addNewPost(this.state.file, this.state.name, this.state.comment, this.props.user.object[0].id);
		}
	}

	fileInputRef = React.createRef();

	fileChange = e => {
			this.setState({ file: e.target.files[0] }, () => {
					
				  var reader = new FileReader();
					reader.onload = (function(theFile) {
					return function(e) {
						// Render thumbnail.
						document.getElementById("list").innerHTML = "";
					  var span = document.createElement('span');
					  span.innerHTML = ['<img class="thumb" src="', e.target.result,
						'" title="', escape(theFile.name), '"/>'].join('');
						document.getElementById('list').insertBefore(span, null);
					};
				  })(this.state.file);
			
				  reader.readAsDataURL(this.state.file);
			});
		};

	render() {
  return (
		<Modal 
			trigger={<Button onClick={this.handleOpen}>Upload Post</Button>} 
			centered={false} 
			open={this.state.modalOpen}
			onClose={this.handleClose} 
		>
			<Modal.Header>Select a Photo</Modal.Header>
			<Modal.Content image>
					<Form onSubmit={this.onFormSubmit}>
						<Form.Field>
							<Button
								content="Choose Image"
								labelPosition="left"
								icon="file"
								onClick={() => this.fileInputRef.current.click()}
							/>
							<input
								ref={this.fileInputRef}
								type="file"
								hidden
								onChange={this.fileChange}
							/>
						</Form.Field>
						<div id="list"></div>
					</Form>
				<Modal.Description>
					<TextArea 
						placeholder='Write Something here..!' 
						style={{ minHeight: 180, marginTop: 59, width: '80%' }}
						onChange = {(e) => this.setState({'comment': e.target.value})}/>
				</Modal.Description>
			</Modal.Content>
			<Modal.Actions>
          <Button color='teal' onClick={this.handleClose} inverted>
            <Icon name='cloud upload' /> Upload
          </Button>
      </Modal.Actions>
		</Modal>
);}}

const mapDispatchToProps = {
  addNewPost,
};

const mapStateToProps = state => ({
  user: getUserState(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadPost);