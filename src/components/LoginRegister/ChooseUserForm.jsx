import React, { useState } from "react";

export default function ChooseUserForm({nextStep}) {
  const [selectedRole, setSelectedRole] = useState(null);

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    nextStep()
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center ">
      <h1 className="text-3xl font-bold mb-6 ">Choose Your Role</h1>
      <div className="flex space-x-6">
        {/* Normal User Card */}
        <div
          onClick={() => handleRoleSelect("normal_user")}
          className={`w-56 p-6 rounded-lg cursor-pointer text-center transition duration-300 transform shadow-lg border ${
            selectedRole === "normal_user"
              ? "bg-green-600 text-white scale-105 shadow-lg"
              : "bg-white  hover:bg-green-200 hover:scale-105"
          }`}
        >
          <h2 className="text-xl font-semibold">Normal User</h2>
          <p className="mt-2">Click here if you are a regular user.</p>
        </div>

        {/* Doctor Card */}
        <div
          onClick={() => handleRoleSelect("doctor")}
          className={`w-56 p-6 rounded-lg cursor-pointer text-center transition duration-300 transform shadow-lg border ${
            selectedRole === "doctor"
              ? "bg-green-600 text-white scale-105 shadow-lg"
              : "bg-white  hover:bg-green-200 hover:scale-105"
          }`}
        >
          <h2 className="text-xl font-semibold">Doctor</h2>
          <p className="mt-2">Click here if you are a doctor.</p>
        </div>
      </div>
    </div>
  );
}
