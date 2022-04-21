import React, { useEffect, useState } from 'react';
import colRef, { custRef } from './fire';
import { db } from './fire';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import {
    getDocs,collection,doc
  } from 'firebase/firestore'
import './planscreen.css'
// import userSlice from './features/userSlice';
import {loadStripe} from '@stripe/stripe-js'

// sk_test_51KP5esSGvCibiPqk1jN0uuVwoRL4TS8w64lVDVAp3kaFP76jKu4b2ZFhLarp6uxp9vMwMzXAtLQ9iWvrw71Fj9U500eweLjt3J

export default function Plan(){
  
  const user = useSelector(selectUser)
const[products,setProducts]=useState([])



useEffect(()=>{
  getDocs(colRef).then((snapshot)=>{
    let prod = {}
    snapshot.docs.forEach(async(pdoc)=>{
      prod[pdoc.id]=pdoc.data();
      const priceS = await getDocs(collection(pdoc.ref, "prices"));
      priceS.docs.forEach(price=>{
        prod[pdoc.id].prices = {
          priceId:price.id,
          priceData:price.data()
        }
      })
    })
    setProducts(prod)
  })
  
},[])
console.log(products);
async function loadCheckOut(priceId){
  const getDoc = await collection(db,'customers').doc(user.uid).collection("checkout_session").add({
    priceId:priceId,
    success_url:window.location.origin,
    cancel_url:window.location.origin
  });
  getDoc.onSnapshot(async (s)=>{
    const {error,session_id} = s.data()
    if(error){
      alert(`An error occured:${error.message}`);
    }
    else if(session_id){
      const stripe = await loadStripe('pk_test_51KP5esSGvCibiPqkt9QC5Jz0dB6IVMJyurI1s0HLcBIUZfm6vBUQvQBqNNv9nlqjExDkODX45SKMYh3VlCoaDam200rE2THSJd')
        stripe.redirectToCheckout({session_id})
    }
  })
} 
//  async function loadCheckOut(price_id){
//   const stripe = await loadStripe('pk_test_51KP5esSGvCibiPqkt9QC5Jz0dB6IVMJyurI1s0HLcBIUZfm6vBUQvQBqNNv9nlqjExDkODX45SKMYh3VlCoaDam200rE2THSJd');
//   stripe.redirectToCheckout({

//     items: [
//       {id: price_id, quantity: 1}
//     ],
//     successUrl: window.location.origin,
//     cancelUrl: window.location.origin
//   }).then((result) => {
//     console.log(result)
//   }); 
// }

return(
  <div className='plan_screen' >
    {Object.entries(products).map(([productId,productData])=>{
      return(
        <div className="plan_screen_plans">
          <div className="plan_info">
          <h5>{productData.name}</h5>
          <h6>{productData.description}</h6>
       </div>
          <button onClick={()=>loadCheckOut(productData.prices.priceId)}>Subscribe</button>
          
        </div>
      )
    })}
  </div>
)  

}

// when using Stripe when a user checkouts, then starts stripe checkout session (its all doing in background processing)