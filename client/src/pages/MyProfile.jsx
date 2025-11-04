import React, { useState } from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Mohammad Sumon",
    image: assets.profile_pic,
    email: "mohammd@gmail.com",
    phone: "+880 1731000000",
    address: {
      line1: "Gulshan",
      line2: "Dhaka, Bangladesh",
    },
    gender: "Male",
    dob: "2000-01-20",
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <section className="w-full px-6 md:px-10 lg:px-20 py-16 bg-gray-50 min-h-screen flex justify-center items-center">
      <div className="bg-white shadow-md rounded-2xl p-8 md:p-10 max-w-2xl w-full flex flex-col gap-8">
        {/* Profile Header */}
        <div className="flex flex-col items-center text-center">
          <img
            className="w-32 h-32 rounded-full border-4 border-primary shadow-sm object-cover"
            src={userData.image}
            alt="Profile"
          />

          {isEdit ? (
            <input
              className="bg-gray-100 text-2xl font-semibold text-center mt-4 p-2 rounded-md w-full max-w-xs border border-gray-300 focus:ring-2 focus:ring-primary outline-none"
              value={userData.name}
              type="text"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          ) : (
            <h2 className="text-2xl font-semibold text-gray-800 mt-4">
              {userData.name}
            </h2>
          )}
        </div>

        <hr className="border-gray-300" />

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Contact Information
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 text-gray-700 text-sm">
            <p className="font-medium">Email:</p>
            <p>{userData.email}</p>

            <p className="font-medium">Phone:</p>
            {isEdit ? (
              <input
                value={userData.phone}
                type="text"
                className="bg-gray-100 border border-gray-300 rounded-md px-2 py-1 focus:ring-2 focus:ring-primary outline-none"
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, phone: e.target.value }))
                }
              />
            ) : (
              <p>{userData.phone}</p>
            )}

            <p className="font-medium">Address:</p>
            {isEdit ? (
              <div className="flex flex-col gap-2">
                <input
                  className="bg-gray-100 border border-gray-300 rounded-md px-2 py-1 focus:ring-2 focus:ring-primary outline-none"
                  value={userData.address.line1}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line1: e.target.value },
                    }))
                  }
                />
                <input
                  className="bg-gray-100 border border-gray-300 rounded-md px-2 py-1 focus:ring-2 focus:ring-primary outline-none"
                  value={userData.address.line2}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line2: e.target.value },
                    }))
                  }
                />
              </div>
            ) : (
              <p>
                {userData.address.line1}
                <br />
                {userData.address.line2}
              </p>
            )}
          </div>
        </div>

        <hr className="border-gray-300" />

        {/* Basic Information */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Basic Information
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 text-gray-700 text-sm">
            <p className="font-medium">Gender:</p>
            {isEdit ? (
              <select
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, gender: e.target.value }))
                }
                value={userData.gender}
                className="bg-gray-100 border border-gray-300 rounded-md px-2 py-1 focus:ring-2 focus:ring-primary outline-none"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            ) : (
              <p>{userData.gender}</p>
            )}

            <p className="font-medium">Date of Birth:</p>
            {isEdit ? (
              <input
                type="date"
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, dob: e.target.value }))
                }
                value={userData.dob}
                className="bg-gray-100 border border-gray-300 rounded-md px-2 py-1 focus:ring-2 focus:ring-primary outline-none"
              />
            ) : (
              <p>{userData.dob}</p>
            )}
          </div>
        </div>

        {/* Edit / Save Button */}
        <div className="flex justify-center mt-6">
          {isEdit ? (
            <button
              onClick={() => setIsEdit(false)}
              className="bg-primary text-white px-8 py-2 rounded-lg font-medium shadow hover:bg-primary/90 transition duration-300"
            >
              Save Information
            </button>
          ) : (
            <button
              onClick={() => setIsEdit(true)}
              className="bg-primary text-white px-8 py-2 rounded-lg font-medium shadow hover:bg-primary/90 transition duration-300"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default MyProfile;
