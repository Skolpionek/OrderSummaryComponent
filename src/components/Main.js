import icon from "../assets/images/icon-music.svg"

function Main(){
   return (
      <main className="content bg-White d-flex column">
         <h1 className="title fs-300 ff-RedHat t-center clr-DarkBlue fw-900">Order Summary</h1>
         <p className='text-content fs-100 ff-RedHat t-center fw-500 clr-DesaturatedBlue'>
            You can now listen to millions of songs, audiobooks, and podcasts on any 
            device anywhere you like!
         </p>
         <div className="items d-flex aic">
            <img
               className="IconMusic" 
               src={icon}
               alt="Icon Music"
            />
            <div className="d-flex column jcc">
               <h3 className="fs-100 ff-RedHat clr-DarkBlue fw-900">Annual Plan</h3>
               <p className="fs-100 clr-DesaturatedBlue ff-RedHat">$59.99/year</p>
            </div>
            <a href="#" className="link fs-100 ff-RedHat">Change</a>
         </div>
         <button className="primary-btn btn bg-BrightBlue fw-700 clr-White d-block fs-100 ff-Redhat">Proceed to Payment</button>
         <button className="btn bg-White clr-DesaturatedBlue fw-700 d-block fs-100 ff-Redhat">Cancel Order</button>
      </main>
   )
}
export default Main;