"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from 'lucide-react';

export default function CSABPredictor() {
  const [rank, setRank] = useState("");
  const [domicile, setDomicile] = useState("");
  const [category, setCategory] = useState("");
  const [seatType, setSeatType] = useState("");
  const [quota, setQuota] = useState("");
  const router = useRouter();

  // Check if all required fields are filled
  const isFormValid = rank && domicile && category && seatType;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Only process the form if all required fields are filled
    if (isFormValid) {
      // Redirect to results page with query params
      router.push(`/results?rank=${rank}&domicile=${domicile}&category=${category}&seatType=${seatType}&quota=${quota}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-white p-4">
      {/* Header */}
      <header className="w-full bg-gray-200 p-4 flex items-center text-black">
        <Link href="/" className="text-lg font-bold">
          <ArrowLeft />
        </Link>
        <h2 className="flex-grow text-center text-lg font-semibold">
          CSAB Predictor
        </h2>
      </header>

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mt-4 border">
        <label className="block font-semibold text-gray-900 mb-2">
          Fill Your All India Rank - CRL/Overall
        </label>
        <input
          type="number"
          value={rank}
          onChange={(e) => setRank(e.target.value)}
          className="w-full p-2 border border-gray-300 text-black rounded-lg mb-4"
          placeholder="Enter Rank"
          required
        />

        {/* Domicile Selection Buttons */}
        <select value={domicile} onChange={(e) => setDomicile(e.target.value)} className="w-full p-2 border text-black border-gray-300 rounded-lg mb-4">
          <option value="">Select Your State</option>
          <option value="AP">Andhra Pradesh</option>
          <option value="AR">Arunachal Pradesh</option>
          <option value="AS">Assam</option>
          <option value="BR">Bihar</option>
          <option value="CT">Chhattisgarh</option>
          <option value="GA">Gujarat</option>
          <option value="HR">Haryana</option>
          <option value="HP">Himachal Pradesh</option>
          <option value="JK">Jammu and Kashmir</option>
          <option value="GA">Goa</option>
          <option value="JH">Jharkhand</option>
          <option value="KA">Karnataka</option>
          <option value="KL">Kerala</option>
          <option value="MP">Madhya Pradesh</option>
          <option value="MH">Maharashtra</option>
          <option value="MN">Manipur</option>
          <option value="ML">Meghalaya</option>
          <option value="MZ">Mizoram</option>
          <option value="NL">Nagaland</option>
          <option value="OR">Odisha</option>
          <option value="PB">Punjab</option>
          <option value="RJ">Rajasthan</option>
          <option value="SK">Sikkim</option>
          <option value="TN">Tamil Nadu</option>
          <option value="TG">Telangana</option>
          <option value="TR">Tripura</option>
          <option value="UT">Uttarakhand</option>
          <option value="UP">Uttar Pradesh</option>
          <option value="WB">West Bengal</option>
          <option value="AN">Andaman and Nicobar Islands</option>
          <option value="CH">Chandigarh</option>
          <option value="DN">Dadra and Nagar Haveli</option>
          <option value="DD">Daman and Diu</option>
          <option value="DL">Delhi</option>
          <option value="LD">Lakshadweep</option>
          <option value="PY">Puducherry</option>
        </select>

        {/* Category Selection Buttons */}
        <div className="mb-4">
          <p className="text-gray-900 mb-2">Select your category</p>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setCategory("OPEN")}
              className={`px-4 py-2 rounded-lg ${
                category === "OPEN" 
                  ? "bg-blue-600 text-white" 
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              OPEN
            </button>
            <button
              type="button"
              onClick={() => setCategory("EWS")}
              className={`px-4 py-2 rounded-lg ${
                category === "EWS" 
                  ? "bg-blue-600 text-white" 
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              EWS
            </button>
            <button
              type="button"
              onClick={() => setCategory("OBC-NCL")}
              className={`px-4 py-2 rounded-lg ${
                category === "OBC-NCL" 
                  ? "bg-blue-600 text-white" 
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              OBC-NCL
            </button>
            <button
              type="button"
              onClick={() => setCategory("SC")}
              className={`px-4 py-2 rounded-lg ${
                category === "SC" 
                  ? "bg-blue-600 text-white" 
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              SC
            </button>
            <button
              type="button"
              onClick={() => setCategory("ST")}
              className={`px-4 py-2 rounded-lg ${
                category === "ST" 
                  ? "bg-blue-600 text-white" 
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              ST
            </button>
          </div>
        </div>

        {/* Gender Selection Buttons */}
        <div className="mb-4">
          <p className="text-gray-900 mb-2">Select your gender</p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setSeatType("Gender-Neutral")}
              className={`flex-1 px-4 py-2 rounded-lg ${
                seatType === "Gender-Neutral" 
                  ? "bg-blue-600 text-white" 
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              Gender-Neutral
            </button>
            <button
              type="button"
              onClick={() => setSeatType("Female Only")}
              className={`flex-1 px-4 py-2 rounded-lg ${
                seatType === "Female Only" 
                  ? "bg-blue-600 text-white" 
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              Female Only
            </button>
          </div>
        </div>

       

        <button 
          type="submit" 
          disabled={!isFormValid}
          className={`w-full ${isFormValid ? 'bg-blue-600 cursor-pointer' : 'bg-gray-400 cursor-not-allowed'} text-white p-3 rounded-lg font-semibold`}
        >
          Predict College
        </button>
      </form>
    </div>
  );
}