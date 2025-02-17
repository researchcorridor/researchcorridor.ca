'use client';

import { Button } from '@heroui/react';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { BiSolidEdit } from 'react-icons/bi';
import { PiHandshake } from 'react-icons/pi';

import DataTable from '@/components/ui/data-table';
import DateRange, { DateRangeState } from '@/components/ui/date-range';
import DeleteButton from '@/components/ui/delete-button';
import { supabase } from '@/utils/supabase/client';

export default function Collaborations() {
  const PAGE_SIZE = 10;
  const [data, setData] = useState<any[]>([]);
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
      console.log('q', q);
      console.log('dateRange', dr);
      const { data, count, error } = (await supabase
        .from('submissions')
        .select('*', { count: 'exact' })
        .range((page - 1) * PAGE_SIZE, page * PAGE_SIZE - 1)
        .order('created_at', { ascending: false })
        .or(
          `email.ilike.%${q}%,first_name.ilike.%${q}%,last_name.ilike.%${q}%,institution.ilike.%${q}%,country.ilike.%${q}%`,
        )
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

  return (
    <DataTable
      title="Submissions"
      Icon={PiHandshake}
      addButtonLink="/submit-paper"
      addButtonText="Add submissions"
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
            <p className="line-clamp-1 max-w-40">
              {dayjs(record.created_at).format('DD MMM YYYY')}
            </p>
          ),
        },
        {
          title: 'First Name',
          key: 'first_name',
          component: (_, record) => (
            <p className="line-clamp-1 max-w-40">
              {`${record.first_name} ${record.last_name}`}
            </p>
          ),
        },
        {
          title: 'Email',
          key: 'email',
          component: (d) => <p className="line-clamp-1 max-w-40">{d}</p>,
        },
        {
          title: 'Institution',
          key: 'institution',
          component: (d) => <p className="line-clamp-1 max-w-40">{d}</p>,
        },
        {
          title: 'Country',
          key: 'country',
          component: (d) => <p className="line-clamp-1">{d}</p>,
        },
        {
          title: 'Action',
          key: 'id',
          align: 'center',
          component(data, rowData) {
            return (
              <div className="flex items-center justify-center gap-2">
                <Button
                  as="a"
                  href={`/dashboard/submissions/${rowData.id}`}
                  color="primary"
                  variant="light"
                  isIconOnly
                  aria-label="Edit"
                  className="text-2xl"
                >
                  <BiSolidEdit />
                </Button>
                <DeleteButton
                  onDelete={() => {
                    getData(page, search);
                  }}
                  id={rowData.id}
                  table="submissions"
                  name={`Submissions of "${rowData.first_name}"`}
                />
              </div>
            );
          },
        },
      ]}
    />
  );
}
