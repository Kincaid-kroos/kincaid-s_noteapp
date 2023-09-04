import './Footer.css';


const time = new Date();
const year = time.getFullYear();

const FooterComponent = () => {




 return (
<div className='footercss text-center text-dark'>
<footer> {year}©Copyright: All rights reserved</footer>

</div>



 );



}
export default FooterComponent;