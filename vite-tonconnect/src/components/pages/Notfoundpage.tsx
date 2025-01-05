import { Link } from "react-router";
import './Pagestyles.css';

const Notfoundpage = () =>{
   return (
      <div className="page">
         Trubleshooting! Go <Link to="/">home</Link>
      </div>
   )
}

export {Notfoundpage};