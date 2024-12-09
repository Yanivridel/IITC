import text_logo_light from './../assets/instagram-logo-text-light.png'
import text_logo_dark from './../assets/instagram-logo-text-light.png'

function Login() {

    const inputStyle = 'border p-0.5 text-sm font-normal p-2';
    const width = 'w-100 max-w-100';

    return (
        <div className={`border p-8 flex flex-col ${width}`}>
            <img src={text_logo_light} className='w-56 self-center' alt="logo"/>
            <form className='flex flex-col gap-2'>
                <input type='email' placeholder='Email' required className={inputStyle}/>
                <input type='password' placeholder='Password' required className={inputStyle}/>
                <button className='rounded-md bg-sky-400 text-white font-medium p-1'>Log in</button>
            </form>
        </div>
    )
}

export default  Login;