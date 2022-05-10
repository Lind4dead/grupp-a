// import {useState} from 'react'
// import ImgModal from '../components/Modal/ImgModal'

const ProductDetails = () => {

  // const [showModal, setShowModal] = useState(false)

  return (
   <>
    <section>
      <div className="container pt-4 pt-md-5 ">
        <div className="row justify-content-center mb-3">
          <div className="col-md-12 col-xl-11">
            <div className='d-none d-md-block mb-2'>
              <small className='h6 fw-light me-md-3'>Produkter</small>
              <i className="fa-solid fa-angle-right me-md-3"></i>
              <small className='h6 fw-light me-md-3'>Likör</small>
              <i className="fa-solid fa-angle-right me-md-3"></i>
              <small className='h6 text-decoration-underline'>Baileys</small>
            </div>
            <small className='d-md-none fs-5 mb-1'><i className="fa-solid fa-left-long me-2 fs-4"></i>Tillbaka</small>
            
            
            
            <div className="card shadow-1 rounded-5">
              <div style={customBorder} className="card-body p-sm-4 p-md-4 rounded-5">
                <div className="row">
                  <div className="col-10 col-md-5 col-lg-4 col-xl-4 mx-auto mt-md-4 me-lg-5  mb-4 p-md-0">
                    <div className="text-center bg-image">
                      <img src="https://sb-product-media-prod.azureedge.net/productimages/24447454/24447454_400.png"
                        className="w-25 img-fluid img-responsive cursor-pointer"
                        alt='liquor'
                        role='button'
                        type='button'

                        />
                    </div>
                  </div>
                  <div className="col-12 col-md-7 col-xl-7 mt-md-3 ms-xl-4 pe-md-3 pe-xl-4 me-lg-4 me-xl-2">
                    <div className='text-center text-md-start'> 
                      <div className="d-flex justify-content-between flex-column align-center">
                        <h3 className='mb-1'>Baileys</h3>
                        <div className='d-md-flex justify-content-between align-center mb-1'>
                          <small className='fs-6 fw-light'>Strawberries and Cream</small>
                          <small className='fs-6 d-none d-md-block fw-light'>Flaska 700 ml - 17%</small>
                        </div>
                      </div>
                    </div>
                  
                    <div className='border-bottom d-md-none w-75 m-auto'></div>
                    <div className="w-100 m-auto d-flex justify-content-around align-center p-1 border-bottom">
                      <small className='fw-lighter d-md-none text-end p-1'>Flaska 700 ml - 17%</small>
                    </div>
                    
                    
                    
                      <p className="mb-3 mb-md-0 mt-2 mb-md-3">
                      Gräddig, mycket söt smak med inslag av jordgubbar, vit choklad och vanilj. Serveras kyld som avec, eller med is.
                      </p>
                          
                    <div className='d-flex justify-content-between align-items-end mb-3'>
                      <small className='fw-lighter'>Likör</small>

                      <small className='fw-light small'>Tillverkad i Irland</small>
                    
                    </div>
                      
                    <div className="d-flex flex-row justify-content-between align-items-end">
                      <h4 style={customText} className="mb-1 fw-bold fs-2 me-1">249:-</h4>
                      <h6 className="fw-lighter small align-items-end">355,71 kr/l</h6>
                    </div>
                    <div className='border-bottom mb-2 '></div>
                    
                    <div className="d-grid col-12 col-md-10 col-lg-8 mx-auto gap-2">
                      <button 
                        className="btn customBtn rounded-5 btn-md btn-dark mt-md-3 me-md-0 mt-2" 
                        style={customBtn}
                        type="button">Lägg till i kundvagn</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* { showModal && <ImgModal setShowModal={setShowModal} />} */}

   </>
  )
}

export default ProductDetails

const customBtn = {
  backgroundColor: '#A1C181',
  color: '#fff'
}

const customText = {
  color: '#FE7F2D'
}
const customBorder = {
  borderRadius: '1rem',
  border: '2px solid #FE7F2D',
}


