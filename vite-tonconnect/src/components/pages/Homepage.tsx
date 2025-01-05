import './Pagestyles.css';
import { useSelector } from 'react-redux';
import { RootState } from './../../Redux/store';

const Homepage = () =>{
   
   const walletAddress = useSelector((state: RootState) => state.wallet.address);

   return (
      <div className="page">
        <p>Home</p>
        <p className='link'> {walletAddress}</p>
      </div>
   )
}

export {Homepage};