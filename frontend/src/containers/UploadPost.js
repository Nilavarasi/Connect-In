import React, { Component } from 'react';
import { Button, Header, Image, Modal, Form } from 'semantic-ui-react';


class UploadPost extends Component {
	
	constructor(props) {
    super(props);
    this.state = {
      file: null
    };
	}
	
	fileInputRef = React.createRef();
		onFormSubmit = e => {
			e.preventDefault(); // Stop form submit
			this.fileUpload(this.state.file).then(response => {
				console.log(response.data);
			});
		};

		fileChange = e => {
			this.setState({ file: e.target.files[0] }, () => {
				console.log("File chosen --->", this.state.file);
			});
		};

		 // Import datasources/schemas Tab 1
		 fileUpload = file => {
			const url = "/some/path/to/post";
			const formData = new FormData();
			formData.append("file", file);
			const config = {
				headers: {
					"Content-type": "multipart/form-data"
				}
			};
			return [url, formData, config];
		};

	render() {
		const { file } = this.state;
		
  return (
		<Modal trigger={<Button>Upload Post</Button>} centered={false}>
			<Modal.Header>Select a Photo</Modal.Header>
			<Modal.Content image>
					<Form onSubmit={this.onFormSubmit}>
						<Form.Field>
							<Button
								content="Choose File"
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
						<Button type="submit">Upload</Button>
					</Form>
				<Image wrapped size='medium' src='/images/avatar/large/rachel.png' />
				<Modal.Description>
					<Header>Default Profile Image</Header>
					<p>We've found the following gravatar image associated with your e-mail address.</p>
					<p>Is it okay to use this photo?</p>
				</Modal.Description>
			</Modal.Content>
		</Modal>
);}}

export default UploadPost;