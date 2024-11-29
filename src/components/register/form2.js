export default function Form2() {
    return (
       <div>
       <form>
            <div className='registration-panel'>
                <h1>Registration</h1>
                <div className='registration-field'>
                    <div className='input-field'>
                        <p>We've sent a verification code to your email and phone number.</p>
                        <input type='text' name='text' placeholder='Enter the verification code' />
                        <button id="next-step">Verify</button>
                    </div>
                </div>
            </div>
        </form>
       </div>
    )
}