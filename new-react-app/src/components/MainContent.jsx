import ReactImage from '../assets/imageasset.png';
import './MainContent.css';

export default function MainContent() {
  return (
    <div className='main-content'>
      <h2>About React</h2>

      <div className='main-content-inner-wrapper'>
        <div className='main-content__left'>
          <p>React is a popular JavaScript library for building dynamic user interfaces. Developed by Facebook, it uses a component-based architecture, making it easy to create reusable UI elements. React's virtual DOM efficiently updates only the parts of the page that change, improving performance. It's widely used for building fast, scalable, and interactive web applications.</p>
        </div>

        <div className="main-content__right">
          <img src={ReactImage} alt="" />
        </div>
      </div>
    </div>
  )
}
