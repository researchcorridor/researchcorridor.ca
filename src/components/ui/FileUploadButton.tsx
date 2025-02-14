import { Button } from '@heroui/react';
import React, { ChangeEvent, useState } from 'react';
import { MdOutlineUploadFile } from 'react-icons/md';

import { supabase } from '@/utils/supabase/client';

interface FileUploadButtonProps {
  bucketName: string;
  onUpload: (url: string) => void;
  buttonLabel?: string;
  disabled?: boolean;
  className?: string;
  icon?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const FileUploadButton: React.FC<FileUploadButtonProps> = ({
  bucketName,
  onUpload,
  buttonLabel = 'Upload File',
  disabled = false,
  icon = true,
  size = 'sm',
  className,
}) => {
  const [loading, setLoading] = useState(false);

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      await handleUpload(file);
    }
  };

  const handleUpload = async (file: File) => {
    try {
      setLoading(true);
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error } = await supabase.storage
        .from(bucketName)
        .upload(filePath, file);

      if (error) throw error;

      const { data } = supabase.storage.from(bucketName).getPublicUrl(filePath);

      if (data?.publicUrl) {
        onUpload(data.publicUrl);
      } else {
        throw new Error('Failed to retrieve public URL');
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error uploading file:', error.message);
      } else {
        console.error('Error uploading file:', error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        type="file"
        id="file-input"
        style={{ display: 'none' }}
        onChange={handleFileChange}
        disabled={disabled || loading}
      />
      <label htmlFor="file-input">
        <Button
          isDisabled={disabled}
          as="span"
          isLoading={loading}
          className={className}
          size={size}
          color="primary"
        >
          {icon && <MdOutlineUploadFile />}
          {loading ? 'Uploading...' : buttonLabel}
        </Button>
      </label>
    </div>
  );
};

export default FileUploadButton;
