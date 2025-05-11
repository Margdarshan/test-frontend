import React from 'react';

const Form = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-gray-100 p-8 max-w-screen-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-[27px] leading-normal font-bold mb-2 font-Manrope">
            Junior UI/UX Designer
          </h1>
          <div className="text-gray-600 font-Manrope">
            <span>Remote, India • Full time • $30K-60K/Year</span>
          </div>
        </div>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[#252525] mb-2 font-Manrope text-[17px] leading-normal">
                <span style={{ color: 'red' }}>*</span> First Name
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4E18CD]"
              />
            </div>
            <div>
              <label className="block text-[#252525] mb-2 font-Manrope text-[17px] leading-normal">
                <span style={{ color: 'red' }}>*</span> Last Name
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4E18CD]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[#252525] mb-2 text-[17px] leading-normal">
                <span style={{ color: 'red' }}>*</span> Email{' '}
              </label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4E18CD]"
              />
            </div>
            <div>
              <label className="block text-[#252525] mb-2 font-Manrope text-[17px] leading-normal">
                <span style={{ color: 'red' }}>*</span> Experience
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4E18CD]"
              />
            </div>
          </div>
          <div>
            <label className="block text-[#252525] mb-2 font-Manrope">
              <span style={{ color: 'red' }}>*</span>Resume
            </label>
            <div className="w-full p-6 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="69"
                height="69"
                viewBox="0 0 69 69"
                fill="none"
              >
                <circle cx="34.5" cy="34.5" r="34.5" fill="#E9FBF1" />
                <svg
                  x="20.5"
                  y="20.5"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.9997 1.45837C14.126 1.45829 14.2509 1.48557 
              14.3657 1.53834C14.4805 1.5911 14.5825 1.6681 14.6647 1.76404L18.1647 5.84737C18.3157 6.02374 
              18.3904 6.25287 18.3725 6.48435C18.3545 6.71584 18.2454 6.93071 18.069 7.08171C17.8926 7.2327 
              17.6635 7.30745 17.432 7.28951C17.2005 7.27157 16.9857 7.16241 16.8347 6.98604L14.8747 4.69937V17.5C14.8747 
              17.7321 14.7825 17.9547 14.6184 18.1188C14.4543 18.2829 14.2317 18.375 13.9997 18.375C13.7676 18.375 13.545 
              18.2829 13.381 18.1188C13.2169 17.9547 13.1247 17.7321 13.1247 17.5V4.69821L11.1647 6.98604C11.0899 7.07337 
              10.9987 7.14512 10.8962 7.19719C10.7937 7.24926 10.6819 7.28063 10.5673 7.28951C10.4527 7.2984 10.3375 7.28462 
              10.2282 7.24896C10.1189 7.21331 10.0177 7.15647 9.93034 7.08171C9.84301 7.00694 9.77126 6.91571 9.71919 6.81321C9.66712 
              6.71072 9.63575 6.59897 9.62687 6.48435C9.61798 6.36974 9.63176 6.25449 9.66742 6.1452C9.70307 6.0359 9.75991 5.9347 9.83467 
              5.84737L13.3347 1.76404C13.4169 1.6681 13.5189 1.5911 13.6337 1.53834C13.7485 1.48557 13.8733 1.45829 13.9997 1.45837ZM8.16167 
              9.62737C8.39374 9.62614 8.61679 9.71714 8.78176 9.88036C8.94673 10.0436 9.0401 10.2656 9.04134 10.4977C9.04258 10.7298 8.95158 
              10.9528 8.78836 11.1178C8.62514 11.2828 8.40307 11.3761 8.17101 11.3774C6.89584 11.3844 5.99167 11.417 5.30451 11.543C4.64417 
              11.6655 4.26034 11.8604 3.97684 12.1439C3.65367 12.467 3.44367 12.9209 3.32817 13.7772C3.21034 14.658 3.20801 15.8259 3.20801 
              17.5V18.6667C3.20801 20.342 3.21034 21.5099 3.32817 22.3907C3.44367 23.247 3.65484 23.6997 3.97684 24.024C4.30001 24.346 4.75267 
              24.556 5.61017 24.6715C6.48984 24.7905 7.65884 24.7917 9.33301 24.7917H18.6663C20.3405 24.7917 21.5083 24.7905 22.3903 24.6715C23.2467 24.556 23.6993 24.346 24.0225 24.0229C24.3457 23.6997 24.5557 23.247 24.6712 22.3907C24.789 21.5099 24.7913 20.342 24.7913 18.6667V17.5C24.7913 15.8259 24.789 14.658 24.6712 13.776C24.5557 12.9209 24.3445 12.467 24.0225 12.1439C23.7378 11.8604 23.3552 11.6655 22.6948 11.543C22.0077 11.417 21.1035 11.3844 19.8283 11.3774C19.7134 11.3768 19.5998 11.3535 19.4938 11.309C19.3879 11.2644 19.2918 11.1995 19.211 11.1178C19.1302 11.0361 19.0662 10.9393 19.0228 10.8329C18.9794 10.7265 18.9574 10.6126 18.958 10.4977C18.9586 10.3828 18.9819 10.2691 19.0264 10.1632C19.0709 10.0573 19.1359 9.96117 19.2176 9.88036C19.2993 9.79954 19.3961 9.7356 19.5025 9.69219C19.6089 9.64879 19.7228 9.62676 19.8377 9.62737C21.1 9.63437 22.1512 9.66471 23.011 9.82221C23.8953 9.98554 24.6478 10.2947 25.2603 10.9072C25.9627 11.6084 26.2637 12.4939 26.406 13.5439C26.5413 14.5542 26.5413 15.841 26.5413 17.4359V18.7309C26.5413 20.3269 26.5413 21.6125 26.406 22.624C26.2637 23.674 25.9627 24.5584 25.2603 25.2607C24.558 25.963 23.6737 26.264 22.6237 26.4064C21.6122 26.5417 20.3253 26.5417 18.7305 26.5417H9.26884C7.67401 26.5417 6.38717 26.5417 5.37567 26.4064C4.32567 26.2652 3.44134 25.963 2.73901 25.2607C2.03667 24.5584 1.73567 23.674 1.59451 22.624C1.45801 21.6125 1.45801 20.3257 1.45801 18.7309V17.4359C1.45801 15.841 1.45801 14.5542 1.59451 13.5427C1.73451 12.4927 2.03784 11.6084 2.73901 10.906C3.35151 10.2947 4.10401 9.98437 4.98834 9.82221C5.84817 9.66471 6.89934 9.63437 8.16167 9.62737Z"
                    fill="#27AE60"
                  />
                </svg>
              </svg>

              <span className="text-gray-500 font-Manrope text-[15px] leading-normal">
                Upload a file or drag and drop here
              </span>
            </div>
          </div>
          <button className="w-full py-3 text-white bg-[#4E18CD] rounded-lg font-Manrope">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
