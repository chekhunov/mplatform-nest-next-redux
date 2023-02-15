import React, {FC, useRef} from 'react';

interface FileUploadProps {
  file: any
  setFile: Function
  accept: string
}

const FileUpload: FC<FileUploadProps> = ({setFile, accept, children}) => {
  const ref = useRef<HTMLInputElement>()
  //событие onChange у елемента инпут
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target?.files[0])
  }
  return (
    <div onClick={() => ref.current?.click()}>
      <input type="file" accept={accept} style={{display: "none"}} ref={ref} onChange={onChange}/>
      {children}
    </div>
  );
};

export default FileUpload;