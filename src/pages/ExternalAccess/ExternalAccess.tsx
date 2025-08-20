import { memo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ExternalAccess = () => {
  const [doctorEmail, setDoctorEmail] = useState("");
  const [accessLink, setAccessLink] = useState("");

  // Generate a random access link
  const generateAccessLink = () => {
    const token = Math.random().toString(36).substring(2, 10).toUpperCase();
    const link = `http://localhost:3000/${token}`;
    setAccessLink(link);
  };

  const sendAccessLink = () => {
    if (!doctorEmail) {
      alert("Please enter doctor email");
      return;
    }
    if (!accessLink) {
      alert("Please generate access link first");
      return;
    }
    // Integrate your email API or other sending logic here
    alert(`Access link ${accessLink} sent to ${doctorEmail}`);
    setDoctorEmail("");
    setAccessLink("");
  };

  const copyLink = () => {
    if (accessLink) {
      navigator.clipboard.writeText(accessLink);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div className="ExternalAccess space-y-4 p-4 border rounded-md max-w-md">
      <h2 className="text-xl font-semibold">External Access</h2>

      <div className="grid gap-2">
        <label htmlFor="doctorEmail" className="font-medium">Doctor Email</label>
        <Input
          id="doctorEmail"
          type="email"
          placeholder="doctor@example.com"
          value={doctorEmail}
          onChange={(e) => setDoctorEmail(e.target.value)}
        />
      </div>

      <div className="flex items-center gap-2">
        <Button onClick={generateAccessLink} variant="outline">Generate Access Link</Button>
        {accessLink && (
          <Button onClick={copyLink} variant="secondary">Copy Link</Button>
        )}
      </div>

      {accessLink && (
        <div className="text-blue-600 font-medium break-all">
          <a href={accessLink} target="_blank" rel="noopener noreferrer">{accessLink}</a>
        </div>
      )}

      <Button onClick={sendAccessLink} disabled={!accessLink || !doctorEmail}>
        Send to Doctor
      </Button>
    </div>
  );
};

export default memo(ExternalAccess);
