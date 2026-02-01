import { memo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const ExternalAccess = () => {
  const [doctorEmail, setDoctorEmail] = useState("")
  const [accessLink, setAccessLink] = useState("")

  const generateAccessLink = () => {
    const token = Math.random().toString(36).substring(2, 10).toUpperCase()
    const link = `https://yourdomain.com/external/${token}`
    setAccessLink(link)
  }

  const sendAccessLink = () => {
    if (!doctorEmail || !accessLink) return
    alert(`Access link sent to ${doctorEmail}`)
    setDoctorEmail("")
    setAccessLink("")
  }

  const copyLink = () => {
    if (!accessLink) return
    navigator.clipboard.writeText(accessLink)
    alert("Link copied to clipboard")
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md space-y-6 rounded-xl ">
        <div className="text-center space-y-1">
          <h2 className="text-xl font-semibold">External Access</h2>
          <p className="text-sm text-muted-foreground">
            Generate a secure external link for doctors
          </p>
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Doctor Email</label>
          <Input
            type="email"
            placeholder="doctor@example.com"
            value={doctorEmail}
            onChange={(e) => setDoctorEmail(e.target.value)}
          />
        </div>

        {/* Generate / Copy */}
        <div className="flex gap-2">
          <Button
            className="flex-1"
            variant="outline"
            onClick={generateAccessLink}
          >
            Generate Link
          </Button>

          <Button
            variant="secondary"
            onClick={copyLink}
            disabled={!accessLink}
          >
            Copy
          </Button>
        </div>

        {/* Generated Link */}
        {accessLink && (
          <div className="rounded-md border bg-muted p-3 text-sm break-all text-center">
            <a
              href={accessLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {accessLink}
            </a>
          </div>
        )}

        {/* Send */}
        <Button
          className="w-full"
          onClick={sendAccessLink}
          disabled={!doctorEmail || !accessLink}
        >
          Send Access Link
        </Button>
      </div>
    </div>
  )
}

export default memo(ExternalAccess)
