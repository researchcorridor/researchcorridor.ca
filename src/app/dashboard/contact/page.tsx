'use client';

import { Button } from '@heroui/react';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { CiSaveDown2 } from 'react-icons/ci';
import { IoNewspaperOutline } from 'react-icons/io5';
import { PiAddressBook } from 'react-icons/pi';

import DataTable from '@/components/ui/data-table';
import DateRange, { DateRangeState } from '@/components/ui/date-range';
import DeleteButton from '@/components/ui/delete-button';
import DialogBox from '@/components/ui/dialog-box';
import exportToExcel from '@/lib/export-to-excel';
import { supabase } from '@/utils/supabase/client';

export default function Collaborations() {
  const PAGE_SIZE = 10;
  const [exporting, setExporting] = useState(false);

  const [data, setData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [dateRange, setDateRange] = useState<DateRangeState>({
    start: null,
    end: null,
  });

  const getData = async (
    page: number = 1,
    q: string = '',
    dr: DateRangeState = dateRange,
  ) => {
    try {
      setLoading(true);
      const { data, count, error } = (await supabase
        .from('contact')
        .select('*', { count: 'exact' })
        .range((page - 1) * PAGE_SIZE, page * PAGE_SIZE - 1)
        .order('created_at', { ascending: false })
        .or(`email.ilike.%${q}%,name.ilike.%${q}%`)
        .gte(
          'created_at',
          dr.start ? dr.start.toISOString() : '1970-01-01T00:00:00Z',
        )
        .lte(
          'created_at',
          dr.end ? dr.end.toISOString() : new Date().toISOString(),
        )) as any;
      setLoading(false);
      if (error) {
        console.error(error);
      } else {
        setData(data);
        setTotalCount(count || 0);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const download = async () => {
    setExporting(true);
    const { data, error } = await supabase
      .from('contact')
      .select('*')
      .order('created_at', { ascending: false })
      .or(`email.ilike.%${search}%,name.ilike.%${search}%`)
      .gte(
        'created_at',
        dateRange.start
          ? dateRange.start.toISOString()
          : '1970-01-01T00:00:00Z',
      )
      .lte(
        'created_at',
        dateRange.end ? dateRange.end.toISOString() : new Date().toISOString(),
      );

    if (error) {
      console.error(error);
      return;
    }
    setExporting(true);
    await exportToExcel(
      [
        ...data.map((d) => ({
          'Submitted At': dayjs(d.created_at).format(
            'DD MMM YYYY - hh:mm:ss A',
          ),
          Name: d.name,
          Email: d.email,
          Subject: d.subject,
          Message: d.message,
        })),
      ],
      'Contact',
    );
    setExporting(false);
  };
  return (
    <DataTable
      title="Contact"
      Icon={PiAddressBook}
      addButtonLink="/contact"
      addButtonText="Add Contact"
      headerChildren={
        <Button
          color="primary"
          variant="ghost"
          onPress={download}
          isLoading={exporting}
          className="flex items-center gap-2"
        >
          <CiSaveDown2 />
          Download
        </Button>
      }
      rows={data}
      onSearch={(value: string) => {
        setSearch(value);
        setPage(1);
        getData(1, value);
      }}
      isLoading={loading}
      beforeContent={
        <DateRange
          onSearch={(dateRange) => {
            setDateRange(dateRange);
            getData(page, search, dateRange);
          }}
        />
      }
      pagination={{
        totalPage: Math.ceil(totalCount / PAGE_SIZE),
        totalItems: totalCount,
        onThisPage: data.length,
        currentPage: page,
        onPageChange: (page) => {
          setPage(page);
          getData(page, search);
        },
      }}
      columns={[
        {
          title: 'Submitted At',
          key: 'created_at',
          component: (_, record) => (
            <div className="fex flex-col">
              <p className="text-foreground-500 line-clamp-1 max-w-40">
                {dayjs(record.created_at).format('hh:mm A')}
              </p>
              <p className="line-clamp-1 max-w-40">
                {dayjs(record.created_at).format('DD MMM YYYY')}
              </p>
            </div>
          ),
        },
        {
          title: 'Name',
          key: 'name',
          component: (_, record) => (
            <p className="line-clamp-1 max-w-40">{record.name}</p>
          ),
        },
        {
          title: 'Email',
          key: 'email',
          component: (d) => <p className="line-clamp-1 max-w-40">{d}</p>,
        },
        {
          title: 'Action',
          key: 'id',
          align: 'center',
          component(data, rowData) {
            return (
              <div className="flex items-center justify-center gap-2">
                <DialogBox
                  title="Submission Details"
                  boxContent={
                    <table className="w-full">
                      <tbody>
                        <tr>
                          <td className="text-primary w-40">Name</td>
                          <td>{rowData.name}</td>
                        </tr>
                        <tr className="h-4"></tr>
                        <tr>
                          <td className="text-primary w-40">Email</td>
                          <td>{rowData.email}</td>
                        </tr>
                        <tr className="h-4"></tr>
                        <tr>
                          <td className="text-primary w-40">Subject</td>
                          <td>{rowData.subject}</td>
                        </tr>
                        <tr className="h-4"></tr>
                        <tr>
                          <td className="text-primary w-40">Message</td>
                          <td>{rowData.message}</td>
                        </tr>
                      </tbody>
                    </table>
                  }
                >
                  <Button
                    color="secondary"
                    variant="light"
                    isIconOnly
                    aria-label="View"
                    className="text-2xl"
                  >
                    <IoNewspaperOutline />
                  </Button>
                </DialogBox>
                <DeleteButton
                  onDelete={async () => {
                    await supabase.storage
                      .from('papers')
                      .remove([rowData.file]);
                    getData(page, search);
                  }}
                  id={rowData.id}
                  table="contact"
                  name={`data of "${rowData.name}"`}
                />
              </div>
            );
          },
        },
      ]}
    />
  );
}
