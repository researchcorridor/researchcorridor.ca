'use client';

import { Image } from '@heroui/react';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { LuUserRound } from 'react-icons/lu';
import { PiListMagnifyingGlass } from 'react-icons/pi';

import EditForm from '@/components/ui/edit-form';
import FileUploadButton from '@/components/ui/FileUploadButton';
import { ResearcherCardType } from '@/types/researcher.type';
import { supabase } from '@/utils/supabase/client';

export default function Collaborations() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<ResearcherCardType>({
    avatar: '',
    comment: '',
    from: '',
    name: '',
    position: '',
    link: '',
  });

  const getData = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('researcher')
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
      title="Researcher"
      Icon={PiListMagnifyingGlass}
      cancelLink="/dashboard/researchers"
      onSubmit={async (FormData) => {
        const body = {
          name: FormData.get('name'),
          position: FormData.get('position'),
          from: FormData.get('from'),
          comment: FormData.get('comment'),
          link: FormData.get('link'),
          avatar: data.avatar,
          home: FormData.get('home') !== null,
        };
        if (id === 'create') {
          const { error } = await supabase.from('researcher').insert(body);
          if (error) return error.message;
        } else {
          const { error } = await supabase
            .from('researcher')
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
                {data.avatar ? (
                  <Image
                    src={data.avatar}
                    alt="Profile Picture"
                    className="border-default-200 rounded-medium flex size-40 items-center justify-center border-2 shadow-sm"
                  />
                ) : (
                  <div className="border-default-200 rounded-medium flex size-40 items-center justify-center border-2 shadow-sm">
                    <LuUserRound className="text-default-200 text-5xl" />
                  </div>
                )}
                <FileUploadButton
                  disabled={loading}
                  bucketName="/upload"
                  size="lg"
                  buttonLabel={data.avatar ? 'Change Avatar' : 'Upload Avatar'}
                  onUpload={(url) => {
                    setData({ ...data, avatar: url });
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
          label: 'Other Profile Link',
          name: 'link',
          type: 'text',
        },
        {
          label: 'Name',
          name: 'name',
          required: true,
        },
        {
          label: 'Position',
          name: 'position',
        },
        {
          label: 'From (Institution)',
          name: 'from',
          required: true,
        },
        {
          label: 'Comment',
          name: 'comment',
          required: true,
          componentType: 'textarea',
        },
      ]}
    />
  );
}
