import React, { Component } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import './App.css';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '48%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width : '250px'
  }
};

class App extends Component {
  state = {
    firstname: null,
    lastname: null,
    email: null,
    school: null,
    showModal: false
  }

  constructor(props) {
    super(props);
    this.putDataToDB = this.putDataToDB.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  putDataToDB = () => {
      axios.post('https://talentbridger.herokuapp.com/apis/putData', {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        school: this.state.school
      });
      this.setState({
        showModal: true,
        firstname: '',
        lastname: '',
        email: '',
        school: '',
      });
  };

  closeModal () {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div className='App'>
        <div className="title">
          <h2> TalentBridger </h2>
        </div>
        <div className="grid">
          <div className="grid1">
            <h1> Start Your Recruiting Journey </h1>
            <h5 style={{ opacity: '80%' }}> with 3 easy steps on our platform. </h5>
            <h3> 1. Play a few quick games. </h3>
            <h4 style={{ opacity: '80%' }}> Time for you to show off your soft skills. </h4>
            <h3> 2. Apply to companies. </h3>
            <h4 style={{ opacity: '80%' }}> Search for different roles and companies. </h4>
            <h3> 3. Keep the momentum going! </h3>
            <h4 style={{ opacity: '80%' }}> Stay connected to companies while you wait. </h4>
          </div>
          <div className="grid2" style={{ opacity: '90%' }}>
            <h3> Interested?</h3>
            <h4 style={{ opacity: '70%' }}> Sign up here to start your profile! If you have any questions or feedback, please contact us at talentbridger@gmail.com.</h4>
            <input
                type="text"
                onChange={(e) => this.setState({ firstname: e.target.value })}
                placeholder="First Name"
                value={this.state.firstname}
            />
            <input
                type="text"
                onChange={(e) => this.setState({ lastname: e.target.value })}
                placeholder="Last Name"
                value={this.state.lastname}
            />
            <input
                type="text"
                onChange={(e) => this.setState({ email: e.target.value })}
                placeholder="Email"
                value={this.state.email}
            />
            <input
                type="text"
                onChange={(e) => this.setState({ school: e.target.value })}
                placeholder="School"
                value={this.state.school}
            />
            <h6  style={{ opacity: '80%' }}> *Your data will only be shared with TalentBridger and the companies you choose to apply to.</h6>
            <button onClick={() => this.putDataToDB(this.state.message)}>
              Sign Up
            </button>
            <Modal
              isOpen={this.state.showModal}
              contentLabel="Minimal Modal Example"
              style={customStyles}
            >
              <div className="modal">
                <h3 style={{ opacity: '80%' }}> Thank you for your interest! Unfortunately, we have reached our capacity and are working hard to expand. We will get back to you as soon as possible!</h3>
              <button onClick={this.closeModal}>Close</button>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
