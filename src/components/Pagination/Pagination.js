import React from 'react';
import Translate from '../../components/Translate/Translate';
import {Button} from 'react-bootstrap';

const Pagination = ({nextHandler, prevHandler}) => {
    return (
        <div title="PaginationTitle">
           { prevHandler && <Button className="btn mr-1" onClick={prevHandler} variant="info"> 
            <Translate turkish="Önceki" english="Prev"/>
            </Button>
           }
            {nextHandler && <Button className="btn" onClick={nextHandler} variant="info">
            <Translate turkish="Sonraki" english="Next"/>
            </Button>
            }
        </div>
    )
}

export default Pagination
