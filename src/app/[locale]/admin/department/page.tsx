import { fetchListData } from '@/action';
import { DataTable } from '@/components';
import { departmentColumn } from '@/types';

const AdminDepartment = async () => {
  const res = await fetchListData('departments/get-list');

  return (
    <DataTable
      columns={departmentColumn}
      data={res.data}
      searchableColumns={['name', 'detail', 'code']}
      modelName="department"
    />
  );
};

export default AdminDepartment;
