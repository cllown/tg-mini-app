import './Pagestyles.css';
import { useSelector } from 'react-redux';
import { RootState } from './../../Redux/store';

const Aboutpage = () =>{

   const walletAddress = useSelector((state: RootState) => state.wallet.address);

   return (
      <div className="page">
         <p>About</p> 
         <p className='link'> {walletAddress}</p>
      </div>
   )
}

export {Aboutpage};