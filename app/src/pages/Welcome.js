import { Link } from "react-router-dom";

import Logo from '../assets/LandrupLogo.svg'

const WelcomePage = () => {
    return (  
            <div className="w-screen h-screen bg-welcome-splash bg-no-repeat bg-cover bg-center flex flex-col justify-between">
                <div className='welcome_container flex flex-col items-baseline translate-y-[28rem]'>
                    <img src={Logo} alt=""/>
                </div>
                    <div className='flex justify-center -translate-y-24'>
                        <Link to="/activities">
                            <button className='bg-landrupPurple text-white py-4 px-28 rounded-xl opacity-0 animate-fadeIn'>Kom i gang</button>
                        </Link>
                    </div>
            </div>
    );
}
 
export default WelcomePage;