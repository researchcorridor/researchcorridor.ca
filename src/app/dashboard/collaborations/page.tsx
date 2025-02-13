'use client';

import { Button } from '@heroui/react';
import { useEffect, useState } from 'react';
import { BiSolidEdit } from 'react-icons/bi';
import { PiHandshake } from 'react-icons/pi';

import DataTable from '@/components/ui/data-table';
import { supabase } from '@/utils/supabase/client';

export default function Collaborations() {
  const PAGE_SIZE = 10;
  const [data, setData] = useState<any[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  const getData = async (page: number = 1, q: string = '') => {
    try {
      setLoading(true);
      const { data, count, error } = (await supabase
        .from('researcher')
        .select('*', { count: 'exact' })
        .range((page - 1) * PAGE_SIZE, page * PAGE_SIZE - 1)
        .order('created_at', { ascending: false })
        .ilike('name', `%${q}%`)) as any;
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
  }, []);

  const onSearch = (value: string) => {
    setSearch(value);
    setPage(1);
  };

  return (
    <DataTable
      title="Collaborations"
      Icon={PiHandshake}
      addButtonLink="/dashboard/collaborations/create"
      addButtonText="Create Collaboration"
      rows={data}
      onSearch={onSearch}
      isLoading={loading}
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
          title: 'Name',
          key: 'name',
        },
        {
          title: 'Position',
          key: 'position',
        },
        {
          title: 'From',
          key: 'from',
        },
        {
          title: 'Action',
          key: 'action',
          component(data, rowData) {
            return (
              <Button
                as="a"
                href={`/dashboard/collaborations/${rowData.id}`}
                color="primary"
                variant="light"
                isIconOnly
                aria-label="Edit"
                className="text-2xl"
              >
                <BiSolidEdit />
              </Button>
            );
          },
        },
      ]}
    />
  );
}
