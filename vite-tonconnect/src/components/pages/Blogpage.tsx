import './Pagestyles.css';
import { useSelector } from 'react-redux';
import { RootState } from './../../Redux/store';

const Blogpage = () =>{

   const walletAddress = useSelector((state: RootState) => state.wallet.address);

   return (
      <div className="page">
         <p>Blog</p>
         <p className='link'> {walletAddress}</p>
      </div>
   )
}

export {Blogpage};