import { Link } from 'react-router-dom';

export default function Form1() {
    return (
        <form>
            <div className="registration-panel">
              <h1>Registration</h1>
              <div className="registration-field">
                <div className="registration-field-left">
                  <div className="fullname input-field">
                    <label for="fullname">Full Name</label>
                    <input type="text" name="fullname" />
                  </div>
                  <div className="Address input-field">
                    <label for="Address">Address</label>
                    <input type="text" name="Address" />
                  </div>
                  <div className="Email input-field">
                    <label for="Email">Email</label>
                    <input type="email" name="Email" />
                  </div>
                  <div className="Password input-field">
                    <label for="Password">Password</label>
                    <input type="password" name="Password" />
                  </div>
                </div>
                <div className="registration-field-right">
                  <div className="Municipality input-field">
                    <label for="municipality">Select Your Municipality</label>
                    <select name="" id="">
                      <option value="1"></option>
                      <option value="1">Nagarjun-1</option>
                      <option value="1">Nagarjun-2</option>
                      <option value="1">Nagarjun-3</option>
                      <option value="1">Nagarjun-4</option>
                    </select>
  
                  </div>
                  <div className="houseNumber input-field">
                    <label for="houseNumber">House Number</label>
                    <input type="text" name="houseNumber" />
                  </div>
                  <div className="PhoneNumber input-field">
                    <label for="PhoneNumber">Phone</label>
                    <input type="number" name="PhoneNumber" />
                  </div>
                  <div className="Retype Password input-field">
                    <label for="RetypePassword">Retype Password</label>
                    <input type="password" name="RetypePassword" />
                  </div>
                </div>
              </div>
              <div className="gender">
                <span>Gender:</span>
                <div className="genders">
                  <input type="radio" name="gender" value="Male" />Male
              <input type="radio" name="gender" value="female" />Female
              <input type="radio" name="gender" value="Other" />Other
                </div>
              </div>
              <Link to='/form2'><button id="next-step"><strong>Next Step -&gt;</strong></button></Link>       
            </div>
            </form>
    )
}