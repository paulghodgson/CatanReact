import React from 'react'
import Modal from 'react-modal';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

  const headerStyle    = { 
    background: "#2a748c",
    color: "#c2e6f2",
    textAlign: "center",
    padding: 15  
      
};

export default function NewYear(props) {
    return (
       <Modal
            isOpen={props.isNewYear}     
            style={customStyles}      
            contentLabel="newYear">
           
                <h2 style={headerStyle}>Happy New Year</h2>
                <div style={{display: 'flex',   marginTop: 5}}>
                <div style={{paddingRight: 15,color: "#263940",}} >Whatever the new year text is, it should go in here</div>
                <button onClick={() => props.janTheFirst()} style={{padding: 15, display: "inline-block", border:"none", flex: "1",background: "#c2e6f2", color: "#263940", fontSize:18}}>close</button>
            </div>
        </Modal>
    )
}
