import { SheetPage } from '@/components/reusable/SheetPage';
import { TableNew } from '@/components/reusable/Table/TableNew';
import { memo } from 'react';

const Procedure = () => {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Procedure List</h2>
                <SheetPage />
            </div>
            <TableNew />
        </div>
    );
};

export default memo(Procedure);