export type CaseData = {
    id: string
    caseNumber: string
    patientName: string
    doctorAssigned: string
    processedBy: string
    status: "open" | "in-progress" | "closed"
}

export type EmployeeData = {
    id: string
    no?: string
    name: string
    specialty: string
    email: string
    department: string
}

export type PatientData = {
    id: string
    seriesId: string
    firstName: string
    middleName?: string
    lastName: string
    processedBy: string
    status: string
}


export type ProcedureData = {
    id: string
    no: string
    procedureName: string
    type: string
    department: string
}

export type BranchData = {
    id: number
    name: string
}

export type DepartmentData = {
    id: number
    name: string
}

export type UserData = {
    id: number
    name: string
}
