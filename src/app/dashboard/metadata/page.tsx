'use client';

import { Button, Form, Input } from '@heroui/react';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { BiSolidEdit } from 'react-icons/bi';
import { MdScreenSearchDesktop } from 'react-icons/md';

import DataTable from '@/components/ui/data-table';
import DialogBox from '@/components/ui/dialog-box';
import { supabase } from '@/utils/supabase/client';

export default function Collaborations() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [update, setUpdate] = useState<{
    page?: string;
    heading?: string;
    detail?: string;
    title?: string;
    description?: string;
    keywords?: string[];
    url?: string;
  }>({});

  const getData = async (q: string = '') => {
    try {
      setLoading(true);
      const { data, error } = (await supabase
        .from('metadata')
        .select('*')
        .or(`page.ilike.%${q}%`)) as any;
      setLoading(false);
      if (error) {
        console.error(error);
      } else {
        setData(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <DataTable
      title="Meta Data"
      Icon={MdScreenSearchDesktop}
      rows={data}
      onSearch={(value: string) => {
        setSearch(value);
        getData(value);
      }}
      isLoading={loading}
      columns={[
        {
          title: 'Page',
          key: 'page',
        },
        {
          title: 'Title',
          key: 'title',
          component: (_, record) => (
            <p className="line-clamp-1 max-w-40">{record.page}</p>
          ),
        },
        {
          title: 'Action',
          key: 'id',
          align: 'center',
          component(_, rowData) {
            return (
              <div className="flex items-center justify-center gap-2">
                <DialogBox
                  open={openEdit}
                  onOpenChange={() => {
                    setOpenEdit(!openEdit);
                    setUpdate(rowData);
                  }}
                  title={`Edit Metadata of ${rowData.page}`}
                  boxContent={
                    <Form
                      className="flex flex-col gap-4"
                      onSubmit={async (e) => {
                        e.preventDefault();
                        const { error } = await supabase
                          .from('metadata')
                          .update(update)
                          .eq('id', rowData.id);
                        if (error) {
                          console.error(error);
                        }
                        toast.success('Metadata updated successfully');
                        setOpenEdit(false);
                        getData(search);
                      }}
                    >
                      <Input
                        label="Page Heading"
                        name="heading"
                        value={update.heading}
                        onChange={(e) =>
                          setUpdate({ ...update, heading: e.target.value })
                        }
                      />
                      <Input
                        label="Page Detail"
                        name="detail"
                        value={update.detail}
                        onChange={(e) =>
                          setUpdate({ ...update, detail: e.target.value })
                        }
                      />
                      <Input
                        label="Page URL"
                        name="url"
                        value={update.url}
                        onChange={(e) =>
                          setUpdate({ ...update, url: e.target.value })
                        }
                      />
                      <Input
                        label="Meta Title"
                        name="title"
                        value={update.title}
                        onChange={(e) =>
                          setUpdate({ ...update, title: e.target.value })
                        }
                      />
                      <Input
                        label="Meta Description"
                        name="description"
                        value={update.description}
                        onChange={(e) =>
                          setUpdate({ ...update, description: e.target.value })
                        }
                      />
                      <Input
                        label="Meta Keywords"
                        name="keywords"
                        value={update.keywords?.join(',')}
                        onChange={(e) =>
                          setUpdate({
                            ...update,
                            keywords: e.target.value.split(','),
                          })
                        }
                      />
                      <div className="flex w-full justify-end">
                        <Button type="submit" color="primary">
                          Update
                        </Button>
                      </div>
                    </Form>
                  }
                >
                  <Button
                    color="secondary"
                    variant="light"
                    isIconOnly
                    aria-label="View"
                    className="text-2xl"
                  >
                    <BiSolidEdit />
                  </Button>
                </DialogBox>
              </div>
            );
          },
        },
      ]}
    />
  );
}
