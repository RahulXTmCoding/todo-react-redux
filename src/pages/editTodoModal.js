import React, { Component, useState, useEffect } from 'react';
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
    bottom                : 'auto',
    height                : '40vh',
    borderRadius          : '20px',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


const EditModal=(props)=>{

    
    const [name,setName]=useState("");
    const [date,setDate]=useState("");


useEffect(()=>{
    if(props.item)
    {
    setName(props.item.description)
    setDate(props.item.date);
    }
},[])
const edit=()=>{
  if (!/[^a-zA-Z]/.test(name))
  {
    alert("Task Name should not contain any number or special character")
    return;
  }

    let item=props.item
    item.description=name;
    item.date=date
     props.editItem(item);
     props.close()
}

    return (
    <Modal
          isOpen={props.isOpen}
          onAfterOpen={props.afterOpen}
          onRequestClose={props.close}
          style={customStyles}
          contentLabel="Edit Todo"
          overlayClassName="Overlay"
        >
 
       
 <div className='modals'>
             <div className='modalItem'>
                 <label for='name'>Name of Task</label>
            <input className='inputs' name='name' placeholder='' value={name} onChange={(e)=>setName(e.target.value)} />
    </div>
         
         <div className='modalItem'>
         <label for='date'>Date</label>
                <DatePicker className='inputs' selected={date} onChange={date => setDate(date)} />
</div>
            <button className='modalButton' type='button' onClick={edit}>Edit Todo</button>
           
          </div>
        </Modal>
)
}

const mapStateToProps = state => ({
  
  });
  
  const mapDispatchToProps = dispatch => ({
    editItem: item => dispatch(ACTIONS.editItem(item)),
  
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditModal);