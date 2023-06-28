import toast from '../Redux/Pictures/toast.jpg';
import greekSalad from '../Redux/Pictures/greekSalad.jpg';
import milkShake from '../Redux/Pictures/milkShakeForHome.jpg';
import cheeseCake from '../Redux/Pictures/cheeseCake.jpg';
import logo from '../Redux/Pictures/logo.jpg';


function Home() {


return (
	<>
	
	<div className = "gallery homeBody" >
		
		<img src={toast}></img>
  		<img src={milkShake} alt="The sea"></img>
  		<img src={cheeseCake} alt="The sea"></img>
  		<img src={greekSalad} alt="The sea"></img>
  		<img src={logo} alt="a man looking at the sea"></img>
	</div>




	</>

);

}

export default Home;