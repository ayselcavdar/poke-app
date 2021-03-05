import React from 'react';
import Translate from '../Translate/Translate';
import { Col, ProgressBar } from 'react-bootstrap';

const Status = ({
  hp,
  defence,
  attack,
  infoHpEn,
  infoDefEn,
  infoAttackEn,
  infoHpTr,
  infoDefTr,
  infoAttackTr,
}) => {
  return (
    <>
      <Col className='border-dark rounded p-2 m-1'>
        <p className='text-center'>
          <b>
            <Translate turkish={infoHpTr} english={infoHpEn} />
          </b>
        </p>
        <ProgressBar variant='danger' animated now={hp} label={hp} />
      </Col>
      <Col className='border-success rounded p-2  m-1'>
        <p className='text-center'>
          <b>
            <Translate turkish={infoDefTr} english={infoDefEn} />
          </b>
        </p>
        <ProgressBar variant='primary' animated now={defence} label={defence} />
      </Col>
      <Col className=' rounded border-danger p-2  m-1'>
        <p className='text-center'>
          <b>
            <Translate turkish={infoAttackTr} english={infoAttackEn} />
          </b>
        </p>
        <ProgressBar variant='warning' animated now={attack} label={attack} />
      </Col>
    </>
  );
};

export default Status;