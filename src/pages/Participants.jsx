import List from './../components/List';
import Empty from './../components/Empty';
import Loader from '../components/Loader';
import { useEffect, useState } from 'react';
import NoteService from '../services/ParticipantService';

const Participants = () => {

  const [load, setLoad] = useState();
  const [participants, setParticipants] = useState([])
  const getAll = (participants) => {
    setParticipants(participants);
  };

  const loader = (state) => {
    setLoad(state);
  };

  return (
    <>
      <div className="row">
        <div className="col">
          <List participants = {participants} getAll = {getAll} loader={loader} />
          <Empty notes={[]} />
          {load && <Loader />}
        </div>
      </div>
    </>
  );
};

export default Participants;
