import PropTypes from 'prop-types';
import Item from './Item';
import { useEffect, useState } from 'react';
import NoteService from '../services/ParticipantService';

const List = ({participants, getAll, loader}) => {
  useEffect(() => {
    const getParticipants = async () => {
      try {
        loader(true);

        const data = await NoteService.getAll();
        const notesAll = data.reverse();

        getAll(notesAll);
      }catch (error){
        window.alert(`Error Occurred: ${error.message}`);
      } finally {
        loader(false);
      }
    };
    getParticipants();
  }, []);
  


  return (
    <>
      {participants &&
        participants.map(participant => (
          <Item
            participant={participant}
            key={participant.id}></Item>
        ))}
    </>
  );

        }
export default List;

List.propTypes = {
  participants: PropTypes.array,
};
