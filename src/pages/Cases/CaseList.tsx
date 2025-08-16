import { DialogPage } from "@/components/reusable/DialogPage";
import { TableCase } from "@/components/reusable/Table/TableCase";
import { Button } from "@/components/ui/button";
import { IconGitBranch } from "@tabler/icons-react";

const CaseList = () => {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Case List</h2>
                <DialogPage>
                    <Button size="sm">
                        <IconGitBranch className="mr-2 h-4 w-4" />
                        Add New Case
                    </Button>
                </DialogPage>
            </div>
            <TableCase />
        </div>
    );
};

export default CaseList;