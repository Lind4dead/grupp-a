import React from 'react'
import BubbleMenu from '../components/DiscoverByCategory.jsx/BubbleMenu'


const HomeView = () => {
  return (
    <div>
      <BubbleMenu />
      <div className='mask1'>
        <img src="https://cdn.systembolaget.se/4a55f2/globalassets/dryck-och-mat/dryckesplaneraren/toppbild-dukning.jpg" alt="Flowers in Chania" width="100%" height="100%"></img>
      </div>


        {/* <!-- Gallery --> */}
    <div className='container d-none d-sm-block'>
      <div className="bildrad1">
        <div className="col-6 me-2 card ">
          <img
            src="https://cdn.systembolaget.se/499326/globalassets/dryck-och-mat/kombinera-dryck-och-mat/50-vin-till-grillad-mat.jpg?w=2000"
            className="w-100 shadow-1-strong"
            alt="Grillad sparris"
          />
          <div className="bild-box mask"><span className="box-titel">EN HET FRÅGA <p className="box-text">Vilken drink till grillat?</p></span></div>
        </div>

        <div className="col me-2 card">
          <img
            src="https://cdn.systembolaget.se/49632e/globalassets/dryck-och-mat/smakskolan/25-kaldolmar.jpg?w=320"
            className="w-100 shadow-1-strong"
            alt="Kåldolmar"
          />
           <div className="bild-box mask"><span className="box-titel">SMAKSKOLAN <p className="box-text">Kombinera sprit och mat</p></span></div>
        </div>

        <div className="col card">
          <img
            src="https://cdn.systembolaget.se/4a88c6/globalassets/dryck-och-mat/varldens-mat/25-italiensk2.jpg?w=320"
            className="w-100 shadow-1-strong"
            alt="Pasta"
          />
          <div className="bild-box mask"><span className="box-titel">CANNELONI MACARONI... <p className="box-text">Dryck till italiensk mat</p></span></div>
        </div>
      </div>

      <div className="bildrad2">
        <div className="col me-1 card">
          <img
            src="https://cdn.systembolaget.se/4a8786/globalassets/dryck-och-mat/varldens-mat/50-bahnmi.jpg?w=768"
            className="w-100 shadow-1-strong"
            alt="Klassisk Banh-mi smörgås ovanifrån"
          />
          <div className="bild-box mask"><span className="box-titel">LÄTT OCH HETT <p className="box-text">Dryck till vietnamesisk mat</p></span></div>
        </div>

         <div className="col ms-2 card">
          <img
            src="https://cdn.systembolaget.se/4a7d02/globalassets/dryck-och-mat/kombinera-dryck-och-mat/50-ost.jpg?w=320"
            className="w-100 shadow-1-strong"
            alt="Närbild på blandade ostar"
          />
          <div className="bild-box mask"><span className="box-titel">PECORINO? SHERRY FINO! <p className="box-text">Sprit till ost</p></span></div>
         </div>
      </div>
    </div>
      {/* <!-- Gallery --> */}


    </div>
  )
}

export default HomeView