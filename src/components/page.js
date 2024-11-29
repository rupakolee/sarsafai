import style from './style.css';

export default function Page() {
    return (
        <div className="home">
        <div className="home-container">
        <div className="home-container-info">
          <h1>KMC Waste Management System</h1>
          <button>See More</button>
        </div>
      </div>
      <div className="about-sec">
      <div className="about-sec-header">
        <h1>About the landfill site</h1>
      </div>
      <div className="about-sec-details">
        <div className="small-info">
          <div className="about-sec-cont about-img">
            <img src="" alt="landfill_img" />
          </div>
          <div className="about-sec-cont img-info">
            <p>Contains info about landfill site</p>
          </div>
        </div>
        <div className="about-sec-cont brief-info">
            <p>Here comes the brief info of landfill site</p>
        </div>
      </div>
    </div>
        </div>
    )
}