import massageImage from "../../../public/image 56.jpg";
import Faqs from "../HomePage/Faqs/Faqs";


const AboutUs = () => {
  return (
    <div>
      <section className="container mx-auto" >
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
              <h2 className="text-[3.375rem] mb-6 font-bold text-gray-900 sm:text-4xl">
                About Us
              </h2>
              <span
                className=" w-full text-gray-600 text-md"
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                This introduces the heart and soul of our practice, where you
                will find the passion,<br></br> expertise, and commitment that
                drive our team to provide you with the highest <br></br> quality
                chiropractic care.
              </span>

              <div className="">
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-600 font-medium"
                >
                  Learn more about us <span className="ml-2">&#8594;</span>
                </a>
              </div>
            </div>
           
              <img
                src={massageImage}
                alt="About Us Image"
                className="object-cover  w-full rounded-lg shadow-md"
              />
           
          </div>
        </div>
      </section>
      <Faqs></Faqs>
    </div>
  );
};

export default AboutUs;
