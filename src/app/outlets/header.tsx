"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import LanguageSelector from "../components/languageSelector";

const Header = () => {
  

    const [mobileMenu, setMobileMenu] = useState(false);
    const [mobileSubMenu, setMobileSubMenu] = useState('');
    const { t } = useTranslation();
 
    const handleMenu = () => {
        setMobileMenu(false);
        setMobileSubMenu('');
    };
    // use effect for smooth scroll to sections
    useEffect(() => {
        const handleHashChange = () => {
            const id = window.location.hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            setMobileMenu(false);
            setMobileSubMenu('');
        };

        window.addEventListener('hashchange', handleHashChange);

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);



    return (
        <header
            className='fixed top-2 z-20 w-full h-[100px] flex items-center border-b border-white/50 '
            id='menu'
        > <div className="fixed  top-0  h-2 bg-[#2f4eb3] w-full"></div>
            <div className="relative  flex justify-between items-center w-full global-container ">
              
                <Link href="/">
                    <Image
                        src="/logo-standard.png" // Your image path (must be inside /public)
                        alt="logo-ne-fi"
                        width={120} // Adjust size as needed
                        height={40}
                        id="logo"
                        className="object-contain" // Optional Tailwind classes
                    />
                </Link>
                <div
                    onClick={handleMenu}
                    className={`menu-overlay ${mobileMenu && 'active'}`}
                />
                <nav
                    className={`menu-block ${mobileMenu && 'active'}`}

                >
                    <ul className="site-menu-main">
                        <Link onClick={handleMenu} href="/" ><li>{t('Home')}</li></Link>
                        <Link onClick={handleMenu} href="/" ><li>{t('Products')}</li></Link>
                        <Link onClick={handleMenu} href="/" ><li>{t('Company')}</li></Link>
                        <Link onClick={handleMenu} href="/" ><li>{t('Contact')}</li></Link>
                       <li><LanguageSelector /></li>

                        <li>
                            <div className={`mobile-menu-head ${mobileSubMenu && 'active'}`}>
                                <div onClick={handleMenu} className='mobile-menu-close rotate-[-90deg]'>
                                    &#10095;
                                </div>
                            </div>
                        </li>

                    </ul>
                </nav>
                <div className={`mobile-menu-head ${mobileSubMenu && 'active'}`}>
                    <div onClick={handleMenu} className='mobile-menu-close rotate-[-90deg]'>
                        &#10095;
                    </div>
                </div>
                <div className='block lg:hidden'>
                    <button
                        onClick={() => setMobileMenu(true)}
                        className={`mobile-menu-trigger `}
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
