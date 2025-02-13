'use client';

import { Image } from '@heroui/react';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { LuUserRound } from 'react-icons/lu';
import { PiHandshake } from 'react-icons/pi';

import EditForm from '@/components/ui/edit-form';
import FileUploadButton from '@/components/ui/FileUploadButton';
import { ResearcherCardType } from '@/types/researcher.type';
import { supabase } from '@/utils/supabase/client';

export default function Collaborations() {
  const { id } = useParams();
  const [data, setData] = useState<ResearcherCardType>({
    avatar: '',
    comment: '',
    from: '',
    name: '',
    position: '',
    link: '',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id !== 'create') {
      setLoading(true);
      supabase
        .from('researcher')
        .select('*')
        .eq('id', id)
        .then(({ data, error }) => {
          setLoading(false);
          if (error) {
            console.error(error);
          } else {
            console.log(data);
            setData(data[0]);
            setLoading(false);
          }
        });
    } else {
      setLoading(false);
    }
  }, [id]);

  return (
    <EditForm
      isLoading={loading}
      data={data}
      title="Collaboration"
      Icon={PiHandshake}
      cancelLink="/dashboard/collaborations"
      onSubmit={async (FormData) => {
        const body = {
          name: FormData.get('name'),
          position: FormData.get('position'),
          from: FormData.get('from'),
          comment: FormData.get('comment'),
          link: FormData.get('link'),
          avatar: data.avatar,
        };
        const { error } = await supabase.from('researcher').upsert(body);
        if (error) return error.message;
        return '';
      }}
      inputs={[
        {
          label: 'Avatar',
          name: 'avatar',
          component(value, loading) {
            return (
              <div className="flex items-center gap-2">
                {data.avatar ? (
                  <Image
                    src={data.avatar}
                    alt="Profile Picture"
                    height={60}
                    width={60}
                    className="bg-primary-200 rounded-full"
                  />
                ) : (
                  <div className="bg-primary-200 flex size-20 items-center justify-center rounded-full p-1">
                    <LuUserRound className="text-5xl text-white" />
                  </div>
                )}
                <FileUploadButton
                  disabled={loading}
                  bucketName="/upload"
                  size="lg"
                  onUpload={(url) => {
                    setData({ ...data, avatar: url });
                  }}
                />
              </div>
            );
          },
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
