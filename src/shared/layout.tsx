import { useRef } from 'react';

import Footer from './footer';
import { LayoutStyled } from './layout-style';
import Header from './header';

type Props = {
    children: JSX.Element
};

const Layout = ({children}: Props) => {
    
  return <LayoutStyled>
            <Header />
            <div className='container'>
                {children}
            </div>
            <Footer />
        </LayoutStyled>;
};

export default Layout;
