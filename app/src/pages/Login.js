const LoginPage = () => {
    return (  
        <div className="w-screen h-screen bg-welcome-splash bg-no-repeat bg-cover bg-center flex items-center justify-center">
            <div className="login_wrapper flex flex-col items-center bg-[#E1A1E9] bg-opacity-90 py-10">
              <div className="input_wrapper pb-8 px-10">
                <h1 className="text-white text-4xl pb-2">Log ind</h1>  
                <input className="outline-none p-2 mb-2 w-full" type="text" placeholder="brugernavn" />
                <input className="outline-none p-2 w-full" type="text" placeholder="adgangskode" />
              </div>
              <button className='bg-landrupPurple text-white py-4 px-20 rounded-xl'>Log ind</button>
            </div>
        </div>
    );
}
 
export default LoginPage;