import s from './uploadPopup.module.scss';
import React, { useRef, useState, DragEvent, ChangeEvent, useEffect } from 'react';
import Typo from '../typo/typo';
import Button from '../button/button';
interface UploadPopupProps {
  open: boolean;
  onClose: () => void;
  uploadAdress: string;
}
const FileUploadModal: React.FC<UploadPopupProps> = ({ open, onClose, uploadAdress }) => {
  const [isDragActive, setIsDragActive] = useState(false);
  const [file, setFile] = useState();
  const fileInputRef = useRef<HTMLInputElement>(null);
  useEffect(()=>{console.log(file)},[file])
  if (!open) return null;

  const uploadFile = async (file:any) => {
    const formData = new FormData();
    formData.append('file', file); // ключ 'file' должен совпадать с upload.single('file')
    const response = await fetch(uploadAdress, {
      method: 'POST',
      body: formData,
      credentials: 'include',
    });

    const data = await response.json();
    console.log('Server response:', data);
  };


  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragActive(false);
    if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
      setFile(event.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragActive(true);
  };

  const handleDragLeave = () => {
    setIsDragActive(false);
  };

  return (
    <div className={s.modalBackdrop}>
      <div className={s.modal}>
        <h2 className={s.modalTitle}>Загрузка файлов</h2>
        <div
          className={`${s.dropzone} ${isDragActive ? s.active : ""}`}
          onClick={() => fileInputRef.current?.click()}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          <Typo size={18} weight={500} color={'#000000'}>Перетащите файл сюда или нажмите, чтобы выбрать</Typo>
        </div>
        <input
          type="file"
          ref={fileInputRef}
          className={s.hiddenInput}
          onChange={(e)=>{setFile(e.target.files[0])}}
        />
        {file?.name && <Typo marginTop={20} weight={500} size={16} color={'#000000'}>Файл <span style={{color: '#ED4D00'}}>{file?.name}</span> загружен, подтвердите отправку</Typo>}
        <div className={s.buttonGroup}>
          <Button width={200} onClick={()=>{uploadFile(file)}} marginBottom={20}><Typo weight={500} size={18} color={'#FFFFFF'}>Загрузить</Typo></Button>
          <Button width={200} onClick={onClose}><Typo weight={500} size={18} color={'#FFFFFF'}>Отмена</Typo></Button>
        </div>
      </div>
    </div>
  );
};

export default FileUploadModal;
