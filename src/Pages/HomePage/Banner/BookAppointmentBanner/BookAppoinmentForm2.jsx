import { Controller, useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';


export default  function AppoinmentForm2() {
    const { control, handleSubmit } = useForm();

  
    const onSubmit = (data,) => {
   
      console.log(data); 

      const emailData = {
        email: data.email, 
        name: data.name, 
        phone: data.phone,
        department: data.department,
        doctor: data.doctor,
        date: data.date,
        message: data.message,
      };
      console.log(emailData);

      emailjs
      .send(
        'service_73ju6rr', 
        'template_un5e61v', // Replace with your EmailJS template ID
        emailData,
        'tRiDjWoDQDiwS2qjO'
      )
      .then(
        (response) => {
          console.log('Email sent successfully:', response);
        },
        (error) => {
          console.error('Email sending failed:', error);
        }
      );
    };
  
    return (
<>
<div className="pb-6  shadow-xl my-8">
      <div className="bg-white">

        <fieldset className="rounded-md">
          <h1 className="text-lg text-black pb-4 mt-4 font-semibold">
            Book Appointment
          </h1>
          <form className="grid grid-cols-6 gap-7 " onSubmit={handleSubmit(onSubmit)}>
            {/* Use Controller components to manage the form fields */}
            <div className="col-span-full sm:col-span-3">
              <Controller
                name="name"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    {...field}
                    className="bg-white text-black w-full border-2 border-gray-200 outline-none p-3 rounded-md"
                    placeholder="Name"
                    type="text"
                  />
                )}
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    {...field}
                    className="bg-white text-black w-full border-2 border-gray-200 outline-none p-3 rounded-md"
                    placeholder="Email"
                    type="email"
                  />
                )}
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <Controller
                name="phone"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    {...field}
                    className="bg-white text-black w-full border-2 border-gray-200 outline-none p-3 rounded-md"
                    placeholder="Phone"
                    type="tel"
                  />
                )}
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <Controller
                name="department"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <select
                    {...field}
                    className="w-full text-black bg-white border-2 border-gray-200 outline-none p-3 rounded-md"
                  >
                    <option value="volvo">Department</option>
                    <option value="saab">Department2</option>
                  </select>
                )}
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <Controller
                name="doctor"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <select
                    {...field}
                    className="w-full text-black bg-white border-2 border-gray-200 outline-none p-3 rounded-md"
                  >
                    <option value="volvo">Doctor</option>
                    <option value="saab">Doctor 1</option>
                  </select>
                )}
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <Controller
                name="date"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    {...field}
                    className="bg-white text-black w-full border-2 border-gray-200 outline-none p-3 rounded-md"
                    placeholder="Date"
                    type="date"
                  />
                )}
              />
            </div>
            <div className="col-span-full">
              <Controller
                name="message"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <textarea
                    {...field}
                    className="w-full text-black bg-white border-2 border-gray-200 outline-none p-3 rounded-md"
                    placeholder="Write your message here..."
                    rows="5"
                  />
                )}
              />
            </div>
            <div className="col-span-full flex items-center justify-center">
              <input
                className="bg-[#1E6EA3] hover:bg-[#3e95cf] rounded-lg p-3 w-8/12 text-lg font-normal text-white text-center cursor-pointer"
                type="submit"
                value="Book An Appointment"
              />
            </div>
          </form>
        </fieldset>
      </div>
    </div>
</>
    );
  }
  

  