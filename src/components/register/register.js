import style from './register.css';
import Form1 from './form1'
import Form2 from './form2'
import { Routes, Route  } from 'react-router-dom';

export default function Register() {
    return (
        <div className="reg-container">
        <div className="registration-container">
          <div className="img-section">
            <img src="" alt="img.png" />
          </div>
          <div className="registration-section">
            <Routes>
              <Route path='/' element={<Form1 />} />
              <Route path='/form2' element={<Form2 />} />
            </Routes>
          </div>
        </div>
      </div>
    )
}