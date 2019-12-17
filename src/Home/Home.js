import React, { Component } from 'react';
import './Home.scss'


class Home extends Component {
  render() {
    return (
      <React.Fragment>

        {/* Company container  */}
      <div class="jumbotron text-center">
     
      <h2>Solutions For Better Care, Enhanced Safety And Independent Living</h2> 
       
    </div>

   
      {/* About part  */}
      <div class="container-fluid">
      <div class="row">
        <div class="col-sm-8">

          
          <h2>About Meddico Trip..</h2>

          <p>We provide professional, non-emergency transportation for elderly and disabled individuals,
            <br/> who want to travel to their destination safely and in a timely manner. 
            <br/>If you or your loved ones need compassionate and prompt drivers of wheelchair accessible taxis, you can book your next trip with us.</p>
         
        </div>
      
      </div>
    </div>

    {/* services  */}

<div class="container-fluid text-center bg-grey">
    <h2>Our Services</h2>
    <h4>We can accommodate most needs, including:</h4>
    <br/>
    <div class="row text-center">
              <div class="col-sm-4">
                        <div class="thumbnail">
                          <img src="https://img1.wsimg.com/isteam/stock/WVeNQYA" alt="wheelchair " />
                          <p><strong>Special Needs</strong></p>
                          <p>24/7 transportation for passengers with crutches, wheelchairs, and other medical necessities. </p>
                        </div>
              </div>
              <div class="col-sm-4">
                          <div class="thumbnail">
                            <img src="https://images.squarespace-cdn.com/content/v1/5a679d4df6576ee0d0f1d817/1568360323876-TOADS9B8SDH3DEZACZYU/ke17ZwdGBToddI8pDm48kFmfxoboNKufWj-55Bgmc-J7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iXS6XmVv7bUJ418E8Yoc1hjuviiiZmrL38w1ymUdqq4JaGeFUxjM-HeS7Oc-SSFcg/shutterstock_627682832.jpg" alt="New York" />
                            <p><strong>Exceptional Transportation</strong></p>
                            <p>All of our cars are handicapped accessible/wheelchair accessible with lift capacity of up to 800 pounds.</p>
                          </div>
              </div>
                <div class="col-sm-4">
                          <div class="thumbnail">
                            <img src="https://www.unescap.org/ageing-asia/sites/default/files/field/field_image/database/CJK_care_123rf_5.jpg" alt="San Francisco"/>
                            <p><strong>One or two Assistance</strong></p>
                            <p>You or your loved one can travel securely with peace of mind knowing that they’re in the hands of an expertly trained driver</p>
                          </div>
                </div>
  </div>
</div>

{/* Packages  */}

<div class="container-fluid">
   <div class="text-center">
     <h2>Packages</h2>
     <h4>Choose a payment plan that works for you</h4>
   <br/>
   </div>
   <div class="row">
     <div class="col-sm-4">
       <div class="panel panel-default text-center">
         <div class="panel-heading">
           <h1>10 Trips</h1>
         </div>
         <div class="panel-body">
             <p>+ Wheelchair </p>
             <p>Stretcher Transport</p>
             <p>Assistance</p>
             <p><strong>Endless</strong>limit</p>
         </div>
         <div class="panel-footer">
           <h3>$180</h3>
       
         </div>
       </div>
     </div>
     <div class="col-sm-4">
       <div class="panel panel-default text-center">
         <div class="panel-heading">
           <h1>25 Trips</h1>
         </div>
         <div class="panel-body">
             <p>+ Wheelchair </p>
             <p>Stretcher Transport</p>
             <p>Assistance</p>
             <p><strong>Endless</strong>limit</p>
         </div>
         <div class="panel-footer">
           <h3>$350</h3>
          

         </div>
       </div>
     </div>
    <div class="col-sm-4">
       <div class="panel panel-default text-center">
         <div class="panel-heading">
           <h1>30 Trips</h1>
         </div>
         <div class="panel-body">
           <p>+ Wheelchair </p>
           <p>Stretcher Transport</p>
           <p>Assistance</p>
         
           <p><strong>Endless</strong>limit</p>
         </div>
         <div class="panel-footer">
           <h3>$430</h3>
         
         </div>
       </div>
     </div>
   </div>
 </div>

 
    </React.Fragment>
    );
  }
}

export default Home;
