'use client';

import { Image } from '@heroui/react';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { PiListMagnifyingGlass } from 'react-icons/pi';

import EditForm from '@/components/ui/edit-form';
import FileUploadButton from '@/components/ui/FileUploadButton';
import { supabase } from '@/utils/supabase/client';

export default function Collaborations() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<{
    title: string;
    description: string;
    thumbnail: string;
    link: string;
    home: boolean;
  }>({
    title: '',
    description: '',
    thumbnail: '',
    link: '',
    home: false,
  });

  const getData = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('collaboration')
      .select('*')
      .eq('id', id)
      .single();
    if (!error) {
      setData(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (id !== 'create') getData();
    else setLoading(false);
    // eslint-disable-next-line
  }, []);

  return (
    <EditForm
      isSkeleton={loading}
      data={data}
      title="Collaborations"
      Icon={PiListMagnifyingGlass}
      cancelLink="/dashboard/collaborations"
      onSubmit={async (FormData) => {
        const body = {
          title: FormData.get('title'),
          description: FormData.get('description'),
          link: FormData.get('link'),
          thumbnail: data.thumbnail,
          home: FormData.get('home') !== null,
        };
        if (id === 'create') {
          const { error } = await supabase.from('collaboration').insert(body);
          if (error) return error.message;
        } else {
          const { error } = await supabase
            .from('collaboration')
            .update(body)
            .eq('id', id);
          if (error) return error.message;
        }
        return '';
      }}
      inputs={[
        {
          label: 'Avatar',
          name: 'avatar',
          component(value, loading) {
            return (
              <div className="flex items-end gap-2">
                {data.thumbnail ? (
                  <Image
                    src={data.thumbnail}
                    alt="Profile Picture"
                    className="border-default-200 rounded-medium flex size-40 items-center justify-center border-2 shadow-sm"
                  />
                ) : (
                  <div className="border-default-200 rounded-medium flex size-40 items-center justify-center border-2 shadow-sm">
                    logo
                  </div>
                )}
                <FileUploadButton
                  disabled={loading}
                  bucketName="/upload"
                  size="lg"
                  buttonLabel={
                    data.thumbnail ? 'Change Thumbnail' : 'Upload Thumbnail'
                  }
                  onUpload={(url) => {
                    setData({ ...data, thumbnail: url });
                  }}
                />
              </div>
            );
          },
        },
        {
          label: 'Show on Home',
          name: 'home',
          componentType: 'switch',
        },
        {
          label: 'Link',
          name: 'link',
          type: 'url',
          required: true,
        },
        {
          label: 'Title',
          name: 'title',
          required: true,
        },
        {
          label: 'Description',
          name: 'description',
          required: true,
          componentType: 'textarea',
        },
      ]}
    />
  );
}
