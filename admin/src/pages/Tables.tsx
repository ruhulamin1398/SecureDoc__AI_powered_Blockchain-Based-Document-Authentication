import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
 
import TableCertificate from '../components/Tables/TableCertificate';
import DefaultLayout from '../layout/DefaultLayout';

const Tables = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Certificate List" />

      <div className="flex flex-col gap-10">
        <TableCertificate />

      </div>
    </DefaultLayout>
  );
};

export default Tables;
