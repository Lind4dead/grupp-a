import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from '../store/actions/orderActions'
import { useEffect, useState } from 'react'
import UserOrderCard from '../components/UserOrderCard'


const UserOrdersView = () => {

  const dispatch = useDispatch()
  const { token, isAdmin } = useSelector(state => state.auth)
  const { data } = useSelector(state => state.orders)
  const [activeOrders, setActiveOrders] = useState([])
  const [historyOrders, setHistoryOrders] = useState([])


  useEffect(() => {
    setActiveOrders([])
    setHistoryOrders([])
    if(data) {
      data.map(order => {
        console.log(order)
        if(order.delivered === false) {
          setActiveOrders(state => ([
            ...state,
            order
          ]))
        } else {
          setHistoryOrders(state => ([
            ...state,
            order
          ]))
        }
      }

      )
    }
  },[data])


  useEffect(() => {
    if (token) {
      dispatch(getOrders(token, 'minaSidor'))
    }
  }, [dispatch, token, isAdmin])



  return (
    <div className='mt-5 container card py-5 rounded-7 shadow p-3 mb-5 bg-body rounded '>

      <NavLink to='/minaordrar' className='adminrubrik text-center mb-4 h3'>Mina Ordrar:</NavLink>

      <div className='ps-5 pe-5 d-flex flex-column '>
            <p className='ps-5 mt-3  text-start' >Aktiva ordrar: </p>
            <div className="d-flex ">
        <table className="table" >
          <thead className=''>
            <tr className='text-center'>
              <th className='text-center'scope="col">#</th>
              <th  scope="col">Ordernummer</th>
              <th scope="col">Pris</th>
              <th scope="col">Antal produkter</th>
            </tr>
          </thead>
          <tbody className=''>
            {
              activeOrders.map(order => <UserOrderCard key={order._id} order={order} />)
            }

            
          </tbody>
          </table>
          </div>

            <p className='ps-5 mt-5' >Levererade ordrar: </p>
        <table className=" table" >
          
          <thead className='align-items-center'>
            <tr>
              <th className='text-center' scope="col">#</th>
              <th className='text-center'scope="col">Ordernummer</th>
              <th className='text-center' scope="col">Pris</th>
              <th className='text-center' scope="col">Antal produkter</th>
            </tr>
          </thead>
          

          <tbody className=' '>
            {
              historyOrders.map(order => <UserOrderCard key={order._id} order={order} />)
            }

            

          </tbody>
          


        </table>
      </div>
    </div>


  )
}

export default UserOrdersView

