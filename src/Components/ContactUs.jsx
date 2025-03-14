import React, { useState } from 'react'

const ContactUs = () => {
   
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");

    const [errors, setErrors] = useState("");
    const [successMsg, setSuccessMsg] = useState("");


    let validationErrors = {};


    const handleSubmit = (e) => {
        e.preventDefault();

        if(!name){
            validationErrors.name = "Enter Your Name";
        }

        if(!email){
            validationErrors.email ="Enter Email"
        }

        if(!mobile){
            validationErrors.mobile = "Enter mobile"
        }

        if(Object.keys(validationErrors).length > 0){
            setErrors(validationErrors);
            
        }
        else{
            console.log("sent");
            setSuccessMsg("Form Submitted");
            //reset forms 
            setName("");
            setEmail("");
            setMobile("");
            setErrors("")
        }
    }
  return (

    <>
        <section className='py-5 md:py-7 bg-stone-100'>
            <div className="container">
                <div className="flex flex-col md:flex-row justify-center">
                    <div className="w-full md:w-1/2">
                      <form action="" className='p-4 py-6 bg-white' onSubmit={handleSubmit}>
                         <h2 className='main-title mb-4 md:mb-8'>Contact Now</h2>
                         <div className="mb-3">
                            <label htmlFor="">Full Name</label>
                            <input type="text" className='inputcss' value={name} onChange={(e)=> setName(e.target.value)}/>
                            <span className='text-red-500'>{
                                errors.name
                            }</span>
                         </div>
                         <div className="mb-3">
                            <label htmlFor="">Email </label>
                            <input type="text" className='inputcss' value={email} onChange={(e) => setEmail(e.target.value)} />
                            <span className='text-red-500'>{
                                errors.email
                            }</span>
                         </div>

                         <div className="mb-3">
                            <label htmlFor="">Mobile</label>
                            <input type="text" className='inputcss' value={mobile} onChange={(e) => setMobile(e.target.value)}/>
                            <span className='text-red-500'>{
                                errors.mobile
                            }</span>
                         </div>

                         <div className="mb-0">
                            <button className='main-btn mt-5'>Send Message</button>
                         </div>

                         <div className="mb-3">
                            <span className='text-green-600'>{successMsg}</span>
                         </div>
                      </form>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default ContactUs