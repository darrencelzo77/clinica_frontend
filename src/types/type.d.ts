export type CaseRow = {
    id: string
    caseNumber: string
    patientName: string
    doctorAssigned: string
    processedBy: string
    status: "open" | "in-progress" | "closed"
}