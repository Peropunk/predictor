"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from 'lucide-react';
import { useEffect, useState, Suspense } from "react";
import { ChevronDown, ChevronUp, SortDesc } from 'lucide-react';

// Component that uses useSearchParams
function ResultsContent() {
  const searchParams = useSearchParams();
  const rank = searchParams.get("rank");
  const domicile = searchParams.get("domicile");
  const category = searchParams.get("category");
  const seatType = searchParams.get("seatType");
  const quota = searchParams.get("quota");

  const [collegeResults, setCollegeResults] = useState([]);
  const [activeSortOption, setActiveSortOption] = useState("best-match");

  // Mock data (Replace with API call later)
  const mockColleges = [
    {
      name: "AJAY KUMAR GARG ENGG. COLLEGE, GHAZIABAD",
      course: "B.Tech",
      branch: "Computer Science and Engineering",
      category: "BC",
      quota: "Home State",
      ranks: [
        { round: 1, opening: 5000, closing: 10000 },
        { round: 2, opening: 6000, closing: 11000 },
        { round: 3, opening: 7000, closing: 12000 },
      ]
    },
    {
      name: "AJAY KUMAR GARG ENGG. COLLEGE, GHAZIABAD",
      course: "B.Tech",
      branch: "Electronics and Communication Engineering",
      category: "BC",
      quota: "Home State",
      ranks: [
        { round: 1, opening: 8000, closing: 15000 },
        { round: 2, opening: 9000, closing: 16000 },
        { round: 3, opening: 10000, closing: 17000 },
      ]
    }
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    setCollegeResults(mockColleges);
  }, []);

  const toggleDropdown = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Function to handle sort option selection
  const handleSortChange = (sortOption) => {
    setActiveSortOption(sortOption);
    // Sorting logic would be implemented here in a real application
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-white p-4">
      {/* Header */}
      <header className="w-full bg-gray-200 p-4 flex items-center text-black">
        <Link href="/" className="text-lg font-bold"><ArrowLeft/></Link>
        <h2 className="flex-grow text-center text-lg font-semibold">
          Prediction Results
        </h2>
      </header>

      {/* Rank Info */}
      <div className="bg-blue-700 text-white p-4 rounded-md shadow-md text-center w-full max-w-2xl mt-4">
        <p><b>Rank:</b> {rank} | <b>State:</b> {domicile === "Yes" ? "Uttar Pradesh" : "Other"} | <b>Category:</b> {category}</p>
      </div>

      {/* Sorting Options */}
      <div className="w-full max-w-2xl mt-4">
        <div className="bg-gray-100 p-3 rounded-lg">
          <p className="text-gray-700 mb-2 font-medium flex items-center">
            <SortDesc size={18} className="mr-1" /> Sort by:
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleSortChange("best-match")}
              className={`px-3 py-1 rounded-md text-sm ${
                activeSortOption === "best-match" 
                  ? "bg-blue-600 text-white" 
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              Best Match
            </button>
            <button
              onClick={() => handleSortChange("institute")}
              className={`px-3 py-1 rounded-md text-sm ${
                activeSortOption === "institute" 
                  ? "bg-blue-600 text-white" 
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              Institute
            </button>
            <button
              onClick={() => handleSortChange("program")}
              className={`px-3 py-1 rounded-md text-sm ${
                activeSortOption === "program" 
                  ? "bg-blue-600 text-white" 
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              Program
            </button>
            <button
              onClick={() => handleSortChange("closing-rank")}
              className={`px-3 py-1 rounded-md text-sm ${
                activeSortOption === "closing-rank" 
                  ? "bg-blue-600 text-white" 
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              Closing Rank
            </button>
            <button
              onClick={() => handleSortChange("opening-rank")}
              className={`px-3 py-1 rounded-md text-sm ${
                activeSortOption === "opening-rank" 
                  ? "bg-blue-600 text-white" 
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              Opening Rank
            </button>
            <button
              onClick={() => handleSortChange("round")}
              className={`px-3 py-1 rounded-md text-sm ${
                activeSortOption === "round" 
                  ? "bg-blue-600 text-white" 
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              Round
            </button>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="w-full max-w-2xl mt-4">
        {collegeResults.length > 0 ? (
          collegeResults.map((college, index) => (
            <div key={index} className="bg-white text-black p-4 rounded-md shadow-md mt-4 ">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold uppercase">{college.name}</h3>
                  <p><b>Course:</b> {college.course}</p>
                  <p><b>Branch:</b> {college.branch}</p>
                  <p><b>Category:</b> {college.category} | <b>Quota:</b> {college.quota}</p>
                </div>
                {/* Dropdown Button */}
                <button
                  onClick={() => toggleDropdown(index)}
                  className="text-gray-700 bg-gray-200 px-3 py-2 rounded-md shadow-md flex items-center"
                >
                  {expandedIndex === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
              </div>

              {/* Dropdown Content (Opening & Closing Ranks) */}
              {expandedIndex === index && (
                <div className="bg-gray-100 p-3 mt-3 rounded-lg shadow-md">
                  <h4 className="font-semibold text-center mb-2">Opening & Closing Ranks</h4>
                  {college.ranks.map((round, i) => (
                    <div key={i} className="bg-white p-3 rounded-md shadow-md mt-2 border text-center">
                      <p><b>Round {round.round}</b></p>
                      <p>Opening Rank: <span className="font-semibold">{round.opening}</span></p>
                      <p>Closing Rank: <span className="font-semibold">{round.closing}</span></p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center mt-4">No colleges found.</p>
        )}
      </div>
    </div>
  );
}

// Loading fallback component
function ResultsLoadingFallback() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-lg font-medium text-gray-700">Loading results...</p>
      </div>
    </div>
  );
}

// Main page component with Suspense
export default function ResultsPage() {
  return (
    <Suspense fallback={<ResultsLoadingFallback />}>
      <ResultsContent />
    </Suspense>
  );
}
