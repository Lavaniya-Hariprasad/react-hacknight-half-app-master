import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaRotate, FaMeteor } from 'react-icons/fa6';
import Loader from '../components/Loader';
import {v4 as uuid } from 'uuid';
import NoteService from '../services/ParticipantService';

const Register = () => {

  const [load, setLoad] = useState();
  const loader = (state) => {
    setLoad(state);
  };
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [git, setGit] = useState('');

  const handleFullName = e => setFullName(e.target.value);
  const handleEmail = e => setEmail(e.target.value);
  const handleCountry = e => setCountry(e.target.value);
  const handleGit = e => setGit(e.target.value);

  const handleSubmit = async event => {
    try {
      event.preventDefault();

      loader(true);

      if (!fullName || !email || !country || !git) {
        window.alert('Please fill the form');
        return;
      }

      const newParticipant = {
        id: uuid(),
        fullName: fullName,
        email: email,
        country: country,
        gitHubLink: git,
      };

      await NoteService.register(newParticipant);
    }
    catch (error) {
      window.alert(`Error Occurred: ${error.message}`);
    } finally {
      //setParticipant('');
      loader(false);
    }
  };
  

  return (
    <>
      {load && <Loader />}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Full Name"
            value={fullName}
            onChange={handleFullName}
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Email"
            value={email}
            onChange={handleEmail}
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Country"
            value={country}
            onChange={handleCountry}
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="GitHub"
            value={git}
            onChange={handleGit}
          />
        </div>
        <button className="btn btn-danger me-2" type="submit">
          <FaMeteor /> Register
        </button>
        <button className="btn btn-dark" type="submit">
          <FaRotate /> Reset
        </button>
      </form>
    </>
  );
};

export default Register;

Register.propTypes = {
  add: PropTypes.func,
  loader: PropTypes.func,
};
