import './Main.css'
import girl from '../../images/girl-hands.jpg'
export default function Main() {
    return (
        <main>
            <div>
                <img className='img' src={girl} alt="girl hands" />
            </div>
        </main>
    )
}