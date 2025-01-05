import { useEffect, useState } from 'react';
import './App.css';
import { TonConnectButton, useTonConnectUI, ConnectedWallet } from '@tonconnect/ui-react';
import { Link, Route, Routes } from 'react-router';
import { Homepage } from './components/pages/Homepage';
import { Aboutpage } from './components/pages/Aboutpage';
import { Notfoundpage } from './components/pages/Notfoundpage';
import { Blogpage } from './components/pages/Blogpage';
import { useDispatch } from 'react-redux';
import { setWalletAddress } from './Redux/walletSlice';
import { FaHome, FaInfoCircle, FaBlog } from 'react-icons/fa';

function App() {

	const [, setWalletInfo] = useState<ConnectedWallet | null>(null);
  const [tonConnectUI] = useTonConnectUI();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = tonConnectUI.onStatusChange((wallet) => {
      if (wallet) {
        setWalletInfo(wallet as ConnectedWallet);


        dispatch(setWalletAddress(wallet.account.address));

        console.log('Кошелёк подключён:', wallet);
      } else {
        setWalletInfo(null);

        dispatch(setWalletAddress(null));

        console.log('Кошелёк отключён');
      }
    });

    return () => {
      unsubscribe();
    };
  }, [tonConnectUI, dispatch]);

  return (
    <div className='body'>
      <header className='header'>
        <TonConnectButton />
        <nav className='nav'>
          <Link to="/tg-mini-app"><FaHome /></Link>
          <Link to="/about"><FaInfoCircle /></Link>
          <Link to="/blog"><FaBlog /></Link>
        </nav>
      </header>
      {/* Роуты */}
      <Routes>
        <Route path='/tg-mini-app' element={<Homepage />} />
        <Route path='/about' element={<Aboutpage />} />
        <Route path='/blog' element={<Blogpage />} />
        <Route path='*' element={<Notfoundpage />} />
      </Routes>
    </div>
  );
}

export default App;
