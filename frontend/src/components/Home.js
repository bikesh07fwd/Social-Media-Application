import React from 'react'
import './Home.css'

export default function Home() {
  return <div className='home'>
      <div className='card'>
        <div className='card_header'>
          <div className='card_pic'>
            <img src="https://media.istockphoto.com/id/506608774/photo/successful-young-african-businessman.jpg?s=612x612&w=0&k=20&c=82Y2B5c3ZB4fnLIzQ_LyYP0p_CkZDnNOyd0j22yHKx8=" alt="" className="post_profile"/>
          </div>
          <h5>Lucifer</h5>
        </div>
        <div className='card_post'>
          <img src="https://media.istockphoto.com/id/472201433/photo/hungary-vs-portugal.jpg?s=1024x1024&w=is&k=20&c=jjr62ywFzBj4lM2g22q5_PukKdXZDhnGah7is7gqWEg=" alt=""/>
        </div>
        <div className='card_post_content'>
          <span className="material-symbols-outlined">favorite</span>
          <p>1 Like</p>
          <p>Skill de ronaldoo..</p>
        </div>
        <div className='add_comnt'>
          <span className="material-symbols-outlined">mood</span>
          <input type='text' placeholder='Add a comment '/>
          <button className='comment'>Post</button> 
        </div>
      </div>
    </div>
  
}
