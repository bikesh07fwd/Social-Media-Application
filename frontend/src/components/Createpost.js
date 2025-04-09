import React, { useState } from 'react';
import Modal from 'react-modal';
import './Createpost.css';
import Preview from './preview';

export default function Createpost() {
  const [body, setBody] = useState('');
  const [image, setImage] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const postDetails = () => {
    console.log(image, body);
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'Moments');
    data.append('cloudname', 'cloudtee');
    fetch('https://api.cloudinary.com/v1_1/cloudtee/image/upload', {
      method: 'post',
      body: data,
    })
      .then((res) => res.json())
      .then((data) => console.log(data.url))
      .catch((err) => console.log(err));
  };

  const loadfile = (event) => {
    var output = document.getElementById('output');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function () {
      URL.revokeObjectURL(output.src); // free memory
    };
  };

  return (
    <div className='createpost'>
      <div className='post_header'>
        <h4 style={{ margin: '3px auto' }}>Create New Post</h4>
        <button id='post_btn' onClick={() => postDetails()}>
          Share
        </button>
      </div>
      <div className='main_div'>
        <input
          type='file'
          accept='image/*'
          onChange={(event) => {
            loadfile(event);
            setImage(event.target.files[0]);
          }}
        />
      </div>

      <div className='details'>
        <div className='card_header'>
          <div className='card_pic'>
            <img
              src='https://media.istockphoto.com/id/506608774/photo/successful-young-african-businessman.jpg?s=612x612&w=0&k=20&c=82Y2B5c3ZB4fnLIzQ_LyYP0p_CkZDnNOyd0j22yHKx8='
              alt=''
            />
          </div>
          <h5>Lucifer</h5>
        </div>
        <textarea
          type='text'
          placeholder='Write a caption...'
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        ></textarea>
        <div className='preview'>
          <button onClick={() => setModalIsOpen(true)}>Preview</button>
        </div>
      </div>

      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} className='Modal' overlayClassName='Overlay'>
        <Preview />
        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal>
    </div>
  );
}
