const PolicyPage = () => {
  return (
    <div className="mx-auto  w-full max-w-screen-2xl">
      <div className="bg-[#D5F8FE]  text-center pb-24 pt-12">
        <div className="self-stretch mx-2 lg:h-[141px] flex-col justify-start items-center gap-6 inline-flex">
          <h1 className="text-center text-neutral-800 text-[3.3rem] font-bold font-['Open Sans'] leading-[64.80px]">
            Privacy Policy
          </h1>
          <p className="self-stretch text-center text-zinc-600 text-xl font-normal font-['Open Sans'] leading-7">
            Our Privacy Policy is a commitment to safeguarding your personal
            information. We <br></br> prioritize your privacy, ensuring that
            your data is handled with the utmost care and <br></br> security,
            giving you peace of mind as you explore our chiropractic services.
          </p>
        </div>
      </div>

      {/* policy */}

      <div className="container mx-auto my-12 "> 
  <div className="lg:w-[60rem] mx-auto">
    <div className="space-y-2"> {/* Increased space-y-8 for more vertical spacing */}
      <div className="bg-white p-2">
        <h1 className="font-bold text-neutral-800 text-xl mb-2">Privacy Policy</h1>
        <p className="text-neutral-800">
          At Dr. Phil Chiropractor, we value your trust and are committed to safeguarding your privacy.{" "}
          <span className="font-bold">This Privacy and Policy</span> section outlines how we collect, use, and protect your personal information, as well as the terms and conditions for using our website. By accessing our services or browsing our website, you agree to the terms outlined in this section
        </p>
      </div>

      <div className="bg-white text-neutral-800 p-2">
        <h1 className="font-bold text-xl mb-2">Information Collection and Use</h1>
        <p>
          We collect personal information such as your name, contact details, and medical history solely for the purpose of providing you with the best possible chiropractic care. We do not share this information with third parties without your explicit consent. Our priority is maintaining the confidentiality and security of your data.
        </p>
      </div>

      <div className="bg-white text-neutral-800 p-2">
        <h1 className="font-bold text-xl mb-2">Consent and Security</h1>
        <p>
          Your personal information is collected with your consent, and you have the right to withdraw that consent at any time. We employ industry-standard security measures to protect your data from unauthorized access, disclosure, alteration, or destruction.
        </p>
      </div>

      
      <div className="bg-white text-neutral-800 p-2">
        <h1 className="font-bold text-xl mb-2">Information Sharing</h1>
        <p>
          We do not sell, trade, or rent your personal information to third parties. However, we may share it with healthcare professionals within our clinic, only with your consent, to ensure your continuity of care.
        </p>
      </div>

      <div className="bg-white text-neutral-800 p-2">
        <h1 className="font-bold text-xl mb-2">Website Usage</h1>
        <p>
          We collect non-personal data, such as cookies and website usage statistics, to enhance your browsing experience and improve our sites functionality. You can adjust your browser settings to manage cookies.
        </p>
      </div>

      <div className="bg-white text-neutral-800 p-2">
        <h1 className="font-bold text-xl mb-2">Third-Party Links</h1>
        <p>
          Our website may contain links to third-party websites for your convenience. Please note that we do not endorse or control these websites, and our Privacy and Policy section does not apply to them. We recommend reviewing the privacy policies of any linked sites.
        </p>
      </div>

      <div className="bg-white text-neutral-800 p-2">
        <h1 className="font-bold text-xl mb-2">Changes to Privacy Policy</h1>
        <p>
          We may periodically update our Privacy and Policy section. Any changes will be posted on our website, and the date of the most recent revision will be provided. Your continued use of our services implies acceptance of any revised terms.
        </p>
      </div>

      <div className="bg-white text-neutral-800 p-2">
        <h1 className="font-bold text-xl mb-2">Contact Us</h1>
        <p>
          If you have any questions or concerns regarding your privacy or this policy, please do not hesitate to [contact us]. We are here to address your inquiries and provide the best chiropractic care possible while respecting your privacy.
        </p>
      </div>
      
    </div>
  </div>
</div>



    </div>
  );
};

export default PolicyPage;
