import React from 'react';

function MajorSection() {
  return (
    <div className='major'>
      <div className="container d-flex">
        <div className="row">
          <div className="col-md-6 leftside">
            <div className="left-section">
              <h1 className="left1">ＭＩＮＤＥＡＳＥ</h1>
              <p>Find solace and support with our expert mental health consultants at MindEase. We offer personalized counseling sessions and compassionate guidance to help you navigate life's challenges.</p>
              <p>Our dedicated team is committed to promoting mental wellness and empowering individuals to live their best lives. Take the first step towards healing and join our community today.</p>
              <div className='button1'>
                {/* <button type="button" className="btn btn-success" style={{padding: '10px 20px'}}>Success</button>
                <button type="button" className="btn btn-danger" style={{padding: '10px 20px'}}>Danger</button> */}
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div className="right-section">
              <img src="https://imgs.search.brave.com/CeirqJzbOerF6XeDEUMq38U3uKFOZwAQOGmkrVyFBbk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ2/MTE4OTk1OS9mci9w/aG90by91bi1tJUMz/JUE5ZGVjaW4tcmVu/Y29udHJlLXVuLWNv/bGwlQzMlQThndWUu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PXNTN1JUNDZjS00z/cjNielQxT25MSnRI/aXk1RXpOZ3B6b1lI/dzJNUnJ3WTA9" alt="Image" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MajorSection;
