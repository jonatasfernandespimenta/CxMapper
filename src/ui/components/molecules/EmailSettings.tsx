'use client';

import { useEffect, useState } from 'react';
import { IItem, useRulerData } from '@/contexts/RulerContext';
import Input from '../atoms/Input';
import TextArea from '../atoms/TextArea';
import FileInput from '../atoms/FileInput';
import Select from '../atoms/Select';
import SelectSearchOrCreate from '../atoms/SelectSearchOrCreate';

interface IEmailSettings {
  item: IItem<'email'>;
}

export default function EmailSettings({ item }: IEmailSettings) {
  const { items, setItems } = useRulerData();

  const [to, setTo] = useState<string>('');
  const [subject, setSubject] = useState<string>(item.props?.subject || '');
  const [message, setMessage] = useState<string>('');
  const [attachment, setAttachment] = useState<string>();
  const [template, setTemplate] = useState<string | undefined>('');
  const [dataset, setDataset] = useState<string | undefined>('');
  const [actionDescription, setActionDescription] = useState<string>('');
  const [provider, setProvider] = useState<string>('');

  function saveProps() {
    const updatedItem: IItem<'email'> = {
      ...item,
      description: actionDescription,
      props: {
        to,
        subject,
        message,
        attachment,
        from: 'company@company.com',
        templateId: template ?? '',
        providerId: provider,
      },
    };

    const updatedItems = [...items];

    const itemIndex = updatedItems.findIndex((i) => i.id === item.id);
    updatedItems[itemIndex] = updatedItem;

    setItems(updatedItems);
  }

  useEffect(() => {
    saveProps();
  }, [to, subject, message, attachment, template, dataset, actionDescription]);

  const optionList = [
    { value: '1', label: 'Welcome' },
    { value: '2', label: 'Newsletter' },
  ];

  return (
    <div className="flex flex-col gap-4 text-black">
      <div>
        <p>Action Description</p>
        <Input
          onChange={(e) => setActionDescription(e.target.value)}
          value={actionDescription}
        />
      </div>

      <div>
        <p>Dataset</p>
        <SelectSearchOrCreate
          onChange={(e) => setDataset(e?.value)}
          options={optionList}
        />
      </div>

      <div>
        <p>To</p>
        <SelectSearchOrCreate
          onChange={(e) => setTo(e.value)}
          options={[
            { value: '1', label: 'Email.Subject' },
            { value: '2', label: 'User.Email' },
            { value: '3', label: 'Email.Body' },
            { value: '4', label: 'User.Phone' },
            { value: '5', label: 'User.Name' },
          ]}
        />
      </div>

      <div>
        <p>Template</p>
        <SelectSearchOrCreate
          onChange={(e) => setTemplate(e?.value)}
          options={optionList}
        />
      </div>

      <div>
        <p>Subject</p>
        <SelectSearchOrCreate
          onChange={(e) => setSubject(e.value)}
          options={[
            { value: '1', label: 'Email.Subject' },
            { value: '2', label: 'User.Email' },
            { value: '3', label: 'Email.Body' },
          ]}
        />
      </div>

      <div>
        <p>Body</p>
        <TextArea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <div>
        <p>Atachment</p>

        <FileInput
          value={attachment}
          onChange={(e) => setAttachment(e.target.value)}
        />
      </div>

      <div>
        <p>Provider</p>
        <SelectSearchOrCreate
          onChange={(e) => setProvider(e?.value)}
          options={[{ value: '1', label: 'AWS SES' },
            { value: '2', label: 'Mailchimp SMTP' },
            { value: '3', label: 'Azure Communication Service' }]}
        />
      </div>

      <div>
        <p>Box</p>
        <Select value={to} onChange={(e) => setTo(e.target.value)}>
          <option value="Nome">Email Files</option>
          <option value="Idade">Garbage</option>
        </Select>
      </div>
    </div>
  );
}
