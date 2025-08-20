import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const PatientAdd = () => {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/patient"); // Redirect to /patient
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add save logic (API call, state update, etc.)
    navigate("/patient"); // Redirect after saving
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Add Patient</h2>

        <form className="grid gap-4" onSubmit={handleSave}>
          <div className="grid gap-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" name="firstName" placeholder="Patient first name" />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="middleName">Middle Name</Label>
            <Input id="middleName" name="middleName" placeholder="Patient middle name" />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" name="lastName" placeholder="Patient last name" />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" placeholder="patient@email.com" />
          </div>

          <div className="flex justify-end gap-3 mt-6">
            <Button type="button" variant="outline" onClick={handleCancel}>
              Cancel
            </Button>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default memo(PatientAdd);
