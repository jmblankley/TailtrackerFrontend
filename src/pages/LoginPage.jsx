import emailIcon from '../assets/envelope.svg';
import key from '../assets/key.svg';
import '../styles/LoginPage.css'

const LoginPage = () => {
	return (     
		<div className='loginPage container-fluid d-flex justify-content-center align-items-center justify-content-lg-around '>
			<div className='loginForm'>
				<h1 className='display-2 fw-bolder'>Login</h1>
				<p className='fs-5 mb-4'>Please sign in to continue.</p>       
				<form>
					<div className='customInput mb-3 py-2 px-3'>
						<p className='text-black mb-1 '>Email</p>
						<img src={emailIcon} alt="envelope"/>
						<input type="text" placeholder='email@email.com' className='px-2'/>
					</div>
					<div className='customInput mb-3 py-2 px-3'>
						<p className='text-black mb-1 '>Password</p>
						<img src={key} alt="envelope"/>
						<input type="text" placeholder='***********' className='px-2'/>
					</div>
				</form>
				<div className='d-flex justify-content-end mt-3'>
					<button className='py-2 px-4'>Login</button>
				</div>
			</div>
			<div className='signUpHero'>
				<h1 className='display-2 fw-bolder text-white mb-5'>New here?</h1>
				<p className='fs-5 text-white mb-5'>Ready, Set, Fetch! Sign up for Tail-Wagging Triumphs!</p>
				<button className='py-2 px-4'>Sign Up</button>
			</div>
			<div className='fixed-bottom text-center mb-4 fs-9 text-black'>
				<p className='mb-1 d-lg-none'>Dont have an account? Sign up <a href="">here.</a></p>
				<a className='adminLoginLink' href="">Adminstrator Login</a>
			</div>
		</div> 
	);
}
 
export default LoginPage;