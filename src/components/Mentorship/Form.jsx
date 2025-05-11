import * as React from "react";
import { useForm } from "react-hook-form";
import SuccessModal from "./SuccessModal";
import usePostRequest from "../../core/api/hooks/usePostRequest";
import useNotification from "../../core/components/Notification/useNotifiaction";

function InputField({
  label,
  name,
  type,
  placeholder,
  register,
  errors,
  pattern,
}) {
  return (
    <div>
      <h5 className="ml-2 font-inter text-[17px] text-[#020D2B]">{label}</h5>
      <div className="flex flex-col w-full p-2">
        <label htmlFor={name} className="sr-only">{label}</label>
        <input
          {...register(name, {
            required: `${label} is required`,
            pattern: pattern && { value: pattern.value, message: pattern.message },
          })}
          type={type}
          id={name}
          placeholder={placeholder}
          aria-label={placeholder}
          className={`w-full p-3 rounded-lg border-2 border-[#020D2B80] border-opacity-50 focus:border-[#6941C6] outline-none ${errors[name] ? "border-red-500" : ""}`}
        />
        {errors[name] && (
          <p className="text-red-500 text-sm mt-1">{errors[name]?.message}</p>
        )}
      </div>
    </div>
  );
}

function Form() {
  const showToast = useNotification()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,

  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      city: '',
      classes: '',
      message: '',
      privacyPolicy: false,
    },
    mode: 'onChange',
    delayError: 100,
  });

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const mutation = usePostRequest();

  const onSubmit = async (data) => {
    try {
      const response = await mutation.mutateAsync({
        apiEndpoint: "/consult",
        data,
      });
      if (response) {
        showToast('Thank you for Registering free mentorship program!', 'success', 5000)
        setIsModalOpen(true);
        reset();
      }
    } catch (err) {
      showToast("Oops, Something went wrong!. Please try again.", 'error', 5000)

    }
  };

  return (
    <div className="md:mx-28 mt-8 mb-6 p-8 bg-white shadow-lg rounded-2xl z-50">
      <div className="bg-black rounded-lg py-1">
        <h2 className="text-center text-white text-md md:text-lg font-semibold">
          BOOK A FREE ONLINE COUNSELLING SESSION
        </h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
        <InputField
          label="Full Name"
          name="name"
          type="text"
          placeholder="Full Name"
          register={register}
          errors={errors}
        />
        <InputField
          label="Email"
          name="email"
          type="text"
          placeholder="Email"
          register={register}
          errors={errors}
          pattern={{
            value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
            message: "Invalid email format",
          }}
        />
        <InputField
          label="Phone Number"
          name="phone"
          type="tel"
          placeholder="Phone Number"
          register={register}
          errors={errors}
          pattern={{
            value: /^[0-9]{10}$/,
            message: "Phone number must be 10 digits",
          }}
        />
        <InputField
          label="City"
          name="city"
          type="text"
          placeholder="City"
          register={register}
          errors={errors}
        />

        <div>
          <h5 className="ml-2 font-inter text-[17px] text-[#020D2B]">Class</h5>
          <div className="flex flex-col w-full p-2">
            <select
              {...register("classes", { required: "Class is required" })}
              className={`p-3 rounded-lg border-2 border-[#020D2B80] border-opacity-50 focus:border-[#6941C6] outline-none ${errors.classes ? "border-red-500" : ""}`}
            >
              <option value="">Select Class</option>
              <option value="IX">Class IX</option>
              <option value="X">Class X</option>
              <option value="XI">Class XI</option>
              <option value="XII">Class XII</option>
            </select>
            {errors.classes && (
              <p className="text-red-500 text-sm mt-1">{errors.classes?.message}</p>
            )}
          </div>
        </div>

        <div>
          <h5 className="ml-2 font-inter text-[17px] text-[#020D2B]">Message</h5>
          <div className="flex flex-col w-full md:col-span-2 p-2">
            <textarea
              {...register("message", { required: "Message is required" })}
              id="message"
              placeholder="Ask Your Questions"
              aria-label="Questions"
              className={`w-full p-3 rounded-lg border-2 border-[#020D2B80] border-opacity-50 focus:border-[#6941C6] outline-none h-28 ${errors.message ? "border-red-500" : ""}`}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message?.message}</p>
            )}
          </div>
        </div>
        <div className="md:col-span-2 grid items-center  justify-center">
          <div className="md:col-span-2 flex items-center justify-center">

            <input
              type="checkbox"
              id="privacyPolicyCheckbox"
              className="form-checkbox border border-solid border-gray-400 rounded focus:outline-none mr-2"
              {...register("privacyPolicy", { required: "You must agree to the privacy policy" })}
            />

            <label htmlFor="privacyPolicy" className="text-sm font-inter text-[#020D2B80]">
              You agree to our friendly{" "}
              <a href="/frontend/privacypolicy" target="_blank" className="underline">Privacy Policy</a>.
            </label>
          </div>
          <div>
            {errors.privacyPolicy && (
              <p className="text-red-500 text-sm mt-1"> {errors.privacyPolicy?.message}</p>
            )}

          </div>
        </div>


        <div className="md:col-span-2 flex justify-center p-2">
          <button
            type="submit"
            className="w-[40%] py-2 mt-4 text-white font-semibold rounded-lg bg-[#4E18CD] transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Success Modal */}
      <SuccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default Form;
