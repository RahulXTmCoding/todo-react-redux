import React, { Component, useState } from 'react';
import Modal from 'react-modal';
import DatePicker from "react-datepicker";
import ACTIONS from "../todoredux/action";
import { connect } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    height                : '40vh',
    borderRadius          : '20px',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
   
  }
};


const AddModal=(props)=>{

    const [name,setName]=useState("");
    const [date,setDate]=useState("");


    const create=()=>{


      if (!/[^a-zA-Z]/.test(name))
      {
        alert("Task Name should not contain any number or special character")
        return;
      }

       const item={
           name,
           date,
       }
       console.log(item);
        props.createItem(item)
        setName("")
        setDate('');
        props.close();
    }

return (
    <Modal
          isOpen={props.isOpen}
          onAfterOpen={props.afterOpen}
          onRequestClose={props.close}
          style={customStyles}
          contentLabel="Create Todo"
          overlayClassName="Overlay"
        >

         <div className='modals'>
             <div className='modalItem'>
                 <label for='name'>Name of Task</label>
            <input className='inputs' name='name' placeholder='' value={name} onChange={(e)=>setName(e.target.value)} />
    </div>
         
         <div className='modalItem'>
         <label for='date'>Date</label>
                <DatePicker
                popperClassName="calendar-popout"
               
                popperModifiers={{
                  offset: { enabled: true, offset: '5px, 10px' },
                  preventOverflow: {
                    enabled: true,
                    escapeWithReference: false,
                    boundariesElement: 'viewport'
                  }
                }}
                isClearable={true}
               
                className='inputs' selected={date} onChange={date => setDate(date)} />
</div>
            <button className='modalButton' type='button' onClick={create}>Create Todo</button>
           
          </div>
        </Modal>
)
}

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch => ({
  createItem: item => dispatch(ACTIONS.createItem(item)),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddModal);