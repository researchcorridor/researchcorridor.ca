import { Button } from '@heroui/react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { AiOutlineDelete } from 'react-icons/ai';

import { supabase } from '@/utils/supabase/client';

import DialogBox from './dialog-box';

interface DeleteButtonProps {
  onDelete: () => void;
  id: string;
  table: string;
  name: string;
}

export default function DeleteButton({
  onDelete,
  id,
  table,
  name,
}: DeleteButtonProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const deleteData = async () => {
    setLoading(true);
    const { error } = await supabase.from(table).delete().eq('id', id);
    if (error) {
      toast.error(error.message);
    } else {
      onDelete();
    }
    setLoading(false);
  };
  return (
    <DialogBox
      open={open}
      onOpenChange={setOpen}
      boxContent={
        <div>
          <h1 className="text-primary text-center text-2xl">
            Delete Confirmation
          </h1>
          <p className="text-primary text-center">
            Are you sure you want to delete this {name}?
          </p>
          <div className="mt-5 flex justify-center gap-4">
            <Button
              color="default"
              variant="bordered"
              onPress={() => {
                setOpen(false);
              }}
            >
              No
            </Button>
            <Button
              color="danger"
              variant="solid"
              isLoading={loading}
              onPress={deleteData}
            >
              Yes
            </Button>
          </div>
        </div>
      }
    >
      <Button
        color="danger"
        variant="light"
        isIconOnly
        aria-label="Edit"
        className="text-2xl"
      >
        <AiOutlineDelete />
      </Button>
    </DialogBox>
  );
}
