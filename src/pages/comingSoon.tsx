import { useState } from "react";
import { db } from "../firebase-config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import background from "../assets/background_with birds.png";

export default function ComingSoon() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!name || !email) {
      alert("Please fill in all fields");
      return;
    }

    if (!validateEmail(email)) {
      setIsEmailValid(false);
      return;
    }

    setIsSubmitting(true);

    try {
      await addDoc(collection(db, "user_interest"), {
        name_and_surname: name,
        email_address: email,
        created_at: serverTimestamp(),
      });

      // Clear form after submission
      setName("");
      setEmail("");
      setSubmissionSuccess(true); // Show success message
    } catch (error) {
      console.error("Error adding document: ", error);
      alert(
        "There was an error submitting your information. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat m-0 p-0 overflow-hidden"
      style={{
        backgroundImage: `url(${background})`,
        backgroundColor: "#FFD100",
      }}
    >
      <div className="grid grid-cols-12 h-screen">
        <div className="hidden md:block md:col-span-0 lg:col-span-1"></div>

        <div className="col-span-12 md:col-span-5 lg:col-span-4 flex flex-col justify-center px-8 md:px-4">
          <p className="text-white text-xl md:text-2xl mb-3 font-roboto font-medium">
            Heads-up! We're Almost Here!
          </p>
          <h1 className="text-white text-4xl md:text-4xl lg:text-5xl font-roboto font-bold mb-8 w-full">
            Get Notified When
            <br />
            We Launch.
          </h1>

          <form onSubmit={handleSubmit}>
            {/* Name and surname input */}
            <div className="flex mb-4 w-full max-w-md">
              <div className="flex-grow rounded-full overflow-hidden bg-white shadow-md">
                <input
                  type="text"
                  placeholder="Enter your Name and Surname"
                  className="w-full p-2 pl-5 text-gray-700 outline-none border-none"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Email input with button */}
            <div className="flex mb-3 w-full max-w-md">
              <div className="flex-grow rounded-l-full overflow-hidden bg-white shadow-md">
                <input
                  type="email"
                  placeholder="Enter your Email Address"
                  className={`w-full p-2 pl-5 text-gray-700 outline-none border-none ${
                    !isEmailValid ? "border-red-500" : ""
                  }`}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setIsEmailValid(true);
                  }}
                  onBlur={() => setIsEmailValid(validateEmail(email))}
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="py-2 px-4 bg-blue-600 text-white rounded-r-full font-medium text-sm md:text-base tracking-wider shadow-md hover:bg-blue-400 hover:text-black transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "NOTIFY ME"}
              </button>
            </div>
          </form>

          {!isEmailValid && (
            <p className="text-red-500 text-sm pl-5 mb-2">
              Please enter a valid Email Address
            </p>
          )}

          {submissionSuccess && (
            <p className="text-blue-600 text-sm pl-5 mb-2">
              Thank you for your interest! We'll notify you when we launch.
            </p>
          )}

          <p className="text-black text-md font-roboto font-semibold pl-5 mb-10">
            No spam, just good vibes.
          </p>
        </div>

        <div className="hidden md:block md:col-span-6 lg:col-span-6"></div>
      </div>
    </div>
  );
}
