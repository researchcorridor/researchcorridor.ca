'use client';

import GjsEditor from '@grapesjs/react';
import { type Editor, grapesjs } from 'grapesjs';
import grapesjsTailwind from 'grapesjs-tailwind';
import { useParams } from 'next/navigation';
import * as React from 'react';
import toast from 'react-hot-toast';

import { getPageBody, setPageBody } from '@/actions/editor.actions';

export default function EditorPage() {
  const { id } = useParams<{ id: string }>();

  const onEditor = (editor: Editor) => {
    // Set up the editor with custom configuration
    editor.on('load', async () => {
      const { css, html, error } = await getPageBody(id);
      if (error) {
        console.error('Error loading page:', error);
        toast.error('Error loading page');
        return;
      }
      editor.setComponents(html || '');
      editor.setStyle(css || '');
    });

    // Add Save button
    editor.Panels.addButton('options', {
      id: 'save',
      className: 'fa fa-floppy-o',
      command: async () => {
        const html = editor.getHtml() || '';
        const css = editor.getCss() || '';
        const error = await setPageBody(id, html, css);
        if (error) {
          console.error('Error saving page:', error);
          toast.error('Error saving page');
          return;
        }
        toast.success('Page saved successfully!');
      },
    });

    // Add Undo button
    editor.Panels.addButton('options', {
      id: 'undo',
      className: 'fa fa-undo',
      command: 'core:undo',
      attributes: { title: 'Undo' },
    });

    // Add Redo button
    editor.Panels.addButton('options', {
      id: 'redo',
      className: 'fa fa-repeat',
      command: 'core:redo',
      attributes: { title: 'Redo' },
    });

    // Remove the default Code View button
    editor.Panels.removeButton('options', 'export-template');
  };

  return (
    <GjsEditor
      grapesjs={grapesjs}
      onEditor={onEditor}
      grapesjsCss="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
      options={{
        height: '100vh',
        storageManager: false,
        cssComposer: {
          stylePrefix: 'gjs-',
        },
      }}
      plugins={[
        grapesjsTailwind,
        {
          id: 'gjs-blocks-basic',
          src: 'https://unpkg.com/grapesjs-blocks-basic',
        },
      ]}
    />
  );
}
