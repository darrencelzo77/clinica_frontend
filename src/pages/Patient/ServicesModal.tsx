import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import type { PatientData } from "@/types/type";

const servicesList = ["2D Echo", "Xray", "Laboratory"];

interface ServicesModalProps {
    trigger: React.ReactNode;
    rowData?: PatientData;
}

export const ServicesModal = ({ trigger, rowData }: ServicesModalProps) => {
    const [selectedServices, setSelectedServices] = useState<string[]>([]);

    const toggleService = (service: string) => {
        setSelectedServices((prev) =>
            prev.includes(service)
                ? prev.filter((s) => s !== service)
                : [...prev, service]
        );
    };

    const handleSave = () => {
        // Here you can also send selectedServices + rowData.id to your API
        alert(`Successfully added ${selectedServices.join(", ")} for ${rowData?.firstName} in the Queue`);
    };

    return (
        <Dialog>
            <DialogTrigger asChild>{trigger}</DialogTrigger>
            <DialogContent className="max-w-2xl">
                <DialogHeader>
                    <DialogTitle>
                        Select Services for {rowData?.firstName} {rowData?.lastName}
                    </DialogTitle>
                </DialogHeader>

                {/* Display Selected Services */}
                {selectedServices.length > 0 && (
                    <div className="mb-4 p-2 bg-gray-100 rounded">
                        <strong>Selected Services:</strong>
                        <ul className="list-disc list-inside">
                            {selectedServices.map((s) => (
                                <li key={s}>{s}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Service Checkboxes */}
                <div className="flex flex-col space-y-2 mt-2">
                    {servicesList.map((service) => (
                        <label key={service} className="flex items-center space-x-2">
                            <Checkbox
                                checked={selectedServices.includes(service)}
                                onCheckedChange={() => toggleService(service)}
                            />
                            <span>{service}</span>
                        </label>
                    ))}
                </div>

                <DialogFooter>
                    <Button onClick={handleSave}>Save</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};
