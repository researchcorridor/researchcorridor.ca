'use client';

import { Button, cn } from '@heroui/react';
import { useEffect, useState } from 'react';
import { BiSolidEdit } from 'react-icons/bi';
import { IoMdHome } from 'react-icons/io';
import { PiHandshake } from 'react-icons/pi';

import DataTable from '@/components/ui/data-table';
import DeleteButton from '@/components/ui/delete-button';
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
    getData(1, value);
  };

  return (
    <DataTable
      title="Researchers"
      Icon={PiHandshake}
      addButtonLink="/dashboard/researchers/create"
      addButtonText="Add Researchers"
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
          title: 'Home',
          key: 'home',
          component: (home) => (
            <IoMdHome
              className={cn('text-xl', home ? 'text-primary' : 'text-gray-300')}
            />
          ),
        },
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
          key: 'id',
          align: 'center',
          component(data, rowData) {
            return (
              <div className="flex items-center justify-center gap-2">
                <Button
                  as="a"
                  href={`/dashboard/researchers/${rowData.id}`}
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
                  table="researcher"
                  name={`researcher "${rowData.name}"`}
                />
              </div>
            );
          },
        },
      ]}
    />
  );
}
