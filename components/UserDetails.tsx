import { MapPinIcon, PhoneIcon } from "@heroicons/react/16/solid";
import React, { useEffect, useState } from "react";

interface UserDetailsProps {
  detailsProps: (location: string, mobile: string) => void;
}

const UserAddress: React.FC<UserDetailsProps> = ({ detailsProps }) => {
  const [location, setLocation] = useState<string>(
    () => localStorage.getItem("location") || ""
  );
  const [mobile, setMobile] = useState<string>(
    () => localStorage.getItem("mobile") || ""
  );
  // const [showAddress, setShowAddress] = useState<boolean>(false);
  const [showAddress, setShowAddress] = useState<boolean>(
    () => !!localStorage.getItem("location") && !!localStorage.getItem("mobile")
  );

  const handleAddAddress = () => {
    detailsProps(location, mobile);
    setShowAddress(true);
  };

  useEffect(() => {
    localStorage.setItem("location", location);
    localStorage.setItem("mobile", mobile);
  }, [location, mobile]);

  return (
    <div className="px-4">
      <h2 className="text-lg font-semibold mb-4">User Details</h2>
      {!showAddress && (
        <>
          <div className="mb-4 flex items-center">
            <MapPinIcon className="h-6 w-6 text-gray-400 mr-3" />
            <input
              type="text"
              id="location"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-emerald-500"
              placeholder="Enter your location"
            />
          </div>
          <div className="mb-4 flex items-center gap-2">
            <PhoneIcon className="h-6 w-6 text-gray-400 mr-3" />
            <input
              type="text"
              id="mobile"
              name="mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="Enter your mobile number"
            />
            <button
              onClick={handleAddAddress}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md"
            >
              Add
            </button>
          </div>
        </>
      )}
      {showAddress && (
        <div>
          <div className="mb-4 flex items-center">
            <MapPinIcon className="h-6 w-6 text-gray-400 mr-3" />
            <span>{location}</span>
          </div>
          <div className="mb-4 flex items-center">
            <PhoneIcon className="h-6 w-6 text-gray-400 mr-3" />
            <span>{mobile}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserAddress;
