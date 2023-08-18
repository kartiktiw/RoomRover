import "./featuredProperties.css"

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
          <img
            src="https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2019/10/Hotel-Radisson-Blu-Plaza-Delhi.jpg?resize=800%2C458&ssl=1"
            alt=""
            className="fpImg"
          />
          <span className="fpName">Radisson Blu</span>
          <span className="fpCity">New Delhi Paschim Vihar</span>
          <span className="fpPrice">Starting from ₹6,345</span>
          <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
          </div>
        </div>
        <div className="fpItem">
          <img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/07/d4/00/togbalcony.jpg?w=700&h=-1&s=1"
            alt=""
            className="fpImg"
          />
          <span className="fpName">The Oberai Grand</span>
          <span className="fpCity">Calcutta</span>
          <span className="fpPrice">Starting from ₹8,079</span>
          <div className="fpRating">
            <button>9.3</button>
            <span>Exceptional</span>
          </div>
        </div>
        <div className="fpItem">
          <img
            src="https://www.tourmyindia.com/blog//wp-content/uploads/2021/01/Top-Luxury-Hotels-in-Mumbai.jpg"
            alt=""
            className="fpImg"
          />
          <span className="fpName">The Taj Mahal Palace</span>
          <span className="fpCity">Mumbai</span>
          <span className="fpPrice">Starting from ₹21,959</span>
          <div className="fpRating">
            <button>9.3</button>
            <span>Excellent</span>
          </div>
        </div>
        <div className="fpItem">
          <img
            src="https://imgcld.yatra.com/ytimages/image/upload/t_seo_Hotel_w_930_h_550_c_fill_g_auto_q_40_f_jpg/v1433163229/Domestic%20Hotels/Hotels_Hyderabad/Novotel%20Hyderabad%20(Airport)/Facade.jpg"
            alt=""
            className="fpImg"
          />
          <span className="fpName">Novotel Hyderabad AirPort </span>
          <span className="fpCity">Hyderabad</span>
          <span className="fpPrice">Starting from ₹15,689</span>
          <div className="fpRating">
            <button>8.5</button>
            <span>Excellent</span>
          </div>
      </div>
    </div>
  )
}

export default FeaturedProperties
